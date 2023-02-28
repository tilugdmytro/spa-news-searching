import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// import defaultImg from "../images/default-img.jpg";

const makeSlice = (string) => {
  if (string.length >= 50) {
    return string.slice(0, 50) + "...";
  }
  return string;
};

function CardView({ articles }) {
  return (
    <>
      <h2>Results: {articles.length}</h2>

      <Grid container spacing={2}>
        {articles.length > 0 &&
          articles.map(({ id, imageUrl, title, summary }) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
              <Card
                sx={{
                  maxWidth: 400,
                  height: 500,
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <CardMedia
                  component="img"
                  height="200px"
                  image={imageUrl}
                  alt={title}
                />
                <CardContent>
                  <Typography variant="h5" component="p" sx={{ mb: 2 }}>
                    {title}
                  </Typography>

                  <Typography variant="h6" component="p">
                    {makeSlice(summary)}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                    to={`/article/${id}`}
                  >
                    <Button
                      color="inherit"
                      endIcon={<ArrowForwardIcon />}
                      sx={{ textTransform: "none" }}
                    >
                      Read more
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default CardView;
