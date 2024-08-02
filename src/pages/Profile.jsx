import { Avatar, Box, Typography } from "@mui/material";
import { useUser } from "./UserContext";

const Profile = () => {
  const { user } = useUser();

  if (!user) {
    return (
      
        <Typography
          fontWeight="bold"
          // color="#ffeba7"
          color="#1DA1F2"
          sx={{ mb: "20px", ml: "10px", fontSize: "30px", top: "10%" }}
        >
          Create Profile First
        </Typography>
     
    );
  }

  return (
    <Box>
      <Box
        m="20px"
        sx={{
          backgroundColor: "#fafafa", // Light background
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
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
            <Typography variant="h5" fontWeight="bold">
              {user.firstName} {user.lastName}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {user.email}
            </Typography>
          </Box>
        </Box>

        <Box
          mb="20px"
          display="flex"
          justifyContent="space-between"
          sx={{ borderBottom: "1px solid #eaeaea", pb: 2 }}
        >
          <Typography variant="body2" fontWeight="bold">
            Posts
          </Typography>
          <Typography variant="body2" fontWeight="bold">
            Followers
          </Typography>
          <Typography variant="body2" fontWeight="bold">
            Following
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
