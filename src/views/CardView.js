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
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme({});
theme = responsiveFontSizes(theme);

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
      <ThemeProvider theme={theme}>
        <Grid container spacing={2}>
          {articles.length > 0 &&
            articles.map(({ id, imageUrl, title, summary, publishedAt }) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    transition: "transform 0.25s",
                    "&:hover": {
                      transform: "scale(1.04)",
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
                    },
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
                      }}
                    >
                      <DateRangeIcon
                        sx={{ color: "disabled", mr: 1, fontSize: "large" }}
                      />
                      {dateChange(publishedAt)}
                    </Typography>

                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{
                        mb: 2,
                      }}
                    >
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
                        sx={{ textTransform: "none", fontWeight: 700 }}
                      >
                        Read more
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default CardView;
