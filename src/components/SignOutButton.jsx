import { ButtonBase, IconButton } from "@mui/material";
import { Auth } from "aws-amplify";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export const SignOutButton = () => {
  const navigate = useNavigate();
  const { transfer } = useContext(AuthContext);

  const handleSignOut = () => {
    Auth.signOut()
      .then(() => {
        localStorage.removeItem("uid");
        transfer(true);
        navigate("/login");
      })
      .catch(() => console.log("Not logged in"));
  };
  return (
    <IconButton onClick={handleSignOut} sx={{ color: "inherit" }}>
      <ExitToAppIcon />
    </IconButton>
  );
};
