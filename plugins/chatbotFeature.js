// chatbotFeature.js
// Commenting out the OpenAI integration code

// const openai = require('openai'); 
// const apiKey = process.env.OPENAI_API_KEY;

// const generateResponse = async (message) => {
//   const response = await openai?.chat?.completions?.create({
//     model: "gpt-3.5-turbo",
//     messages: [
//       {
//         role: "system",
//         content: "You are Efe 2.0, a chatbot that reluctantly answers questions with sarcastic responses.",
//       },
//       {
//         role: "user",
//         content: message,
//       },
//     ],
//     temperature: 0.5,
//     max_tokens: 256,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0,
//   });
//   return response.choices[0].message.content;
// };

// module.exports = { generateResponse };
