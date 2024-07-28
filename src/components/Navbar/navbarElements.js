import { Box } from "@mui/material";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";



export const Nav = styled.nav`
  background: #252525c1;
  background-color: #1DA1F2; /* Twitter Blue */
  color: #ffffff;
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)";

  position: relative;
`;

export const NavLink = styled(Link)`
  color: aliceblue;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  font-size: large;
  &.active {
    background: #575757;
    color: #ffeba7;
    transition: 0.6s ease-in-out;
    border-radius: 20px;
    
  }
  //   &:hover {
  //   background: #575757;
  //   color: #ffeba7;
  //   transition: 0.6s ease-in-out;
  //   border-radius: 20px;
  // }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: aliceblue;
  @media screen and (max-width: 786px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 30px;
  background: #4f4e4e;
  padding: 5px 5px;
  color: #ffeba7;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    // background: #fff;
    color: black;
    background-color: #1A91DA;
  }
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 250px;
  height: 100%;
  background: #252525;
  boxShadow: "0 4px 8px rgba(0,0,0,0.3)";
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  z-index: 100;
  transition: right 0.6s ease-in-out;
  overflow-y: auto;
`;

export const SidebarLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  color: aliceblue;
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  border-radius: 5px;
  &:hover {
    background: #575757;
    color: #ffeba7;
    transition: 0.6s ease-in-out;
  }
`;

export const SidebarClose = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 2rem;
  cursor: pointer;
  color: aliceblue;
`;

export const Logo = styled(Link)`
@import url('https://fonts.googleapis.com/css2?family=Sevillana&display=swap');
  color: aliceblue;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
  padding-left: 1rem;
   font-size: 20px;
   font-family: 'Sevillana', cursive;
   
  &:hover {
    color: #ffeba7;
   
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 786px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
  }
`;

export const SearchContainer = styled(Box)`
  display: flex;
  background-color: #575757;
  border-radius: 20px;
  padding: 0 10px;
  width: 200px;
  @media screen and (max-width: 786px) {
    width: 100%;
   display: none;
  }
`;
