import React, { useState } from "react";
import "./AddBlog.css"; // Import the CSS file

function AddBlog({ onAddBlog }) {
  const [newBlog, setNewBlog] = useState({
    username: "",
    message: "",
    timestamp: new Date(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  const handleAddBlog = () => {
    onAddBlog(newBlog);
    setNewBlog({
      username: "",
      message: "",
      timestamp: new Date(),
    });
  };

  return (
    <div className="add-blog-container">
      <h2 id="b">Add Your Blog</h2>
      <form className="add-blog-form">
        <label className="username-label">
          Username:
          <input
            type="text"
            name="username"
            value={newBlog.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="username-label">
          Message:
          <textarea
            name="message"
            value={newBlog.message}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="username-label" type="button" onClick={handleAddBlog}>
          Add Blog
        </button>
      </form>
    </div>
  );
}

export default AddBlog;