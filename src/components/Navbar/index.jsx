import { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
// import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FaceIcon from '@mui/icons-material/Face';
import SearchIcon from "@mui/icons-material/Search";
import { useUser } from "../../pages/UserContext";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Sidebar,
  SidebarLink,
  SidebarClose,
  Logo,
  // SearchBox,
  // SearchContainer
} from "./navbarElements";
import { Avatar, Tooltip } from "@mui/material";
// import { IconButton, InputBase } from "@mui/material";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const { user } = useUser();

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
    
      <Nav className="nav">
        <Logo to="/Social-media.github.io/"  >TrendWave</Logo>
        <Bars className="bar" onClick={toggleSidebar} />
        <NavMenu className="navmenu">
          <Tooltip title="Home">
          <NavLink className="link" to="/Social-media.github.io/">
            <HomeOutlinedIcon />
          </NavLink>
          </Tooltip>
          <Tooltip title="Search Images">
          <NavLink className="link" to="/search">
            <SearchIcon />
          </NavLink>
          </Tooltip>
          <Tooltip title="Create Post">
          <NavLink className="link" to="/create">
            <AddCircleOutlineOutlinedIcon />
          </NavLink>
          </Tooltip>
          
          <Tooltip title="Create Account">
          <NavLink className="link" to="/signup">
            <PersonAddIcon />
          </NavLink>
          </Tooltip>

          <Tooltip title="Notifications">
          <NavLink className="link" to="/notification">
            <NotificationsIcon />
          </NavLink>
          </Tooltip>
        </NavMenu>

        {/* <SearchBox className="search-box"  >
          <SearchContainer >
          <InputBase sx={{ ml: 2, flex: 1 , color: "#ffeba7"}} placeholder="Search"/>
          <IconButton type="button" sx={{ p: 1 }} >
            <SearchIcon />
          </IconButton>
          </SearchContainer>
        </SearchBox> */}

        <NavBtn className="btn" >
        <Tooltip title="User">
          <NavBtnLink className="btnlink" to="/profile" >
          { user && user.profilePicture ? (
            <Avatar
            src={URL.createObjectURL(user.profilePicture)} 
            style={{ width:"35px" , height:"35px" }}
            />
            ) : (
              <FaceIcon
            style={{ fontSize: "25px"  }}
             />
             )
            }
          </NavBtnLink>
          </Tooltip>
        </NavBtn>
      </Nav>

      <Sidebar isOpen={sidebar}>
        <SidebarClose onClick={toggleSidebar}>&times;</SidebarClose>
        <SidebarLink to="/Social-media.github.io/" onClick={toggleSidebar}>
          {" "}
          Home
        </SidebarLink>
        <hr width="100% " />
        <SidebarLink to="/create" onClick={toggleSidebar}>
          Create Post
        </SidebarLink>
        <hr width="100% " />
        <SidebarLink to="/search" onClick={toggleSidebar}>
          Search
        </SidebarLink>
        <hr width="100% " />
        <SidebarLink to="/signup" onClick={toggleSidebar}>
          Signup
        </SidebarLink>
        <hr width="100% " />
        <SidebarLink to="/profile" onClick={toggleSidebar}>
          Profile
        </SidebarLink>
        <hr width="100% " />
      </Sidebar>
    </>
  );
};

export default Navbar;
