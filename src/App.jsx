import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContainer, ChatContainer } from "./containers/";
import { AuthProvider } from "./context/AuthProvider";
import "./App.css";
import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";
import { LoginView } from "./views/LoginView";
import { SignUpView } from "./views/SignUpView";

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvider>
              <ChatContainer />
            </AuthProvider>
          }
        />
        <Route
          element={
            <AuthProvider>
              <AuthContainer />
            </AuthProvider>
          }
        >
          <Route path="/login" element={<LoginView />} />
          <Route path="/signup" element={<SignUpView />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
