// "use client";

// import React, { useState } from "react";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const sendMessage = async () => {
//     if (input.trim()) {
//       setMessages([...messages, { sender: "User", text: input }]);
//       setInput("");

//       // Fetch bot response from the API
//       const response = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: input }),
//       });
//       const data = await response.json();

//       setMessages((prev) => [...prev, { sender: "Bot", text: data.reply }]);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto border p-4 rounded-lg shadow-lg">
//       <div className="h-80 overflow-y-auto">
//         {messages.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`my-2 ${
//               msg.sender === "User" ? "text-right" : "text-left"
//             }`}
//           >
//             <span
//               className={`inline-block px-3 py-2 rounded-lg ${
//                 msg.sender === "User"
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200 text-black"
//               }`}
//             >
//               {msg.text}
//             </span>
//           </div>
//         ))}
//       </div>
//       <div className="flex mt-4">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type a message..."
//           className="flex-grow border rounded-lg px-4 py-2"
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//         />
//         <button
//           onClick={sendMessage}
//           className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;

// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [options, setOptions] = useState([]);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleStart = () => {
//     setShowPopup(true);
//     setMessages([{ sender: "Bot", text: "Welcome to our AgriTech chatbot!" }]);
//     setOptions(["Urban Farmer", "Rural Farmer"]);
//   };

//   const handleOptionClick = (option) => {
//     setMessages((prev) => [...prev, { sender: "User", text: option }]);

//     switch (option) {
//       case "Urban Farmer":
//         setMessages((prev) => [
//           ...prev,
//           {
//             sender: "Bot",
//             text: "Welcome, Urban Farmer! How can we help you today?",
//           },
//         ]);
//         setOptions(["Fruits", "Spices", "Vegetables"]);
//         break;
//       case "Rural Farmer":
//         setMessages((prev) => [
//           ...prev,
//           {
//             sender: "Bot",
//             text: "Welcome, Rural Farmer! How can we help you today?",
//           },
//         ]);
//         setOptions(["Wheat", "Rice", "Livestock"]);
//         break;
//       case "Vegetables":
//         setMessages((prev) => [
//           ...prev,
//           {
//             sender: "Bot",
//             text: "Tell me about your vegetable needs.",
//           },
//         ]);
//         setOptions(["Tomatoes", "Cucumbers", "Lettuce", "Okra"]);
//         break;
//       case "Tomatoes":
//         setMessages((prev) => [
//           ...prev,
//           {
//             sender: "Bot",
//             text: "Tell me about tomato diseases.",
//           },
//         ]);
//         setOptions(["Tomatoes", "Cucumbers", "Lettuce"]);
//         break;
//       default:
//         setMessages((prev) => [
//           ...prev,
//           {
//             sender: "Bot",
//             text: `You selected ${option}. How can I assist you further?`,
//           },
//         ]);
//         setOptions([]); // Clear options after a deep selection
//     }
//   };

//   return (
//     <motion.div
//       className="max-w-md mx-auto border p-4 rounded-lg shadow-lg"
//       initial={{ scale: 0.9, rotateY: 90 }}
//       animate={{ scale: 1, rotateY: 0 }}
//       transition={{ type: "spring", stiffness: 50 }}
//     >
//       {!showPopup && (
//         <motion.button
//           onClick={handleStart}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           Start Chat
//         </motion.button>
//       )}

