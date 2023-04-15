import { useContext, useEffect } from "react";
import ChatView from "../views/ChatView";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const ChatContainer = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [auth]);

  return <>{auth && <ChatView />}</>;
};

export default ChatContainer;
