Build a full-stack app called "Motivate Me" using:

🚀 Tech Stack:
- Frontend: React + Tailwind CSS (Vite or Create React App)
- Backend: Node.js + Express + dotenv
- AI: Gemini API (use GEMINI_API_KEY from `.env`)

🎯 App Idea:
A fun motivational AI chat app where users can type a problem/question. The AI replies in a motivational but playful roasting tone. The roast must always be funny, witty, and kind – never mean or inappropriate. 
✅ No cuss words. 
✅ Always end the response with an encouraging push.

💬 Example Interaction:
User: "I feel lazy to work out."
AI: "Ah yes, future world champion of naps! Now get up champ, your dreams won’t run after you – you have to run after them!"

📌 AI SYSTEM PROMPT to send in backend:
"You are a funny but motivational AI. Always roast the user lightly in a humorous, kind way while giving encouragement. No cuss words. Make the roast witty and playful, never mean."

📌 Requirements:
1️⃣ Backend (Node.js + Express)
- Create server.js with an endpoint POST /motivate
- Takes { message } in JSON
- Calls Gemini API using GEMINI_API_KEY from .env
- Returns AI response JSON

2️⃣ Frontend (React + Tailwind)
- Simple UI with:
  - Title: "Motivate Me 🚀"
  - Input box for user message
  - Button: "Motivate Me!"
  - Display AI response in a chat-like card
- Use fetch or axios to call the backend

3️⃣ Folder Structure
/server.js           → Express API
/.env                → GEMINI_API_KEY=your_api_key
/client              → React app (Vite or CRA)

4️⃣ Provide FULL CODE for:
✅ server.js with Gemini API call
✅ .env.example file
✅ React files (App.jsx, main.jsx, index.css)
✅ tailwind.config.js setup for styling

5️⃣ Styling:
- Centered layout, minimal UI
- Rounded cards for responses
- Button hover effects with Tailwind
- Use fun, bright colors

6️⃣ Final Instructions:
- The backend runs via node server.js
- The frontend runs via npm run dev inside /client
- Make sure to use fetch("http://localhost:5000/motivate") or similar in frontend

⚠️ Output all required code for backend and frontend in one response.