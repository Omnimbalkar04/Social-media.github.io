/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const deletePost = async ( postId ) => {
    try{
      setPosts((prevPosts) => prevPosts.filter(post => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <PostContext.Provider value={{ posts, setPosts, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};
