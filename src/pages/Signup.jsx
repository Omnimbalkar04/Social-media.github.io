/* eslint-disable no-unused-vars */

import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// Initial Values
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

// User schema: Use for validation by using yup
const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Invalid Email").required("required"),
  password: yup
    .string()
    .required("required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .required("required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Signup = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (values, { resetForm }) => {
    setLoading(true);
    setTimeout(() => {
      console.log(values);
      setLoading(false);
      resetForm();
      alert("Login Details is submitted");
    }, 2000);
  };

  return (
    <Box
      m="20px"
      sx={{
        backgroundColor: "#ffffff",
        // backgroundColor: "hsla(240, 7%, 17%, 0.647)",
        borderRadius: "8px",
        padding: "40px 20px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)"
      }}
    >
      <Typography
        fontWeight="bold"
        color="#1DA1F2"
        // color="#ffeba7"
        sx={{
          mb: "20px",
          textAlign: "center",
          fontSize: "24px",
        }}
      >
        Create New Account
      </Typography>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
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
                  backgroundColor: "#f0f2f5", // Light Grey
                  borderRadius: "8px",
                  padding: "10px",
                }}
              >
                <AccountCircleOutlinedIcon
                  // style={{ color: "#ffeba7", marginRight: "8px" }}
                  style={{ color: "#1DA1F2", marginRight: "8px" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
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
                  aria-label="First Name"
                />
              </Box>

              <Box
                sx={{
                  gridColumn: "span 2",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#f0f2f5", // Light Grey
                  borderRadius: "8px",
                  padding: "10px",
                }}
              >
                <AccountCircleOutlinedIcon
                  // style={{ color: "#ffeba7", marginRight: "8px" }}
                  style={{ color: "#1DA1F2", marginRight: "8px" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  InputProps={{
                    style: { color: "#000000" },
                    // style: { color: "aliceblue" },
                    sx: {
                      borderRadius: "8px",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#1DA1F2" },
                    // style: { color: "#ffeba7" },
                  }}
                  aria-label="Last Name"
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
                <MailOutlinedIcon 
                // style={{ color: "#ffeba7", marginRight: "8px" }} 
                style={{ color: "#1DA1F2", marginRight: "8px" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  InputProps={{
                    style: { color: "#000000" },
                    // style: { color: "aliceblue" },
                    sx: {
                      borderRadius: "8px",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#1DA1F2" },
                    // style: { color: "#ffeba7" },
                  }}
                  aria-label="Email"
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
                <LockOutlinedIcon 
                // style={{ color: "#ffeba7", marginRight: "8px" }}
                style={{ color: "#1DA1F2", marginRight: "8px" }}
                 />
                <TextField
                  fullWidth
                  variant="filled"
                  type="password"
                  label="Set Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    style: { color: "#000000" },
                    // style: { color: "aliceblue" },
                    sx: {
                      borderRadius: "8px",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#1DA1F2" },
                    // style: { color: "#ffeba7" },
                  }}
                  aria-label="Set Password"
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
                <LockOutlinedIcon 
                // style={{ color: "#ffeba7", marginRight: "8px" }} 
                style={{ color: "#1DA1F2", marginRight: "8px" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="password"
                  label="Confirm Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmPassword}
                  name="confirmPassword"
                  error={!!touched.confirmPassword && !!errors.confirmPassword}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  InputProps={{
                    style: { color: "#000000" },
                    // style: { color: "aliceblue" },
                    sx: {
                      borderRadius: "8px",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#1DA1F2" },
                    // style: { color: "#ffeba7" },
                  }}
                  aria-label="Confirm Password"
                />
              </Box>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="submit"
                variant="contained"
                // sx={{ color: "#ffeba7" }}
                sx={{ color: "#ffffff", backgroundColor: "#1DA1F2" }} 
                disabled={loading} // Disable button when loading
              >
                {loading ? "Creating..." : "Create New User"}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Signup;
