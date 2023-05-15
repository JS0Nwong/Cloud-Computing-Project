import { memo, useContext, useEffect, useState } from "react";
import { colors } from "../styles/colors";
import { InputBase } from "@mui/material";
import { UserModifyContext } from "../context/UserProvider";

export const MessageInput = memo(() => {
  const { handleSubmit } = useContext(UserModifyContext);
  const [input, setInput] = useState("");

  return (
    <InputBase
      sx={{
        width: "95%",
        backgroundColor: "#c8c8c8",
        p: 1.5,
        borderRadius: 2,
        transform: "translateX(2.5%)",
        maxHeight: 200,
        overflowY: "auto",
      }}
      multiline
      inputProps={{ style: { color: "black" } }}
      placeholder="Enter a message"
      onChange={(e) => setInput(e.target.value)}
      value={input}
      autoFocus
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSubmit(input);
          setInput("");
        }
      }}
    />
  );
});
