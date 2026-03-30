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

export default BlogCard;