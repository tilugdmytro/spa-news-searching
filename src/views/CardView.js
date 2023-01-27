import { NavLink } from "react-router-dom";

function Card({ articles }) {
  return (
    <>
      <h2>Results: {articles.length}</h2>
      {articles && (
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            flexWrap: "wrap",
          }}
        >
          {articles.map((article) => (
            <NavLink
              style={{
                marginRight: "20px",
                width: "200px",
                textDecoration: "none",
                color: "black",
              }}
              to={`/article/${article.id}`}
              key={article.id}
            >
              <img width="100px" src={article.imageUrl} alt={article.title} />
              <li style={{ marginRight: "10px" }}>
                {article.title}
                <p>{`${article.summary.slice(0, 60)}...`} </p>
              </li>
            </NavLink>
          ))}
        </ul>
      )}
    </>
  );
}

export default Card;
