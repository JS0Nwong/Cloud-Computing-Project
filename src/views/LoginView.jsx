import { Box, Button, Typography, TextField, Alert } from "@mui/material";
import { colors } from "../styles/colors";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { AuthContext } from "../context/AuthProvider";
import { usersByUsername } from "../graphql/queries";
import { ErrorSnack } from "../components/ErrorSnack";

export const LoginView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { transfer } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      await Auth.signIn(username, password);
      setError("");
      const user = await API.graphql(
        graphqlOperation(usersByUsername, { username: username })
      );
      localStorage.setItem("uid", user.data.usersByUsername.items[0].id);
      transfer(true);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: colors.dBase,
          borderRadius: 2,
          width: { xs: 300, sm: 400, md: 500 },
          height: 400,
          mx: 3,
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ marginBottom: 3 }}>
          <Typography component="h1" variant="h4">
            Login
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
          }}
        >
          <Box sx={{ my: 1 }}>
            <Typography sx={{ color: "white" }}>Username</Typography>
            <TextField
              sx={{
                backgroundColor: colors.ddBase,
                borderRadius: 1,
                input: {
                  color: "white",
                },
                width: "100%",
              }}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box sx={{ my: 1 }}>
            <Typography sx={{ color: "white" }}>Password</Typography>
            <TextField
              sx={{
                backgroundColor: colors.ddBase,
                borderRadius: 1,
                input: {
                  color: "white",
                },
                width: "100%",
              }}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box sx={{ my: 2 }}>
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
          <Box sx={{ my: 1, display: "flex" }}>
            <Typography sx={{ marginRight: 1 }}>
              Don't have an account?
            </Typography>
            <Link to="/signup">
              <Typography>Register Here</Typography>
            </Link>
          </Box>
        </Box>
      </Box>
      <ErrorSnack error={error} handleError={setError} />
    </>
  );
};
