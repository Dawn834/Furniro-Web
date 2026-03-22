import PageHero from "../components/pageHero";
import ServiceFeatures from "../components/serviceFeatures";
import Pagination from "../components/pagination";
import { blogPosts, categories, recentPosts } from "../data/blogData";
import searchIcon from "../assets/img/header/akar-icons_search.svg";

const BlogCard = ({ post }) => (
  <div className="blog-card">
    <div className="blog-card__image">
      <img src={post.image} alt={post.title} />
    </div>
    <div className="blog-card__meta">
      <span><i className="fa-solid fa-user"></i> {post.author}</span>
      <span><i className="fa-solid fa-calendar"></i> {post.date}</span>
      <span><i className="fa-solid fa-tag"></i> {post.category}</span>
    </div>
    <h2 className="blog-card__title">{post.title}</h2>
    <p className="blog-card__text">{post.summary}</p>
    <a href="#" className="blog-card__link">Read more</a>
  </div>
);

function Blog() {
  return (
    <main className="blog-page">
      <PageHero title="Blog" currentPage="Blog" />

      <div className="container blog-container">
        <div className="blog-main">
          <div className="blog-list">
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
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
      <Pagination />

      <ServiceFeatures />
    </main>
  );
}

export default Blog;