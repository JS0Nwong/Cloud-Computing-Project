import { useContext, useState } from "react";
import { Box, Typography, Button, TextField, Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { colors } from "../styles/colors";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { AuthContext } from "../context/AuthProvider";
import { createUser } from "../graphql/mutations";
import { ErrorSnack } from "../components/ErrorSnack";

export const SignUpView = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { transfer } = useContext(AuthContext);

  const handleSignUp = async () => {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
        autoSignIn: {
          enabled: true,
        },
      });
      setError("");
      const user = await API.graphql(
        graphqlOperation(createUser, {
          input: { username: username, online: true },
        })
      );
      localStorage.setItem("uid", user.data.createUser.id);
      setTimeout(() => {
        transfer(true);
        navigate("/");
      }, 250);
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
          height: 500,
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
            Create An Account
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
            <Typography sx={{ color: "white" }}>Email</Typography>
            <TextField
              sx={{
                backgroundColor: colors.ddBase,
                width: "100%",
                borderRadius: 1,
                input: {
                  color: "white",
                },
              }}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box sx={{ my: 1 }}>
            <Typography sx={{ color: "white" }}>Username</Typography>
            <TextField
              sx={{
                backgroundColor: colors.ddBase,
                width: "100%",
                borderRadius: 1,
                input: {
                  color: "white",
                },
              }}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box sx={{ my: 1 }}>
            <Typography sx={{ color: "white" }}>Password</Typography>
            <TextField
              sx={{
                backgroundColor: colors.ddBase,
                width: "100%",
                borderRadius: 1,
                input: {
                  color: "white",
                },
              }}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box sx={{ my: 2 }}>
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={() => handleSignUp()}
            >
              Register
            </Button>
          </Box>
          <Box sx={{ my: 1, display: "flex" }}>
            <Typography sx={{ marginRight: 1 }}>
              Already have an account?
            </Typography>
            <Link to="/login">
              <Typography>Login Here</Typography>
            </Link>
          </Box>
        </Box>
      </Box>
      <ErrorSnack error={error} handleError={setError} />
    </>
  );
};
