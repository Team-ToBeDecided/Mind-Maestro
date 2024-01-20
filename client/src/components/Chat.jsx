import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { Input, Button, Spinner, IconButton } from "@material-tailwind/react";
import ReactMarkdown from 'react-markdown';
import usericon from "../assets/usericon.svg"
import Markdown from 'markdown-to-jsx';
import gemini from "../assets/Gemini.png"


export const Chat = () => {
    const [text, setText] = useState("");
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);

    const MODEL_NAME = "gemini-pro";
    const API_KEY = import.meta.env.VITE_API_KEY;

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    }

    async function run() {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });

        const generationConfig = {
            temperature: 0.9,
            topK: 1,
            topP: 1,
            maxOutputTokens: 2048,
        };

        const safetySettings = [
            {
                category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
            },
            {
                category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
            },
            {
                category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
            },
            {
                category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH
            },
        ];

        const parts = [
            { text: "I have a task that I need to plan out. Here's what I need to do:" + userInput + " Can you help me create a schedule or plan in bullet points? The plan should be concise, with no more than seven bullet points, and cover the basic steps I need to take to complete this task." },
        ];

        setUserInput("");

        const result = await model.generateContent({
            contents: [{ role: "user", parts }],
            generationConfig,
            safetySettings,
        });

        const response = result.response;
        setMessages([...messages, { text: userInput, sender: "user" }, { text: response.text(), sender: "bot" }]);
        setText("")

    }

    useEffect(() => {
        setLoading(false);
    }, [messages])

    function handleFormSubmit(event) {
        event.preventDefault();
        setLoading(true); // prevent the form from refreshing the page
        run();
    }
    return (
        <>
            {loading && (
                <div className="flex items-center justify-center z-50 bg-transparent bg-opacity-50">
                    <Spinner className="h-16 w-16 text-[#6B6EAB]" color="indigo" />
                </div>
            )}
            <div className="flex flex-col mr-auto ml-auto overflow-auto ">
                <div className="w-full rounded shadow-lg p-6 mt-10 " style={{ backgroundColor: "" }}>
                    <div className="flex-grow overflow-y-auto mb-4 border border-gray-300 rounded overflow-auto">
                        {messages.map((message, index) => (
                            <div key={index} className={`mb-4 ${message.sender === "user" ? "text-right" : ""}`}>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: index % 2 === 0 ? "flex-end" : "flex-start" }}>
                                    {message.sender === "user" && (
                                        <img src={usericon} alt="user" style={{ margin: "0 0 8px 8px" }} />
                                    )}
                                    <div
                                        style={{
                                            color: "white",
                                            backgroundColor: "#6B6EAB",
                                            padding: "2px",
                                            borderRadius: "5px",
                                            width: "80%",
                                            display: "flex",
                                            // flexDirection: "row",
                                        }}
                                    >
                                        <ReactMarkdown className="markdown p-3">{message.text}</ReactMarkdown>
                                        {/* <Markdown>{message.text}</Markdown> */}
                                        {/* <p className="p-3">{message.text}</p> */}
                                        {message.sender === "bot" && (
                                            <img src={gemini} alt="user" style={{ margin: "8px 8px 0 0" }}  className="h-10 w-10 shadow-lg rounded-full bg-indigo-500"/>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <form className="flex items-center" onSubmit={handleFormSubmit}>
                        <Input
                            type="text"
                            color="blue"
                            size="md"
                            label="What do you need help with?"
                            value={userInput}
                            onChange={handleInputChange}
                        />
                        <Button className="ml-3"
                            color="blue"
                            size="md"
                            ripple={true}
                            type="submit" // make this button submit the form
                        >
                            Send
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
};