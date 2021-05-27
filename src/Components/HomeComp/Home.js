import React, { useState, useEffect } from "react";
import Blogs from "../BlogComp/Blogs";
import Pagination from "../PagesComp/Pagination";
import axios from "axios";
import Nav from "../NavComp/Nav";

import "./Home.css";
const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(10);

  useEffect(() => {
    // Fetching data from an API
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // To get the current Blogs
  const lastBlog = currentPage * blogsPerPage;
  console.log(lastBlog);
  const firstBlog = lastBlog - blogsPerPage;
  console.log(firstBlog);
  const currentBlogs = blogs.slice(firstBlog, lastBlog);
  console.log(currentBlogs);

  // To change page whenever we click page numbers
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <Nav />
      <div className="home">
        <div className="headings">
          <div className="headings1">
            <h1>
              Smart marketing <br />
              starts here
            </h1>
            <h4>
              Join over 150,000 marketing managers who get our best digital
              marketing insights, strategies and tips delivered straight to
              their inbox.
            </h4>
          </div>
          <form>
            <div className="service-form-box">
              <div className="form-group">
                <input
                  type="email"
                  name
                  className="form-control"
                  placeholder="ENTER YOUR WORK EMAIL"
                />
              </div>
              <div className="submit-btn">
                <button type="submit">Subscribe</button>
              </div>
            </div>
          </form>
        </div>

        <div className="mid-section">
          <div className="mid-section-img">
            <a href="single-blog.html">
              <img
                src="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/blog-list-1.png"
                width="530"
                height="350"
              />
            </a>
          </div>

          <div className="mid-section-text">
            <h3>
              <a href="single-blog.html">
                Top Software Development Companies in London – Compare Quotes
              </a>
            </h3>
            <p className="mid-section-desc">
              Kickstart the growth of your business with a professionally
              designed website and software development services offered by
              Logicsofts, one of the leading software development
            </p>
            <div className="read-more">
              <a href="single-blog.html">Read more</a>
            </div>
            <div className="author">
              <div className="author-img">
                <img src="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/author.png" />
              </div>
              <div className="author-name">
                <h4>
                  <span>Author : </span>
                  <a href="#">Sam Singh</a>
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* To display Blogs */}
        <Blogs blogs={currentBlogs} />
        <Pagination
          // To display Pagination
          blogsPerPage={blogsPerPage}
          totalBlogs={blogs.length}
          // To redirect or change page
          paginate={paginate}
        />
      </div>
    </div>
  );
};
export default Home;
