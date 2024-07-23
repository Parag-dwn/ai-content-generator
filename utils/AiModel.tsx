const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY);
const generationConfig = {
    maxOutputTokens: 1000,
    temperature: 0.9,
    topP: 0.1,
    topK: 32,
    // responseMineType:"text/plain",
  };
  
  // The Gemini 1.5 models are versatile and work with most use cases
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  export const chatSession =model.startChat({
    generationConfig,history:[

    ],
  })