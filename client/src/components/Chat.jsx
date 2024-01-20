import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import {
    Input,
    Button,
    Spinner,
    IconButton,
    Popover,
    PopoverHandler,
    PopoverContent,
    Typography,
    Select,
    Option
} from "@material-tailwind/react";
import ReactMarkdown from 'react-markdown';
import usericon from "../assets/usericon.svg"
import button from "../assets/StartButton.svg"
import gemini from "../assets/Gemini.png"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Chat = () => {
    const [text, setText] = useState("");
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [ect, setECT] = useState("");

    const navigate = useNavigate();

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
        setDesc(response.text());
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

    const handleDifficultyChange = (e) => {
        setDifficulty(e)
    }

    const handleTaskCreation = async () => {
        const task = {
            title: title,
            description: desc,
            difficulty: difficulty,
            expected_completion_time : ect,
            user: 1,
            points: 69
        };
        await axios.post(`http://localhost:8000/tasks/tasks/`, task);
        setTitle("");
        setDesc("");
        setDifficulty("");
        setECT("");
        navigate("/dashboard");
    };

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
                                            backgroundColor: "#6B6EAB",
                                            padding: "2px",
                                            borderRadius: "25px",
                                            width: "80%",
                                            display: "flex",
                                            // flexDirection: "row",
                                        }}
                                        className=" text-white"
                                    >
                                        <ReactMarkdown className="p-3 markdown" >{message.text}</ReactMarkdown>
                                        {/* <p className="p-3">{message.text}</p> */}
                                        {message.sender === "bot" && (
                                            <>
                                                <div className="flex-grow">
                                                    <img src={gemini} alt="user" style={{ margin: "8px 8px 0 0" }} className="h-10 w-10 bg-indigo-500 rounded-full shadow-md" />
                                                    <Popover placement="right" className="z-[999]">
                                                        <PopoverHandler>
                                                            <IconButton color="indigo" size="sm" className="rounded-full my-2 mx-1 h-10 w-10">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                                                                </svg>
                                                            </IconButton>
                                                        </PopoverHandler>
                                                        <PopoverContent className="z-[9999] bg-[#EBEBF1] flex flex-col gap-5">
                                                            <Typography color="black" variant="h6" className=" font-info">Finalizing</Typography>
                                                            <Input type="text" color="indigo" size="md" label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                                            {/* <Input type="text" color="indigo" size="md" label="Description" value={desc} onChange={(e) => setDesc(e.target.value)} /> */}
                                                            <Select onChange={handleDifficultyChange} label="Difficulty" size="md">
                                                                <Option value="easy">Easy</Option>
                                                                <Option value="medium">Medium</Option>
                                                                <Option value="hard">Hard</Option>
                                                            </Select>
                                                            {/* <Input type="text" color="indigo" size="md" label="Points" value={69} /> */}
                                                            <Input type="number" color="indigo" size="md" label="Expected time to Complete" value={ect} onChange={(e)=>{setECT(e.target.value)}} />
                                                            <Button color="indigo" onClick={handleTaskCreation}>Create Task</Button>
                                                        </PopoverContent>
                                                    </Popover>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <form className="flex items-center" onSubmit={handleFormSubmit}>
                        <Input
                            type="text"
                            color="indigo"
                            size="md"
                            label="What do you need help with?"
                            value={userInput}
                            onChange={handleInputChange}
                        />
                        <img src={button} alt="button" className="w-24 md:w-24 h-24 ml-5 cursor-pointer" onClick={handleFormSubmit} />
                    </form>
                </div>
            </div>
        </>
    );
};