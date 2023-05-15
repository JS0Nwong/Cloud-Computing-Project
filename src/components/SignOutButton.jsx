import { Auth } from "aws-amplify";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import LogoutIcon from "@mui/icons-material/Logout";

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
    <button
      onClick={handleSignOut}
      style={{
        backgroundColor: "inherit",
        border: "none",
        cursor: "pointer",
        color: "#fff",
      }}
    >
      <LogoutIcon />
    </button>
  );
};
