import { Box, Typography } from "@mui/material";
import { SearchBox, SearchContainer } from "./Searchmodule";
import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=7gNHtOO8FG_JQgsmVJCsjplb_rg_9VL-VDncdWKwYzQ`
      );
      setImages(response.data.results);
    } catch (error) {
      console.error("Error fetching images", error);
    }
  };

  return (
    <Box>
      <Typography
        fontWeight="bold"
        // color="#ffeba7"
        color="#1DA1F2"
        sx={{ mb: "30px", textAlign: "center", fontSize: "30px", top:"10%" }}
      >
        Search For Images
      </Typography>
      <SearchBox className="search-box">
        <SearchContainer>
          <InputBase
            sx={{ ml: 2, flex: 1, color: "#ffeba7" }}
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <IconButton type="button" sx={{ p: 1 }} onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </SearchContainer>
      </SearchBox>

      <Box mt={12} style={{ boxShadow: "0 4px 10px rgba(0,0,0,0.2)", }}>
        {images.length > 0 && (
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 2}}>
            {images.map((image) => (
              <Box key={image.id} sx={{ borderRadius: '8px', overflow: 'hidden' }}> 
              <img src={image.urls.small} alt={image.description} style={{ width: "100%"}} />
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
    
  );
};

export default Search;
