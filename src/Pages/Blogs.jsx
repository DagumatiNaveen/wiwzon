import { useEffect, useState } from "react";
import api from "../services/api";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    api.get("/blogs").then((res) => setBlogs(res.data));
  }, []);

  return (
    
    <div className="container mt-4">
      <h2>Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog._id} className="card mb-3">
          <div className="card-body">
            <h5>{blog.title}</h5>
            <p>{blog.description}</p>
            <small>{blog.author}</small>
          </div>
        </div>
      ))}
    </div>
  );
}
