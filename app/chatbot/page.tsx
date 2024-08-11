// app/chatbot/page.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  FaPaperPlane,
  FaDumbbell,
  FaUser,
  FaHistory,
  FaPlus,
  FaRunning,
  FaAppleAlt,
  FaFootballBall,
  FaHome,
} from "react-icons/fa";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

interface ChatSession {
  id: number;
  title: string;
  category: string;
  messages: Message[];
}

const categories = [
  { name: "Gym", icon: FaDumbbell },
  { name: "Fitness", icon: FaRunning },
  { name: "Nutrition", icon: FaAppleAlt },
  { name: "Sports", icon: FaFootballBall },
];

const Chatbot: React.FC = () => {
  const [input, setInput] = useState("");
  const [currentSession, setCurrentSession] = useState<ChatSession>({
    id: Date.now(),
    title: "New Chat",
    category: "Gym",
    messages: [],
  });
  const [chatHistory, setChatHistory] = useState<ChatSession[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const router = useRouter();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load chat history from local storage
    const storedHistory = localStorage.getItem("chatHistory");
    if (storedHistory) {
      setChatHistory(JSON.parse(storedHistory));
    }

    // Load current session from local storage
    const storedSession = localStorage.getItem("currentSession");
    if (storedSession) {
      setCurrentSession(JSON.parse(storedSession));
    }
  }, []);

  useEffect(() => {
    // Save chat history to local storage
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [chatHistory]);

  useEffect(() => {
    // Save current session to local storage
    localStorage.setItem("currentSession", JSON.stringify(currentSession));
  }, [currentSession]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [currentSession.messages]);

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const newMessage: Message = { id: Date.now(), text: input, isUser: true };
    setCurrentSession((prevSession) => ({
      ...prevSession,
      messages: [...prevSession.messages, newMessage],
    }));
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now(),
        text: generateAIResponse(input, currentSession.category),
        isUser: false,
      };
      setCurrentSession((prevSession) => ({
        ...prevSession,
        messages: [...prevSession.messages, aiResponse],
      }));
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const generateAIResponse = (userInput: string, category: string): string => {
    const responses = {
      Gym: [
        "Great question about gym workouts! What specific exercise are you interested in?",
        "Remember to always warm up before starting your gym routine. What's your typical warm-up?",
        "Proper form is crucial in the gym. Would you like some tips on maintaining good form?",
        "Rest days are important too. How often do you take rest days between gym sessions?",
      ],
      Fitness: [
        "Fitness is about consistency. What's your current fitness routine?",
        "Have you considered incorporating HIIT workouts into your fitness plan?",
        "Tracking progress is motivating. Do you use any fitness apps or wearables?",
        "Balance is key in fitness. How do you mix cardio and strength training?",
      ],
      Nutrition: [
        "A balanced diet is crucial for overall health. What does your typical daily meal plan look like?",
        "Hydration is often overlooked. How much water do you drink daily?",
        "Protein is important for muscle recovery. What are your main sources of protein?",
        "Have you considered consulting with a nutritionist for a personalized meal plan?",
      ],
      Sports: [
        "Sports are great for both fitness and fun. What's your favorite sport to play or watch?",
        "Cross-training can improve overall athletic performance. Do you practice multiple sports?",
        "Recovery is crucial in sports. What's your post-game recovery routine?",
        "Mental preparation is as important as physical in sports. How do you prepare mentally for a game or match?",
      ],
    };

    const categoryResponses =
      responses[category as keyof typeof responses] || responses.Gym;
    return categoryResponses[
      Math.floor(Math.random() * categoryResponses.length)
    ];
  };

  const startNewChat = (category: string) => {
    if (currentSession.messages.length > 0) {
      setChatHistory((prevHistory) => [...prevHistory, currentSession]);
    }
    setCurrentSession({
      id: Date.now(),
      title: `New ${category} Chat`,
      category,
      messages: [],
    });
  };

  const loadChatSession = (session: ChatSession) => {
    setCurrentSession(session);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-primary-200 text-gray-800 p-4 overflow-auto">
        <h2 className="text-xl font-bold mb-4 text-white">FitChat AI</h2>
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => startNewChat(cat.name)}
            className="w-full bg-red-600 text-white p-2 rounded mb-2 hover:bg-red-700 transition duration-300 flex items-center justify-center"
          >
            <cat.icon className="mr-2" /> New {cat.name} Chat
          </button>
        ))}
        <h3 className="text-lg font-semibold mt-4 mb-2 text-white">
          Chat History
        </h3>
        {chatHistory.map((session) => (
          <div
            key={session.id}
            onClick={() => loadChatSession(session)}
            className="cursor-pointer hover:bg-primary-300 p-2 rounded mb-1 flex items-center"
          >
            <FaHistory className="mr-2" />
            <span className="truncate">{session.title}</span>
          </div>
        ))}
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        <header className="bg-red-600 text-white p-4 flex items-center justify-between shadow-md">
          <div className="flex items-center">
            <FaDumbbell className="text-2xl mr-2" />
            <h1 className="text-2xl font-bold">
              FitChat AI - {currentSession.category}
            </h1>
          </div>
          <button
            onClick={() => router.push("/")}
            className="bg-white text-red-600 p-2 rounded hover:bg-gray-100 transition duration-300 flex items-center"
          >
            <FaHome className="mr-2" /> Home
          </button>
        </header>
        <div className="flex-grow overflow-auto p-4 bg-gray-100">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
            {currentSession.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isUser ? "justify-end" : "justify-start"
                } mb-4`}
              >
                <div
                  className={`flex items-end ${
                    message.isUser ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.isUser ? "bg-red-600 ml-2" : "bg-gray-400 mr-2"
                    }`}
                  >
                    {message.isUser ? (
                      <FaUser className="text-white" />
                    ) : (
                      <FaDumbbell className="text-white" />
                    )}
                  </div>
                  <div
                    className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-2 rounded-lg ${
                      message.isUser ? "bg-red-600 text-white" : "bg-gray-200"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-gray-200 px-4 py-2 rounded-lg">
                  Typing<span className="animate-pulse">...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <div className="p-4 bg-white border-t border-gray-300">
          <div className="max-w-3xl mx-auto flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder={`Ask about ${currentSession.category.toLowerCase()}...`}
            />
            <button
              onClick={handleSendMessage}
              className="bg-red-600 text-white p-2 rounded-r-lg hover:bg-red-700 transition duration-300"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
