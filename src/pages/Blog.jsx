import PageHero from "../components/PageHero";
import ServiceFeatures from "../components/ServiceFeatures";
import Pagination from "../components/Pagination";
import { blogPosts, categories, recentPosts } from "../data/blogData";
import searchIcon from "../assets/img/header/akar-icons_search.svg";
import { useState, useMemo } from "react";
import BlogGrid from "../components/blog/blogGrid";


function Blog() {

  // logic pagination
  const [currentPage, setCurrentPage] = useState(1);
  const blogPerPages = 3;

  // reduce total page
  const totalPages = Math.ceil(blogPosts.length / blogPerPages);

  // logic get current blog
  const currentBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * blogPerPages;
    return blogPosts.slice(startIndex, startIndex + blogPerPages);
  }, [currentPage]);

  // handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className="blog-page">
      <PageHero title="Blog" currentPage="Blog" />

      <div className="container blog-container">
        <div className="blog-main">
          <div className="blog-list">
            <BlogGrid blogs={currentBlogs} />
          </div>
        </div>

        <aside className="blog-sidebar">
          <div className="sidebar-search">
            <input type="text" />
            <img src={searchIcon} alt="Search" className="search-icon" />
          </div>

          <div className="sidebar-section">
            <h3 className="section-title">Categories</h3>
            <ul className="category-list">
              {categories.map((cat, index) => (
                <li key={index}>
                  <span>{cat.name}</span>
                  <span>{cat.count}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-section">
            <h3 className="section-title">Recent Posts</h3>
            <div className="recent-posts">
              {recentPosts.map(post => (
                <div key={post.id} className="recent-post-item">
                  <img src={post.thumb} alt={post.title} />
                  <div className="info">
                    <h4>{post.title}</h4>
                    <span>{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

      <ServiceFeatures />
    </main>
  );
}

export default Blog;