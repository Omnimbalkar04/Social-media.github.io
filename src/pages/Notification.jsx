import { Box, Typography } from "@mui/material"


const Notification = () => {
  return (
    <Box m="20px">
      <Typography
          fontWeight="bold"
          color="#ffeba7"
          sx={{
            mb: "30px",
            textAlign: "center",
            fontSize: "24px",
          }}
          
        >
          No Notification till now
        </Typography>
    </Box>
  )
}

export default Notification