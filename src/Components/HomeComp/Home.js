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
          <h1 >Blog Posts</h1>
          <h2 >"Smart marketing" starts here</h2>
          <p>
            Join over 150,000 marketing managers who get our best digital
            marketing insights, strategies and tips delivered straight to their
            inbox.
          </p>
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