//       {showPopup && (
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.div
//             className="h-80 overflow-y-auto"
//             initial={{ scale: 0.9 }}
//             animate={{ scale: 1 }}
//             transition={{ type: "spring", damping: 20 }}
//           >
//             {messages.map((msg, idx) => (
//               <div
//                 key={idx}
//                 className={`my-2 ${
//                   msg.sender === "User" ? "text-right" : "text-left"
//                 }`}
//               >
//                 <motion.span
//                   className={`inline-block px-3 py-2 rounded-lg ${
//                     msg.sender === "User"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-200 text-black"
//                   }`}
//                   initial={{ opacity: 0, x: msg.sender === "User" ? 50 : -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {msg.text}
//                 </motion.span>
//               </div>
//             ))}
//           </motion.div>
//           <motion.div
//             className="mt-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             {options.length > 0 && (
//               <div className="flex flex-wrap gap-2">
//                 {options.map((option, idx) => (
//                   <motion.button
//                     key={idx}
//                     onClick={() => handleOptionClick(option)}
//                     className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     {option}
//                   </motion.button>
//                 ))}
//               </div>
//             )}
//           </motion.div>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default Chatbot;
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Use for Next.js projects
import logo from "../../public/ipage.png"; // Path to your image

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [options, setOptions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleStart = () => {
    setShowPopup(true);
    addBotMessage("Welcome to our Agri ai chatbot!", [
      "Urban Farmer",
      "Rural Farmer",
    ]);
  };

  const addBotMessage = (text, newOptions = []) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "Bot", text }]);
      setOptions(newOptions);
      setIsTyping(false);
    }, 1500);
  };

  const handleOptionClick = (option) => {
    setMessages((prev) => [...prev, { sender: "User", text: option }]);

    switch (option) {
      case "Urban Farmer":
        addBotMessage(
          "Welcome, Urban Farmer! How can we help you today? Please Select your crops",
          ["Vegetables", "Fruits", "Spices"]
        );
        break;
      case "Rural Farmer":
        addBotMessage(
          "Welcome, Rural Farmer! How can we help you today? Please Select your crops",
          ["Wheat", "Rice", "Livestock"]
        );
        break;
        //   case "Vegetables":
        //     addBotMessage("Tell me about your vegetable needs.", [
        //       "Tomatoes",
        //       "Cucumbers",
        //       "Lettuce",
        //       "Okra",
        //     ]);
        break;
      case "Vegetables":
        addBotMessage("Tell me about your vegetable needs.", [
          "Tomatoes",
          "Cucumbers",
          "Lettuce",
          "Okra",
        ]);
        break;
      case "Tomatoes":
        addBotMessage("Tell me about tomato diseases.", [
          "Insect",
          "Virus",
          "Fungus",
        ]);
        break;
      case "Insect":
        addBotMessage(
          `ক্ষতির ধরণ:
          গাছের রস চুষে খাওয়ার ফলে গাছ শুকিয়ে যায়। এই পোকা এক ধরণের রস ছড়িয়ে দেয়, যেখানে বিভিন্ন ছত্রাক আক্রমণ করে। ফলে দূর থেকে আক্রান্ত গাছকে নিস্তেজ ও কালো দেখায়। গাছের বৃদ্ধি খুবই কম হয়। তাছাড়া এই পোকা মুগ ও মাসকলাইয়ে হলুদ মোজাইক ভাইরাস রোগ ছড়ায়।

          Control Measure:
          জৈবিক উপায়ে দমন: হলুদ রঙের ফাঁদ ব্যবহার। আক্রমণ বেশী হলে যে কোন অনুমোদিত কীটনাশক ব্যবহার।

          ব্যবস্থাপনা:
          ১. আক্রমণ বেশি হলে ইমিডাক্লোরোপ্রিড জাতীয় কীটনাশক (যেমন এডমায়ার অথবা টিডো ৭-১০ মিলিলিটার/২মুখ) ১০ লিটার পানিতে মিশিয়ে প্রতি ৫ শতকে স্প্রে করতে হবে ১০ দিন পরপর ২/৩ বার। ঔষধ স্প্রে করায় সতর্কতা অবলম্বন করতে হবে।
          ২. আগের ফসলের নাড়া বা অবশিষ্ট অংশ ভালভাবে ধ্বংস করা। আগাছা, মরা পাতা ও আবর্জনা পরিষ্কার করতে হবে। নিয়মিত জমি পর্যবেক্ষণ করতে হবে।
          ৩. সাবানযুক্ত পানি স্প্রে করা যায় অথবা আধাভাঙ্গা নিমবীজের পানি (১ লিটার পানিতে ৫০ গ্রাম নিমবীজ ভেঙ্গে ১২ ঘন্টা ভিজিয়ে রেখে ছেঁকে নিতে হবে) আক্রান্ত গাছে ১০ দিন পর পর ৩ বার স্প্রে করলে পোকা নিয়ন্ত্রন করা যায়।
          ৪. তামাকের গুড়া (১০ গ্রাম), সাবানের গুড়া (৫ গ্রাম) ও নিমের পাতার রস প্রতি লিটার পানিতে মিশিয়ে ব্যবহার করা যায়।`
        );
        break;
      case "Virus":
        addBotMessage(
          `Disease Type
Virus
Disease Name
পাতা কোকড়ানো রোগ
Nature of Damage
ক্ষতির ধরণ :
এর রোগ হলে গাছে হলুদ ও গাঢ় সবুজ ছোপ ছোপ মোজাইক করা পাতা দেখা দেয় এবং পাতা কুঁকড়ে যায়।

Control Measure
ব্যবস্থাপনা :

জাব পোকা এ রোগের বাহক, তাই এদের দমনের জন্য ইমিডাক্লোরোপ্রিড জাতীয় কীটনাশক (যেমন এডমায়ার অথবা টিডো ৭-১০ মিলিলিটার / ২মুখ) ১০ লিটার পানিতে মিশিয়ে প্রতি ৫ শতকে স্প্রে করতে হবে ১০ দিন পরপর ২/৩ বার। ঔষধ স্প্রে করায় সতর্কতা অবলম্বন করতে হবে।

রোগমুক্ত গাছ থেকে বীজ সংগ্রহ করা। ক্ষেত থেকে আক্রান্ত গাছ তুলে পুতে ফেলা/ পুড়ে দেয়া। আক্রান্ত গাছ সংগ্রহ করে ধ্বংস করা ।`
        );
        break;
      case "Fungus":
        addBotMessage(
          `Disease Type
Fungus
Disease Name
টমেটো নাবী ধ্বসা
Nature of Damage
ক্ষতির ধরণ :
পাতার উপর ফ্যাকাশে অথবা ফিকে সবুজ রঙের গোলাকার অথবা এলোমেলো পানি ভেজা দাগ পড়ে। কুয়াশাছন্ন মেঘলা আবহাওয়ায় দাগ সংখ্যা ও আকার দ্রুত বাড়তে থাকে। গাছের পাতা ও কাণ্ড বাদামী থেকে কালচে আকার ধরণ করে। আক্রমণের তীব্রতা বেশি হলে গাছের কাণ্ড ও সবুজ ফলেও রোগের লক্ষণ প্রকাশ পায়। রোগের লক্ষণ দেখা দেবার ৩-৪ দিনের মধ্যে গাছ ঝলসে যায় ও দ্রুত মহামারি আকারে ছড়িয়ে পড়ে।

Control Measure
ব্যবস্থাপনা :
ম্যানকোজেব জাতীয় ছত্রাকনাশক যেমন (রিডোমিল গোল্ড অথবা  ডাইথেন -এম-৪৫ ২০ গ্রাম) ১০ লিটার পানিতে মিশিয়ে ১২ দিন পরপর স্প্রে করা। স্প্রে করার সময় সতর্কতা অবলম্বন করতে হবে। রোগ প্রতিরোধ জাতের চাষ করা, বীজ শোধন করা।`
        );
        break;
      default:
        addBotMessage(
          `You selected ${option}. How can I assist you further?`,
          []
        );
    }
  };

  const botAnimationVariants = {
    idle: { rotate: 0 },
    typing: {
      rotate: [0, -5, 5, -5, 5, 0],
      transition: { duration: 1, repeat: Infinity },
    },
    speaking: { scale: [1, 1.1, 1], transition: { duration: 0.5, repeat: 3 } },
  };

  return (
    <motion.div
      className="max-w-lg mx-auto border p-4 rounded-lg shadow-lg"
      initial={{ scale: 0.9, rotateY: 90 }}
      animate={{ scale: 1, rotateY: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      {!showPopup && (
        <motion.button
          onClick={handleStart}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Start Chat
        </motion.button>
      )}

      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Bot character animation */}
          <motion.div
            className="flex justify-center mb-4"
            variants={botAnimationVariants}
            animate={isTyping ? "typing" : "idle"}
          >
            <motion.div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              animate={
                isTyping ? "typing" : messages.length > 0 ? "speaking" : "idle"
              }
            >
              <Image src={logo} alt="Chatbot Icon" width={64} height={64} />
            </motion.div>
          </motion.div>

          {/* Chat messages */}
          <motion.div
            className="h-80 overflow-y-auto"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 20 }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`my-2 ${
                  msg.sender === "User" ? "text-right" : "text-left"
                }`}
              >
                <motion.span
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.sender === "User"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                  initial={{ opacity: 0, x: msg.sender === "User" ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.text}
                </motion.span>
              </div>
            ))}
            {isTyping && (
              <div className="text-left my-2">
                <motion.span
                  className="inline-block px-3 py-2 rounded-lg bg-gray-200 text-black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  ...
                </motion.span>
              </div>
            )}
          </motion.div>

          {/* Options */}
          <motion.div
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {options.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {options.map((option, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => handleOptionClick(option)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Chatbot;

// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image"; // Use for Next.js projects
// import logo from "../../public/ipage.png"; // Path to your image

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [options, setOptions] = useState([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);
//   const [language, setLanguage] = useState("en"); // Default language is English

//   const handleStart = () => {
//     setShowPopup(true);
//     addBotMessage("Welcome to our Agri AI chatbot!", [
//       "Urban Farmer",
//       "Rural Farmer",
//     ]);
//   };

//   const addBotMessage = (text, newOptions = []) => {
//     setIsTyping(true);
//     setTimeout(() => {
//       setMessages((prev) => [...prev, { sender: "Bot", text }]);
//       setOptions(newOptions);
//       setIsTyping(false);
//     }, 1500);
//   };

//   const handleOptionClick = (option) => {
//     setMessages((prev) => [...prev, { sender: "User", text: option }]);

//     switch (option) {
//       case "Urban Farmer":
//         addBotMessage(
//           "Welcome, Urban Farmer! How can we help you today? Please select your crops.",
//           ["Vegetables", "Fruits", "Spices"]
//         );
//         break;
//       case "Rural Farmer":
//         addBotMessage(
//           "Welcome, Rural Farmer! How can we help you today? Please select your crops.",
//           ["Wheat", "Rice", "Livestock"]
//         );
//         break;
//       case "Vegetables":
//         addBotMessage("Tell me about your vegetable needs.", [
//           "Tomatoes",
//           "Cucumbers",
//           "Lettuce",
//           "Okra",
//         ]);
//         break;
//       case "Tomatoes":
//         addBotMessage("Tell me about tomato diseases.", [
//           "Insect",
//           "Virus",
//           "Fungus",
//         ]);
//         break;
//       case "Insect":
//         addBotMessage(
//           "Insect issues: Plants dry out due to insects sucking sap. Control using approved insecticides or organic methods like neem solutions."
//         );
//         break;
//       case "Virus":
//         addBotMessage(
//           "Virus issue: Leaves show mosaic patterns and curl. Control by removing infected plants and using insecticides against vectors."
//         );
//         break;
//       case "Fungus":
//         addBotMessage(
//           "Fungal issue: Leaves develop wet spots that darken and spread. Treat with fungicides like Mancozeb."
//         );
//         break;
//       default:
//         addBotMessage(`You selected ${option}. How can I assist you further?`);
//     }
//   };

//   const translateMessages = async () => {
//     if (language === "en") return; // Skip translation if English is selected
//     const translatedMessages = await Promise.all(
//       messages.map(async (msg) => {
//         if (msg.sender === "Bot") {
//           const response = await fetch(
//             `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
//               msg.text
//             )}&langpair=en|${language}`
//           );
//           const data = await response.json();
//           return { ...msg, text: data.responseData.translatedText };
//         }
//         return msg; // User messages remain unchanged
//       })
//     );
//     setMessages(translatedMessages);
//   };

//   const botAnimationVariants = {
//     idle: { rotate: 0 },
//     typing: {
//       rotate: [0, -5, 5, -5, 5, 0],
//       transition: { duration: 1, repeat: Infinity },
//     },
//     speaking: { scale: [1, 1.1, 1], transition: { duration: 0.5, repeat: 3 } },
//   };

//   return (
//     <motion.div
//       className="max-w-lg mx-auto border p-4 rounded-lg shadow-lg"
//       initial={{ scale: 0.9, rotateY: 90 }}
//       animate={{ scale: 1, rotateY: 0 }}
//       transition={{ type: "spring", stiffness: 50 }}
//     >
//       {!showPopup && (
//         <motion.button
//           onClick={handleStart}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           Start Chat
//         </motion.button>
//       )}

//       {showPopup && (
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="flex justify-between items-center mb-4">
//             <motion.div
//               className="flex justify-center"
//               variants={botAnimationVariants}
//               animate={isTyping ? "typing" : "idle"}
//             >
//               <Image src={logo} alt="Chatbot Icon" width={64} height={64} />
//             </motion.div>
//             <div className="flex items-center gap-2">
//               <select
//                 value={language}
//                 onChange={(e) => setLanguage(e.target.value)}
//                 className="border px-2 py-1 rounded-md"
//               >
//                 <option value="en">English</option>
//                 <option value="bn">Bangla</option>
//                 <option value="es">Spanish</option>
//                 <option value="fr">French</option>
//               </select>
//               <button
//                 onClick={translateMessages}
//                 className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
//               >
//                 Translate
//               </button>
//             </div>
//           </div>

//           <motion.div
//             className="h-80 overflow-y-auto"
//             initial={{ scale: 0.9 }}
//             animate={{ scale: 1 }}
//             transition={{ type: "spring", damping: 20 }}
//           >
//             {messages.map((msg, idx) => (
//               <div
//                 key={idx}
//                 className={`my-2 ${
//                   msg.sender === "User" ? "text-right" : "text-left"
//                 }`}
//               >
//                 <motion.span
//                   className={`inline-block px-3 py-2 rounded-lg ${
//                     msg.sender === "User"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-200 text-black"
//                   }`}
//                   initial={{ opacity: 0, x: msg.sender === "User" ? 50 : -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {msg.text}
//                 </motion.span>
//               </div>
//             ))}
//             {isTyping && (
//               <div className="text-left my-2">
//                 <motion.span
//                   className="inline-block px-3 py-2 rounded-lg bg-gray-200 text-black"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ repeat: Infinity, duration: 1 }}
//                 >
//                   ...
//                 </motion.span>
//               </div>
//             )}
//           </motion.div>

//           <motion.div
//             className="mt-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             {options.length > 0 && (
//               <div className="flex flex-wrap gap-2">
//                 {options.map((option, idx) => (
//                   <motion.button
//                     key={idx}
//                     onClick={() => handleOptionClick(option)}
//                     className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     {option}
//                   </motion.button>
//                 ))}
//               </div>
//             )}
//           </motion.div>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default Chatbot;

// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image"; // Use for Next.js projects
// import logo from "../../public/ipage.png"; // Path to your image

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [options, setOptions] = useState([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);
//   const [language, setLanguage] = useState("en"); // Default language is English

//   const translations = {
//     en: {
//       welcome: "Welcome to our Agri AI chatbot!",
//       urbanFarmer: "Urban Farmer",
//       ruralFarmer: "Rural Farmer",
//       howCanWeHelp: "How can we help you today?",
//       selectCrops: "Please select your crops",
//     },
//     bn: {
//       welcome: "আমাদের কৃষি এআই চ্যাটবটে স্বাগতম!",
//       urbanFarmer: "শহুরে কৃষক",
//       ruralFarmer: "গ্রামীণ কৃষক",
//       howCanWeHelp: "আমরা কীভাবে আপনাকে সাহায্য করতে পারি?",
//       selectCrops: "অনুগ্রহ করে আপনার ফসল নির্বাচন করুন",
//     },
//     // Add more languages here
//   };

//   const translate = (key) => translations[language][key] || key;

//   const handleStart = () => {
//     setShowPopup(true);
//     addBotMessage(translate("welcome"), [
//       translate("urbanFarmer"),
//       translate("ruralFarmer"),
//     ]);
//   };

//   const addBotMessage = (text, newOptions = []) => {
//     setIsTyping(true);
//     setTimeout(() => {
//       setMessages((prev) => [...prev, { sender: "Bot", text }]);
//       setOptions(newOptions);
//       setIsTyping(false);
//     }, 1500);
//   };

//   const handleOptionClick = (option) => {
//     setMessages((prev) => [...prev, { sender: "User", text: option }]);

//     switch (option) {
//       case translate("urbanFarmer"):
//         addBotMessage(
//           `${translate("howCanWeHelp")} ${translate("selectCrops")}`,
//           ["Vegetables", "Fruits", "Spices"]
//         );
//         break;
//       case translate("ruralFarmer"):
//         addBotMessage(
//           `${translate("howCanWeHelp")} ${translate("selectCrops")}`,
//           ["Wheat", "Rice", "Livestock"]
//         );
//         break;
//       default:
//         addBotMessage(
//           `You selected ${option}. How can I assist you further?`,
//           []
//         );
//     }
//   };

//   const handleLanguageChange = (newLang) => {
//     setLanguage(newLang);
//     addBotMessage(`Language changed to ${newLang.toUpperCase()}`);
//   };

//   return (
//     <motion.div
//       className="max-w-lg mx-auto border p-4 rounded-lg shadow-lg"
//       initial={{ scale: 0.9, rotateY: 90 }}
//       animate={{ scale: 1, rotateY: 0 }}
//       transition={{ type: "spring", stiffness: 50 }}
//     >
//       {/* Language Selection */}
//       <div className="flex justify-end mb-4">
//         <button
//           onClick={() => handleLanguageChange("en")}
//           className={`px-3 py-1 rounded-lg mr-2 ${
//             language === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           English
//         </button>
//         <button
//           onClick={() => handleLanguageChange("bn")}
//           className={`px-3 py-1 rounded-lg ${
//             language === "bn" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           বাংলা
//         </button>
//       </div>

//       {!showPopup && (
//         <motion.button
//           onClick={handleStart}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           Start Chat
//         </motion.button>
//       )}

//       {showPopup && (
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* Chat messages */}
//           <motion.div className="h-80 overflow-y-auto">
//             {messages.map((msg, idx) => (
//               <div
//                 key={idx}
//                 className={`my-2 ${
//                   msg.sender === "User" ? "text-right" : "text-left"
//                 }`}
//               >
//                 <motion.span
//                   className={`inline-block px-3 py-2 rounded-lg ${
//                     msg.sender === "User"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-200 text-black"
//                   }`}
//                   initial={{ opacity: 0, x: msg.sender === "User" ? 50 : -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {msg.text}
//                 </motion.span>
//               </div>
//             ))}
//             {isTyping && (
//               <div className="text-left my-2">
//                 <motion.span
//                   className="inline-block px-3 py-2 rounded-lg bg-gray-200 text-black"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ repeat: Infinity, duration: 1 }}
//                 >
//                   ...
//                 </motion.span>
//               </div>
//             )}
//           </motion.div>

//           {/* Options */}
//           <motion.div className="mt-4">
//             {options.length > 0 && (
//               <div className="flex flex-wrap gap-2">
//                 {options.map((option, idx) => (
//                   <motion.button
//                     key={idx}
//                     onClick={() => handleOptionClick(option)}
//                     className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     {option}
//                   </motion.button>
//                 ))}
//               </div>
//             )}
//           </motion.div>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default Chatbot;
