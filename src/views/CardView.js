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
import DateRangeIcon from "@mui/icons-material/DateRange";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

// import defaultImg from "../images/default-img.jpg";

// const result = parseISO("2023-02-28T17:23:00.000Z");
// console.log(result);

// const today = format(result, );
// console.log(today);

const dateChange = (string) => {
  const parsedStr = parseISO(string);
  const dateFinal = format(parsedStr, "MMMM do, yyyy");
  return dateFinal;
};

const makeSlice = (string) => {
  if (string.length >= 60) {
    return string.slice(0, 60) + "...";
  }
  return string;
};

function CardView({ articles }) {
  return (
    <>
      <h2>Results: {articles.length}</h2>

      <Grid container spacing={2}>
        {articles.length > 0 &&
          articles.map(({ id, imageUrl, title, summary, publishedAt }) => (
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
                  <Typography
                    sx={{
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      opacity: 0.6,
                      fontSize: 14,
                    }}
                  >
                    <DateRangeIcon
                      sx={{ color: "disabled", mr: 1, fontSize: "large" }}
                    />
                    {dateChange(publishedAt)}
                  </Typography>

                  <Typography
                    variant="h5"
                    component="p"
                    sx={{ mb: 2, fontSize: 22 }}
                  >
                    {title}
                  </Typography>

                  <Typography variant="h6" component="p" sx={{ fontSize: 16 }}>
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
