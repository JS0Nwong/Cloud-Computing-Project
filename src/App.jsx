import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContainer, ChatContainer } from "./containers/";
import { AuthProvider } from "./context/AuthProvider";
import "./App.css";
import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";
import { LoginView } from "./views/LoginView";
import { SignUpView } from "./views/SignUpView";
import { ThemeProvider, createTheme } from "@mui/material";

Amplify.configure(awsconfig);

const theme = createTheme({
  typography: {
    fontFamily: ["Nunito", "Roboto", "Arial"].join(","),
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          {["/", "/channels/:id"].map((path) => (
            <Route
              path={path}
              element={
                <AuthProvider>
                  <ChatContainer />
                </AuthProvider>
              }
              key={path}
            />
          ))}
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
      </ThemeProvider>
    </div>
  );
}

export default App;
