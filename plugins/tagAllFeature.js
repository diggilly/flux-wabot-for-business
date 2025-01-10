// tagAllFeature.js
export const tagAll = async (message, client) => {
    try {
      // Check if the message is a reply
      if (!message.hasQuotedMsg) {
        await client.sendMessage(message.from, "Please reply to a message with 'tag all' to use this feature.");
        return;
      }
  
      // Get the replied message
      const quotedMessage = await message.getQuotedMessage();
      
      // Check if the quoted message contains the text "tag all"
      if (!quotedMessage.body.toLowerCase().includes('tag all')) {
        await client.sendMessage(message.from, "The replied message must contain 'tag all'.");
        return;
      }
  
      // Fetch the group participants
      const chat = await message.getChat();
      const participants = chat.participants;
  
      // Create an array of user IDs (excluding the bot's ID)
      const users = participants.map(u => u.id._serialized).filter(v => v !== client.info.wid._serialized);
  
      // If no users found, return an error response
      if (users.length === 0) {
        throw new Error("No users found to tag.");
      }
  
      // Send a silent message tagging all users in the replied message
      const mentionedUsers = users.map(user => {
        return { id: user }; // Mention users by their ID
      });
  
      // Send the message with silent tagging
      await client.sendMessage(
        message.from,
        `Tagging all participants silently...`,
        {
          mentions: mentionedUsers,
          quotedMessageId: quotedMessage.id._serialized
        }
      );
    } catch (error) {
      // Send a failure message if something goes wrong
      console.error("Error tagging all users:", error);
      await client.sendMessage(message.from, "FAIL: Tag feature failed.");
    }
  };
  
