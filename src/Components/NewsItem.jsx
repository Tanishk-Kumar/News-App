import image from "../assets/news.jpeg";
import "../index.css";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      class="card h-100 bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-2 px-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : image}
        // style={{ width: "360px", height: "200px" }}
        class="card-img-top"
        alt={title || "News Image"}
      />
      <div class="card-body">
        <h5 class="card-title">{title.slice(0, 50)}</h5>
        <p class="card-text">
          {description
            ? description.slice(0, 90)
            : " This is the custom description about the news that we are getting from top headlines !"}
        </p>
        <a href={url} class="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
