import { GoogleGenerativeAI } from '@google/generative-ai';  // Import the module

// import dotenv from 'dotenv';

// // Load the environment variables from the .env file
// dotenv.config();
export async function generateContentFromAI(prompt) {
    try {
        // replace with GEMINI API key
        const apiKey = "";
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        return result.response.text();  // Return the generated content
    } catch (error) {
        console.error("Error generating content:", error);
        throw error;
    }
}



