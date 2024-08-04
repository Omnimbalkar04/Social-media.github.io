import { Avatar, Box, Button, Typography } from "@mui/material";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const submit = () => {
    navigate("/signup");
  }

  if (!user) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="50vh"
      sx={{
        m:"20px",
        backgroundColor: "#fafafa", // Light background
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        borderRadius: "8px",
        p: "20px",
      }}
      >
        <Box textAlign="center">
          <Typography
            fontWeight="bold"
            // color="#ffeba7"
            color="#1DA1F2"
            sx={{ mb: "10px", ml: "10px", fontSize: "30px" }}
          >
            Create Profile First
          </Typography>
          <Button
            borderRadius="8px"
            sx={{
              color: "#ffeba7",
              background: "#4f4e4e",
              outline: "none",
              border: "none",
              cursor: "pointer",
            }}
           onClick={submit}
          >
            Create
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      <Box
        m="20px"
        sx={{
          backgroundColor: "#fafafa", // Light background
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          borderRadius: "8px",
          p: "20px",
        }}
      >
        <Box
          // display="flex"
          alignItems="center"
          mb="20px"
          display="grid"
          gridTemplateColumns="repeat(2, minmax(0, 1fr))"
        >
          <Avatar
            src={URL.createObjectURL(user.profilePicture)}
            sx={{
              width: 100,
              height: 100,
              mr: 2,
              border: "3px solid #1DA1F2",
            }}
          >
            U
          </Avatar>
          <Box>
            <Typography variant="h4" fontWeight="bold">
              {user.firstName} {user.lastName}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {user.email}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {user.bio}
            </Typography>
          </Box>
        </Box>

        <Box
          mb="20px"
          display="flex"
          justifyContent="space-between"
          sx={{ borderBottom: "1px solid #eaeaea", pb: 2 }}
        >
          <Box>
            <Typography variant="body2" fontWeight="bold" textAlign="center">
              40
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Posts
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" fontWeight="bold" textAlign="center">
              2M
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Followers
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" fontWeight="bold" textAlign="center">
              400
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Following
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
