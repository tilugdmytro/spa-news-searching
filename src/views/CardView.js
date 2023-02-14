import { Link } from "react-router-dom";
// import defaultImg from "../images/default-img.jpg";

const makeSlice = (string) => {
  if (string.length >= 60) {
    return string.slice(0, 60) + "...";
  }
  return string;
};

function Card({ articles }) {
  return (
    <>
      <h2>Results: {articles.length}</h2>
      {articles.length > 0 && (
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            flexWrap: "wrap",
          }}
        >
          {articles.map(({ id, imageUrl, title, summary }) => (
            <Link
              style={{
                marginRight: "20px",
                width: "200px",
                textDecoration: "none",
                color: "black",
              }}
              to={`/article/${id}`}
              key={id}
            >
              <img width="100px" src={imageUrl} alt={title} />
              {/* {imageUrl ? (
                <img width="100px" src={imageUrl} alt={title} />
              ) : (
                <img width="100px" src={defaultImg} alt={title} />
              )} */}
              <li style={{ marginRight: "10px" }}>
                {title}
                <p>{makeSlice(summary)}</p>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
}

export default Card;
