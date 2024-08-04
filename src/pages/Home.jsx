import { useContext, useEffect, useState } from "react";
import { PostContext } from "./PostContext";
import { Box, Typography, Card, CardContent } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import axios from "axios";

const Home = () => {
  const { posts: userPosts } = useContext(PostContext);
  const [ apiPosts, setApiPosts] = useState([]);

  useEffect(() => {
    const fetchApiPosts = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setApiPosts(response.data.slice(0, 20));
      } catch (error) {
        console.error("Error fetching API posts:", error);
      }
    }
    fetchApiPosts();
  }, []);

  const allPosts = [...userPosts, ...apiPosts];

  return (
    <Box m="20px"
    >
      
      {allPosts.length === 0 ? (
        <Typography
          fontWeight="bold"
          color="#ffeba7"
          sx={{
            mb: "30px",
            textAlign: "center",
            fontSize: "24px",
          }}
          
        >
          No Posts Available
        </Typography>
      ) : (
        
        allPosts.map((post, index) => (
          <Card
            key={index}
            sx={{ mb: "20px", backgroundColor: "#fafafa", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}
            
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AccountCircleOutlinedIcon
                  style={{ color: "#ffeba7", marginRight: "8px" }}
                />
                <Typography
                  sx={{ fontSize: 16, }}
                  gutterBottom
                >
                  {" "}
                  {post.userId || 'API User'}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  // sx={{ color: "aliceblue" }}
                >
                  {" "}
                  {post.title || post.postTitle}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="body3"
                //  sx={{ color: "aliceblue" }}
                 >
                  {post.body ||  post.postContent}
                </Typography>
              </Box>

              {post.tags && (

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography color="textSecondary"
                 sx={{ mt: 1.5,  }}>
                  Tags: {post.tags}
                </Typography>
              </Box>
            )}
            </CardContent>
          </Card>
        ))
      )}

    
    </Box>
  );
};

export default Home;
