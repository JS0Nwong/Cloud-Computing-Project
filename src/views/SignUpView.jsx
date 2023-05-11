import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Container, Typography, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import SpeakEZLogo from "../styles/speakez-logo.png";
import SocializingPeople from "../styles/peopleSocializing.png";
import SloganImage from "../styles/slogan.png";
import { useNavigate } from "react-router-dom";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { AuthContext } from "../context/AuthProvider";
import { createUser } from "../graphql/mutations";


const LoadingContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageContainer = styled(Container)({
  display: "contents",
  height: "100%",
  backgroundColor: "#0D0820",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%"
});

const LogoImage = styled("img")({
  width: "100%",
  maxWidth: "30%",
  marginLeft: "10px"
});

const BackgroundImage = styled("img")({
  height: "auto",
  maxHeight: "100vh",
  maxWidth: "30%",
  objectFit: "cover",
});

const FormContainer = styled(Container)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "0px",
});

const SloganImg = styled("img")({
  height: "auto",
  width: "90%",
  margin: "0 auto",
  display: "block",
  marginLeft: "-6%"
});


export const SignUpView = () => {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { transfer } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);


  const handleSignUpClick = async () => {
    if (!email || !username || !password) {
      setError("*Please fill in all fields");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("*Please enter a valid email address");
      return;
    }
    try {
      setIsLoading(true);
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
      setError(`*${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <PageContainer>
      {isLoading ? ( // show loading spinner if isLoading is true
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
      ) : (
        <>
          <LogoImage src={SpeakEZLogo} alt="SpeakEZ Logo" />
          <Container className="pop-up" sx={{ display: "flex", flexDirection: "column", width: "40%" }}>
            <SloganImg src={SloganImage} alt="Slogan" />
            <FormContainer>
              <Typography variant="h5" component="h1" gutterBottom sx={{ alignSelf: "flex-start" }}>
                Create an Account!
              </Typography>

              <TextField
                label="E-mail"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                placeholder="Enter your E-mail @"
                InputLabelProps={{
                  style: {
                    color: "#fff",
                    fontSize: "18px",
                  },
                }}
                InputProps={{
                  sx: {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#7C41D9",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#7C41D9",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#7C41D9",
                    },
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#1E0C38",
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#7C41D9",
                      },
                    },
                    "& .MuiInputBase-input": {
                      color: "#fff",
                    },
                  },
                }}
              />

              <TextField
                label="Username"
                variant="outlined"
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                placeholder="Create your Username"
                InputLabelProps={{
                  style: {
                    color: "#fff",
                    fontSize: "18px",
                  },
                }}
                InputProps={{
                  sx: {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#7C41D9",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#7C41D9",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#7C41D9",
                    },
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#1E0C38",
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#7C41D9",
                      },
                    },
                    "& .MuiInputBase-input": {
                      color: "#fff",
                    },
                  },
                }}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                placeholder="Create your Password"
                InputLabelProps={{
                  style: {
                    color: '#fff',
                  },
                }}
                InputProps={{
                  sx: {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: "#7C41D9"
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: "#7C41D9"
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: "#7C41D9"
                    },
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: "#1E0C38",
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: "#7C41D9"
                      },
                    },
                    '& .MuiInputBase-input': {
                      color: "#fff",
                      '&::placeholder': {
                        color: "#C4C4C4",
                      }
                    }
                  }
                }}
              />
              {error && (
                <Typography variant="body1" style={{ color: "red", marginTop: "8px" }}>
                  {error}
                </Typography>
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={handleSignUpClick}
                fullWidth
                style={{ backgroundColor: '#4670f7' }}
              >
                Sign Up
              </Button>
              <Typography variant="body2" sx={{ marginTop: "16px" }}>
                Already have an account?{" "}
                <Link to="/login" style={{ color: "#fff" }}>
                  Login here
                </Link>
              </Typography>
            </FormContainer>
          </Container>
          <BackgroundImage src={SocializingPeople} alt="Socializing People" />
        </>
      )}
    </PageContainer>
  );
}  