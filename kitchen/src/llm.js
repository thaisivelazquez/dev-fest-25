import { GoogleGenerativeAI } from '@google/generative-ai';  // Import the module

const SYSTEM_PROMPT = `You are a health assistant named Daniel! Help the user create recipes that fit their fitness goals. You can assist with:

- Crafting meals tailored to user's fitness goals (e.g., weight loss, muscle gain).
- Customizing recipes based on user's dietary preferences (e.g., vegetarian, keto).
- Suggesting meals that match user's taste (e.g., sweet, spicy, savory).
- Modifying recipes to include user's favorite ingredients or avoid ones they dislike.

BE AS CONCISE AS POSSIBLE`;



export async function generateContentFromAI(user_input, history) {
    try {
        // replace with GEMINI API key
        const apiKey = "";
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" ,  systemInstruction: SYSTEM_PROMPT});
        // const result = await model.generateContent(prompt);
        const chat = model.startChat({
            history: history,
          });
          
        let result = await chat.sendMessage(user_input);
        return result.response.text();  // Return the generated content
    } catch (error) {
        console.error("Error generating content:", error);
        throw error;
    }
}



