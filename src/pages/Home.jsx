/* eslint-disable no-undef */
import { useContext, useEffect, useState } from "react";
import { PostContext } from "./PostContext";
import { Box, Typography, Card, CardContent, Button, Avatar} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import axios from "axios";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FaThumbsUp } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Home = () => {
  const { posts: userPosts , deletePost } = useContext(PostContext);
  const [ apiPosts, setApiPosts] = useState([]);
  const [ likedPosts, setLikedPosts] = useState(new Set());
  const { user } = useUser();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  // const handleLike = (postId) => {
  //   if (likedPosts.includes(postId)) {
  //     setLikedPosts(likedPosts.filter(id => id !== postId));
  //   } else{
  //     setLikedPosts([...likedPosts, postId]);
  //   }
  // };

   // Function to handle like button click
   const handleLike = (postId) => {
    setLikedPosts((prevLikedPosts) => {
      const updatedLikes = new Set(prevLikedPosts);
      if (updatedLikes.has(postId)) {
        updatedLikes.delete(postId); // Unlike if already liked
      } else {
        updatedLikes.add(postId); // Add to liked posts
      }
      return updatedLikes;
    });
  };

  const handleDelete = (postId) => {
    deletePost(postId);
  }

  const submit = () => {
    navigate("/signup");
  }

  const create = () => {
    navigate("/create")
  }

  const images = () => {
    navigate("/search")
  }

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
    <Box m="10px"
     display="grid"
    gridTemplateColumns="repeat(3, minmax(0, 1fr))"
    // justifyContent="space-evenly"
    // alignItems="center"
    sx={{
      "& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
    }}
    > 
    <Box
    sx={{
         gridColumn:"span 1"
      }} 
    >

     <Box
     sx={{
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      margin:"10px",
      borderRadius:"10px",
     }}
     >
      <Typography sx={{
          fontWeight:"bold",
          margin:"5px",
        }}>
        Home
      </Typography>
      <hr></hr>
      <Box
      mt="5px"
      sx={{
        display:"flex",
        gap:"10px",
        margin:"5px",
        padding:"5px 5px",
         gridColumn:"span 2"
      }} 
      >
        <Avatar 
        src={URL.createObjectURL(user.profilePicture)}
        style={{ width:"40px" , height:"40px" }}
        />
        <Typography sx={{
          fontWeight:"bold"
        }}>
        {user.firstName} {user.lastName}
        </Typography>
      </Box>
      <Box
      sx={{
        display:"flex",
        margin:"5px",
        padding:"5px 5px"
      }} 
      >
      <AddCircleOutlineOutlinedIcon sx={{ color: "#1DA1F2"}}/>
        <Typography
        sx={{
          backgroundColor:"#f0f2f5",
          margin:"3px",
          borderRadius:"5px"
        }}
        >
         Whats on your mind ? Create post
        </Typography>
      </Box>
      <Box 
       sx={{
        margin:"3px",
        display:"flex",
        justifyContent:"end"
      }}
      >
      <Button
            borderRadius="10px"
            sx={{
              color: "#ffeba7",
              background: "#1DA1F2",
              // outline: "none",
              // border: "none",
              cursor: "pointer",
              boxShadow: "0 0 10px #1DA1F2",
            }}
           onClick={create}
          >
            Create
          </Button>
          </Box>


          </Box>
      </Box>


      <Box
      sx={{
      }} 
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
            sx={{ mb: "10px", backgroundColor: "#fafafa", boxShadow: "0 0 10px #1DA1F2"}}
            
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap:"10px",
                }}
              >
                {userPosts.includes(post) ? (
                  <>
                   <Avatar 
                   src={URL.createObjectURL(user.profilePicture)}
                    style={{ width:"40px" , height:"40px" }}
        />
                <Typography
                  sx={{ fontSize: 16, fontWeight:"bold" }}
                  gutterBottom
                >
                  {" "}
                  {user.firstName || 'API User'} {user.lastName || ""}
                </Typography>
                </>
                ) : (
                  <>
                  <AccountCircleOutlinedIcon style={{ color: "#1DA1F2", marginRight: "8px" }} />
                  <Typography sx={{ fontSize: 16, fontWeight: "bold" }} gutterBottom >
                    {post.userId || "API User"}
                  </Typography>
                </>
                )}
               
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  // sx={{ color: "aliceblue" }}
                >
                  {" "}
                  {post.title || post.postTitle}
                </Typography>
              </Box>
              <hr></hr>
               {/* Post photo */}
               <Box
               sx={{
                display:"flex",
                justifyContent:"center",
                
               }} 
               >
                
                {post.postPicture && (
    <img 
      src={post.postPicture} 
      alt="Post" 
      style={{ width:"300px", height:"180px", borderRadius:"2px" }} 
    />
  )}
               </Box>
               <hr></hr>

               <Box m="3px 15px"
               sx={{
                display:"flex",
                justifyContent:"space-between",
               }} 
               >
                <Box>
                  <Typography  textAlign="center"
                  sx={{ color: likedPosts.has(post.id || post._id) ? "#1DA1F2" : "#000",
                    cursor: "pointer",}}
                    onClick={() => handleLike(post.id || post._id)}
                  >
                  <FaThumbsUp />
                  </Typography>
                  <Typography >
                    Like
                  </Typography>
                </Box>

                {userPosts.includes(post) && (
                   <Box>
                <Typography  textAlign="center"
                sx={{ color: "red", fontSize:"18px",
                  cursor: "pointer",}}
                  onClick={ () => handleDelete(post.id)}
                >
                <MdDelete />
                </Typography>
                <Typography >
                    Delete
                  </Typography>
                </Box> )}
                
               </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2"
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

      <Box m="10px"
      sx={{
        // display:"flex",
        // justifyContent:"center",
        // alignItems:"center",
        // flexDirection:"column",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        margin:"10px",
      borderRadius:"10px",

      }} 
      >
      <Typography
      sx={{
        fontWeight:"bold",
        margin:"5px",
      }} 
      >
          You want to see Exiting Images ? Check this out 
        </Typography>

        <Box 
       sx={{
        margin:"3px",
        display:"flex",
        justifyContent:"center"
      }}
      >
      <Button
            borderRadius="10px"
            sx={{
              color: "#ffeba7",
              background: "#1DA1F2",
              // outline: "none",
              // border: "none",
              cursor: "pointer",
              boxShadow: "0 0 10px #1DA1F2",
            }}
           onClick={images}
          >
            Search
          </Button>
          </Box>

      </Box>

    
    </Box>
  );
};

export default Home;
