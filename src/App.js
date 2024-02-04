import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Post from "./Post";
import AddBlog from "./AddBlog";

function App() {
  const [posts, setPosts] = useState([
    
    {
      username: "Dev",
      message: "Just finished my React project.",
      timestamp: new Date(),
    },
    {
      username: "Tanya",
      message: "Happy to share my.",
      timestamp: new Date(),
    },
    
  ]);

  const addBlog = (newBlog) => {
    setPosts((prevPosts) => [...prevPosts, newBlog]);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <h1>Welcome to my blog website!</h1>
        
        <Routes>
          <Route path="/addblog" element={<AddBlog onAddBlog={addBlog} />} />
          <Route
            path="/"
            element={
              <div className="posts">
                {posts.map((post, index) => (
                  <Post
                    key={index}
                    username={post.username}
                    message={post.message}
                    timestamp={post.timestamp}
                  />
                ))}
              </div>
            }
          />
        </Routes>

        
      </div>
    </Router>
  );
}

export default App;
