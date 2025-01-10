import { Client } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import { basicResponses } from './plugins/basicResponses.js'; // Import the basic responses module
import { tagAll } from './plugins/tagAllFeature.js'; // Import the tagAll functionality
import { clientConfig } from './config/clientConfig.js'; // Config for client setup

const client = new Client(clientConfig);

// Event listener for the 'qr' event to generate the QR code
client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

// Event listener for the 'ready' event to indicate the bot is ready
client.on('ready', () => {
  console.log('Bot is ready!');
});

// Event listener for receiving messages
client.on('message', async (message) => {
  const text = message.body.toLowerCase();

  // Handle basic responses
  await basicResponses.handleResponse(message, client, text);

  // Check if the message starts with "!tagall" to tag all users
  if (message.body.startsWith('!tagall')) {
    await tagAll(message, client);
  }

  // You can add more commands or functionality here as needed
});

client.initialize();
