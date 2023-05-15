import { Box } from "@mui/material";
import { LoginView } from "../views/LoginView";
import { SignUpView } from "../views/SignUpView";
import { useLocation, useNavigate } from "react-router-dom";
import { colors } from "../styles/colors";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";

const AuthContainer = () => {
  const location = useLocation();
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) navigate("/");
  }, [auth]);

  if (!auth)
    return (
      <Box
        sx={{
          backgroundColor: colors.darkPurpleBase,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {location.pathname === "/login" ? <LoginView /> : <SignUpView />}
      </Box>
    );
};

export default AuthContainer;
