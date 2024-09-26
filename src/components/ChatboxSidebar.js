import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
// import { XCircleIcon } from "@heroicons/react/24/outline";

const ChatboxSidebar = ({ toggleProductsWidth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  const [shouldPathCalled,setShouldPathCalled]=useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    toggleProductsWidth(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const systemResponses = {
    cart: "Here's your shopping cart. Take a look at what you've picked!",
    login: "Welcome back! Please log into your account to continue.",
    register: "Let's get you registered for a wonderful shopping experience.",
    detail: "Here it is - your Black T-shirt!",
    products: "Check out all these amazing products!",
    history: "Here's your order history!",
    status: "Check the status here!",
    payment: "Almost there! Make your payment here to complete the purchase.",
    red: "Here's your stunning Red T-shirt!",
    gray: "Here's your Gray T-shirt",
    jeans: "Here's your jeans",
    shoes:"Checkout these amazing shoes!",
    basket:"A multipurpose basket is a good choice to have",
    watch:"Check this amazing watch!",
    bag:"Here's your versatile bag – perfect for any occasion!",
    product:'Here is your product',
    default: "How can I assist you further?",
  };

  const commands = [
    { command: "cart", action: "cart" },
    { command: "login", action: "login" },
    { command: "register", action: "register" },
    { command: "black", action: "detail" },
    { command: "products", action: "products" },
    { command: "history", action: "history" },
    { command: "status", action: "status" },
    { command: "payment", action: "payment" },
    { command: "red", action: "red" },
    { command: "gray", action: "gray" },
    { command: "jeans", action: "item/jeans" },
    { command: "watch", action: "item/watch" },
    { command: "shoes", action: "item/shoes" },
    { command: "bag", action: "item/bag" },
  ];

  const parseUserInput = (input) => {
    const normalizedInput = input.trim().toLowerCase();
    const command = commands.find((cmd) =>
      normalizedInput.includes(cmd.command)
    );
    return command ? command.action : null;
  };

  // Map command action to response key for systemResponses
const getResponseKey = (command) => {
  switch (command) {
    case "item/jeans":
      return "jeans";
    case "item/watch":
      return "watch";
    case "item/shoes":
      return "shoes";
    case "item/bag":
      return "bag";
    // Add other specific mappings here if needed
    default:
      return command;
  }
};

  const handleSendMessage =async (e) => {
    e.preventDefault();
    if (input.trim()) {
      setIsLoading(true);
      const newMessage = { text: input, sender: "user" };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput("");

      try {
        const response = await axios.post('https://ai-salesman.com/chat/query', { // Replace with your actual API endpoint
          message: input,
        });

        const { route, componentData,responseText } = response.data; // Adjust based on your backend response structure
  
        // Navigate to the returned route with component data
        if (route) {
          navigate(route, { state: { componentData } });
        }
        const systemResponse = { text: responseText, sender: "system" };
        setMessages((prevMessages) => [...prevMessages, systemResponse]);
  
      } catch (error) {
        console.error("Error fetching route:", error);
      }finally {
        setIsLoading(false);
      }

      // const command = parseUserInput(input);
      // if (command) {
      //   navigate(`/${command}`);
      // }

      // const responseKey = getResponseKey(command);

      // const responseText =
      //   systemResponses[responseKey] || systemResponses["default"];
      // const systemResponse = { text: responseText, sender: "system" };

      // setMessages((prevMessages) => [...prevMessages, systemResponse]);
      setShouldPathCalled(false);
    }
  };

  const handleInitialMessage = () => {
    if (isFirstOpen) {
      const initialMessage = {
        text: systemResponses["default"],
        sender: "system",
      };
      setMessages([initialMessage]);
      setIsFirstOpen(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      handleInitialMessage();
    }
  }, [isOpen]);

  useEffect(() => {
    if(shouldPathCalled) {
      let text=location.pathname.substring(1);
      if (location.pathname.startsWith('/product/')) {
        text = 'product';
      }
    // console.log(text);
    const responseText =
        systemResponses[text] || systemResponses["default"];
        const systemResponse = { text: responseText, sender: "system" };

      setMessages((prevMessages) => [...prevMessages, systemResponse]);
    }else {
      setShouldPathCalled(true);
    }
  }, [location.pathname]);

  useEffect(()=> {
    toggleSidebar();
  },[]);

  const buttonStyle = {
    position: 'fixed',
    right: '0.5rem', // equivalent to right-2
    backgroundColor: '#f56565', // equivalent to bg-red-500
    color: 'white',
    padding: '0.5rem 0.8rem', // equivalent to py-2 px-2
    borderRadius: '0.375rem', // equivalent to rounded-md
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // equivalent to shadow-lg
    zIndex: 100, // equivalent to z-[100]
    top: isOpen ? '0.5rem' : 'auto',
    bottom: isOpen ? 'auto' : '1.25rem', // equivalent to bottom-5
    transition: 'background-color 0.3s',
    border:'none'
  };

  const sidebarStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100%',
    width: '20rem', // equivalent to w-80
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // equivalent to shadow-lg
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)', // equivalent to translate-x-0 and translate-x-full
    transition: 'transform 0.3s',
  };

  const messageContainerStyle = {
    flex: 1,
    padding: '1rem', // equivalent to p-4
    overflowY: 'auto',
  };

  const messageStyleUser = {
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    backgroundColor: '#ebf8ff', // equivalent to bg-blue-100
    textAlign: 'right',
    marginTop:'0.5rem'
  };

  const messageStyleBot = {
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    backgroundColor: '#f7fafc', // equivalent to bg-gray-100
    textAlign: 'left',
    marginTop:'0.5rem'
  };

  const formStyle = {
    display: 'flex',
  };

  const inputStyle = {
    flex: 1,
    padding: '0.5rem', // equivalent to p-2
    border: '1px solid #d1d5db', // equivalent to border-gray-300
    borderRadius: '0.375rem 0 0 0.375rem', // equivalent to rounded-l-lg
    outline: 'none',
  };
  
  const buttonSendStyle = {
    padding: '0.5rem', // equivalent to p-2
    backgroundColor: '#4c51bf', // equivalent to bg-indigo-500
    color: 'white',
    borderRadius: '0 0.375rem 0.375rem 0', // equivalent to rounded-r-md
    cursor: 'pointer',
    border:'none'
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        style={buttonStyle}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e53e3e')} // equivalent to hover:bg-red-600
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#f56565')}
      >
        {isOpen ? <span>X</span> : "Open Assistant"}
      </button>
      <div style={sidebarStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.125rem', fontWeight: '600' }}>AI Ecommerce</h2>
          </div>
          <div style={messageContainerStyle}>
            <div style={{ marginBottom: '1rem' }}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  style={message.sender === "user" ? messageStyleUser : messageStyleBot}
                >
                  {message.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
          <div style={{ padding: '1rem', borderTop: '1px solid #e2e8f0' }}>
            <form onSubmit={handleSendMessage} style={formStyle}>
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                style={inputStyle}
                placeholder="Type your message..."
                disabled={isLoading}
              />
              <button
                type="submit"
                style={buttonSendStyle}
                disabled={isLoading}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatboxSidebar;
