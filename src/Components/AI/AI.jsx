import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown';  // Use this import instead of the esm.sh URL

function AIDialogueBox() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [aiResponse, setAiResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const openDialogue = () => setIsOpen(true);
    const closeDialogue = () => setIsOpen(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = async () => {
        setLoading(true);
        const apiKey = import.meta.env.VITE_GOOGLE_GENERATIVE_AI_API_KEY;

        if (!apiKey) {
            console.error("API key not found. Make sure it is defined in your .env file.");
            return;
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        try {
            const result = await model.generateContent(inputValue);
            const candidates = result.response.candidates;
            const markdown = candidates[0].content.parts[0].text;
            setAiResponse(markdown);
        } catch (error) {
            setAiResponse("An error occurred while generating the response.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <button onClick={openDialogue} className="p-2 bg-white text-black font-bold rounded">ChatBot</button>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-black text-white p-6 rounded shadow-2lg w-96 absolute right-5 bottom-7">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold">Ask AI</h2>
                            <button onClick={closeDialogue} className="text-white text-3xl font-bold">&times;</button>
                        </div>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded mt-4 text-black"
                            placeholder="Type your question..."
                        />
                        <button
                            onClick={handleSubmit}
                            className="w-full p-2 bg-gray-700 hover:bg-gray-900 text-white rounded mt-4"
                            disabled={loading}
                        >
                            {loading ? 'Generating...' : 'Submit'}
                        </button>
                        <div className="mt-4">
                            <h3 className="text-lg font-medium">AI Response:</h3>
                            <div className="p-2 border h-[300px] overflow-scroll border-gray-300 rounded bg-gray-100 mt-2 text-black">
                                <ReactMarkdown>{aiResponse || "Your response will appear here."}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AIDialogueBox;
