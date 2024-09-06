/* eslint-disable no-unused-vars */
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useContext, useState } from "react";
import { PostContext } from "./PostContext";
import { useNavigate } from "react-router-dom";
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';


// Initial values

const initialValues = {
  userId: "",
  postTitle: "",
  postContent: "",
  tags: "",
};

// User scheme: use for validation

const userSchema = yup.object().shape({
  userId: yup.string().required("required"),
  postTitle: yup.string().required("required"),
  postContent: yup.string().required("required"),
})

const CreatePost = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [ loading, setLoading ] = useState(false);
  const { posts, setPosts } = useContext(PostContext);
  const navigate = useNavigate();

  const handleFormSubmit = ( values, { resetForm }) => {
    setLoading(true);
    setTimeout(() => {
      const newPost = {
        ...values,
        id: Date.now(),  // Assign a unique ID to each post
      };
      setPosts((prevPosts) => [newPost, ...prevPosts ]);
      setLoading(false);
      resetForm();
      alert("Your Post Details is submitted");
      navigate("/Social-media.github.io/");
    }, 2000);
  }

  return (
    <Box
      m="20px"
      sx={{
        backgroundColor: "#fafafa",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 0 10px #1DA1F2"
      }}
    >
      <Typography
        fontWeight="bold"
        // color="#ffeba7"
        color="#1DA1F2"
        sx={{
          mb: "30px",
          textAlign: "center",
          fontSize: "24px",
        }}
      >
        Create New Post
      </Typography>
      <Formik
      onSubmit={handleFormSubmit}
      validationSchema={userSchema}
      initialValues={initialValues}

      >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleBlur,
        handleChange,
        setFieldValue,
        resetForm,

      }) => (
        <form
        onSubmit={handleSubmit}
        >
          <Box
            display="grid"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            columnGap="10px"
            rowGap="15px"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <Box
              sx={{
                gridColumn: "span 2",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f0f2f5", 
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="User Id"
                name="userId"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.userId}
                error={!!touched.userId && !!errors.userId}
                helperText={touched.userId && errors.userId}
                InputProps={{
                  // style: { color: "aliceblue" },
                  style: { color: "#000000" },
                  sx: {
                    borderRadius: "8px",
                  },
                }}
                InputLabelProps={{
                  style: { color: "#1DA1F2" },
                  // style: { color: "#ffeba7" },
                }}
              />
            </Box>

            <Box
              sx={{
                gridColumn: "span 2",
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Post Title"
                name="postTitle"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.postTitle}
                error={!!touched.postTitle && !!errors.postTitle}
                helperText={touched.postTitle && errors.postTitle}
                InputProps={{
                  // style: { color: "aliceblue" },
                  style: { color: "#000000" },
                  sx: {
                    borderRadius: "8px",
                  },
                }}
                InputLabelProps={{
                  style: { color: "#1DA1F2" },
                  // style: { color: "#ffeba7" },
                }}
              />
            </Box>

            <Box
              sx={{
                gridColumn: "span 4",
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="paragraph"
                label="Post Content"
                name="postContent"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.postContent}
                error={!!touched.postContent && !!errors.postContent}
                helperText={touched.postContent && errors.postContent}
                InputProps={{
                  // style: { color: "aliceblue" },
                  style: { color: "#000000" },
                  sx: {
                    borderRadius: "8px",
                  },
                }}
                InputLabelProps={{
                  style: { color: "#1DA1F2" },
                  // style: { color: "#ffeba7" },
                }}
              />
            </Box>

            <Box
              sx={{
                gridColumn: "span 4",
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Tags"
                name="tags"
                onBlur={handleBlur}
                onChange={handleChange}
                InputProps={{
                  // style: { color: "aliceblue" },
                  style: { color: "#000000" },
                  sx: {
                    borderRadius: "8px",
                  },
                }}
                InputLabelProps={{
                  style: { color: "#1DA1F2" },
                  // style: { color: "#ffeba7" },
                }}
              />
            </Box>

            <Box
            sx={{
              gridColumn: "span 4",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f0f2f5", // Light Grey
              borderRadius: "8px",
              padding: "10px",
            }}
            >
              <PhotoCameraOutlinedIcon 
                style={{ color: "#1DA1F2", marginRight: "8px" }}
                />
                <input 
                 accept="image/*"
                 style={{ display: "none" }}
                 id="upload-post-picture"
                 type="file"
                 onChange={ (event) =>{ 
                  const file = event.currentTarget.files[0];
                  const reader = new FileReader();

                  reader.onloadend = () =>{
                    setFieldValue("postPicture", reader.result);
                  }

                  if(file) {
                    reader.readAsDataURL(file);
                  }
                  }}
                 />
                 <label
                 htmlFor="upload-post-picture" 
                 >
                   <Box
                   type="submit"
                   variant="contained"
                   color="primary"
                   sx={{ color: "#ffffff", backgroundColor: "#1DA1F2" }} 
                   component="span"
                  >
                    Upload Photo
                  </Box>
                 </label>

            </Box>

          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
              <Button
              type="submit"
              variant="contained"
              // sx={{
              //   color: "#ffeba7"
              // }}
              sx={{ color: "#ffffff", backgroundColor: "#1DA1F2" }} 
              disabled={loading}
              >{loading ? "Creating..." : "Create New Post"}</Button>
            </Box>
        </form>
       )}
      </Formik>
    </Box>
  );
};

export default CreatePost;
