import styled from "styled-components";
import { Box } from "@mui/material";


export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
    top: 26%;
    left: 50%;
    transform: translate(-50%, -50%);
  @media screen and (max-width: 786px) {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    // width: 100px;
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
  }
`;
