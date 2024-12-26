export const getBotResponse = (message) => {
  const lowercaseMessage = message.toLowerCase();

  // Basic responses
  if (lowercaseMessage.includes("hello")) {
    return "Hi! How can I assist you today?";
  }

  if (lowercaseMessage.includes("help")) {
    return "I am here to assist with any questions you have!";
  }

  if (lowercaseMessage.includes("bye")) {
    return "Goodbye! Have a great day!";
  }

  // Default response
  return "I’m not sure how to respond to that. Could you try rephrasing?";
};
