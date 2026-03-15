import React from "react";
import { useEffect, useState } from "react";
import api from "../../services/api";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    api.get("/blogs").then((res) => setBlogs(res.data));
  }, []);

  return (
    <>
      <main id="main">
        <div className="single-page">
          {/* <!--  Recent Blog Posts Section  --> */}
          <section id="recent-posts" className="recent-posts sections-bg">
            <div className="container" data-aos="fade-up">
              <div className="row gy-4">
                {blogs.map((blog) => (
                  <>
                    <div className="col-lg-4" key={blog._id}>
                      <article>
                        <div className="post-img">
                          <img
                            src="assets/images/blog/blog1.jpeg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <p className="post-category">Design & Verfication</p>
                        <h2 className="title">{blog.title}</h2>
                        <div className="d-flex align-items-center">
                          <div className="post-meta">
                            <p className="post-author">{blog.author}</p>
                            <p className="post-date">
                              <time>Dec 24, 2025</time>
                            </p>
                          </div>
                        </div>
                      </article>
                    </div>
                  </>
                ))}
              </div>
              {/* <!-- End recent posts list --> */}
            </div>
          </section>
          {/* <!-- End Recent Blog Posts Section --> */}
        </div>
      </main>
      {/* <!-- End #main --> */}
    </>
  );
};

export default BlogList;
