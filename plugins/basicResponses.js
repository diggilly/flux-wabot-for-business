// basicResponses.js
let userData = {}; // Store user interaction data

const basicResponses = {
  greetings: ['hello', 'hi', 'hey', 'hiya'],
  goodbyes: ['bye', 'goodbye', 'see you', 'later'],
  howAreYou: ['how are you', 'how are you doing', 'how’s it going'],
  
  // Load any stored user data (if any)
  loadData() {
    // Placeholder: You can implement loading data from a file or database if needed
    console.log("Data loaded.");
  },

  // Save user data (this could be improved with a database)
  saveData() {
    // Placeholder: You can implement saving data to a file or database
    console.log("Data saved.");
  },

  // Handle incoming messages and generate responses
  handleResponse(message, client, text) {
    let userName = message.from;
    let response = "";

    // Normalize the text to lower case
    const userMessage = text.toLowerCase();

    // Greet the user if they say a greeting
    if (this.greetings.some(greeting => userMessage.includes(greeting))) {
      response = "Hello! How can I assist you today?";
      userData[userName] = { lastMessage: "greeting" };
    }
    // Respond if the user asks how the bot is doing
    else if (this.howAreYou.some(phrase => userMessage.includes(phrase))) {
      response = "I'm doing great, thank you for asking! How about you?";
      userData[userName] = { lastMessage: "howAreYou" };
    }
    // Respond to goodbyes
    else if (this.goodbyes.some(phrase => userMessage.includes(phrase))) {
      response = "Goodbye! Have a great day!";
      userData[userName] = { lastMessage: "goodbye" };
    }
    // Default response if no match
    else {
      response = "I'm not sure how to respond to that. Could you please clarify?";
      userData[userName] = { lastMessage: "unknown" };
    }

    // Send the response
    client.sendMessage(message.from, response);
    this.saveData();  // Optionally save data after each interaction
  }
};

export { basicResponses };
