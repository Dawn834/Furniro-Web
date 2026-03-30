import { blogPosts, categories, recentPosts } from "../../data/blogData";
import BlogCard from "./blogCard";

function blogGrid({ blogs, limit }) {
    const displayBlogs = limit ? (blogs || blogPosts).slice(0, limit) : (blogs || blogPosts);
    return (
        <div className="blog-grid">
            {displayBlogs.map(post => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
    )
}

export default blogGrid;