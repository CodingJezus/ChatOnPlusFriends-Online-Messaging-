
The ChatOnPlusFriends project allows users to communicate via instant messaging in real-time. Built with **Vite**, powered by **Firebase** for authentication and data storage, this project serves as a lightweight, scalable chat application.

Overview:
This project is a personal venture aimed at creating an online messaging system where users can sign in with Google, send messages in real-time, and enjoy a responsive and user-friendly interface.

Features:
- **User Authentication**: Sign in using Google accounts (via Firebase Authentication).
- **Real-Time Messaging**: Send and receive messages instantly.
- **Responsive UI**: A clean and responsive design that works seamlessly across desktop and mobile devices.
- **Smooth Scroll and Custom Scrollbars**: Optimized scroll behavior for the chat window with custom scrollbar styling.
- **Firebase Integration**: Messages are stored in and retrieved from Firebase in real time.



Tech Stack:
- Frontend: React+Vite
- Backend: Firebase
- Languages: JavaScript (React), CSS
- Deployment: Firebase Hosting (which is free)

Installation and Setup:
Follow the steps below to get the project up and running on your local machine.

Prerequisites
- **Node.js + React**: Make sure you have Node.js installed on your machine.
- **Firebase Account**: You'll need a Firebase account to configure your backend.

Steps To Launch:
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/online-messaging-platform.git
   cd online-messaging-platform
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Firebase**:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Firebase Authentication and Firestore in the Firebase console.
   - Replace the `firebaseConfig` object in `firebase.js` with your Firebase project's configuration.

   Example:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

   The app should now be running on `http://localhost:3000`.

5. **Build for production**:
   ```bash
   npm run build
   ```

Usage:
1. **Login**: Click on the "Login with Google" button to authenticate yourself.
2. **Messaging**: Once logged in, you can send and receive messages in real time.
3. **Logout**: Option to sign out when done.

---

Key Components:
`App.jsx`-This is the main component that handles routing, user state, and renders the chat interface. It interacts with Firebase for authentication and real-time messaging.

`firebase.js`-Handles the Firebase initialization and exports Firebase services used throughout the app. The key features include Firebase Authentication (for Google login) and Firestore for storing messages.

Firebase setup:
```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
```

Styling (`App.css` & `index.css`)-The app uses CSS for styling the components, including the layout, chat window, message input, and buttons. The design follows a simple and modern look, ensuring good usability.

Styles:
```css
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

.app-header {
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 1rem;
}

.chat-container {
  max-width: 600px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
```



Firebase Configuration:
To integrate Firebase, follow these steps:
1. **Authentication**: Enable Google Sign-In from the Firebase Authentication section.
2. **Firestore**: Set up Firestore for storing chat messages.




Contact:
By following this README, you should have a fully functioning online messaging platform with Firebase integration.
For any inquiries or feedback, you can reach me at ablakulovoybek@gmail.com
