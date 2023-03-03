import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { fetchArticleById } from "../services/api";
import { useSelector, useDispatch } from "react-redux";
/////// using re-export
// import { articlesOperations, articlesSelectors } from "../redux/articles";

import * as articlesOperations from "../redux/articles/articlesOperations";
import * as articlesSelectors from "../redux/articles/articlesSelectors";

import {
  Button,
  Box,
  CardMedia,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme({});
theme = responsiveFontSizes(theme);

export default function ArticleView() {
  // const [article, setArticle] = useState(null);
  const { articleId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const article = useSelector(articlesSelectors.getArticles);

  const { imageUrl, title, summary } = article;

  useEffect(() => {
    dispatch(articlesOperations.fetchArticleById(articleId));
  }, [articleId, dispatch]);

  // useEffect(() => {
  //   async function getArticleById() {
  //     const data = await fetchArticleById(articleId);
  //     setArticle(data);
  //   }
  //   getArticleById();
  //   console.log("был fetch для одной ");
  // }, [articleId]);

  const onGoBack = () => {
    navigate(`/spaceflight-news-spa`);
  };

  return (
    <>
      {article && (
        <>
          <Box
            sx={{
              position: "relative",
            }}
          >
            <ThemeProvider theme={theme}>
              <CardMedia
                component="img"
                height="245px"
                image={imageUrl}
                alt={title}
              />
              <Card
                sx={{
                  width: "80%",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%)",
                  px: 3,
                  py: 2,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{ mb: 2, textAlign: "center" }}
                  >
                    {title}
                  </Typography>

                  <Typography variant="subtitle1" component="p" sx={{ mb: 2 }}>
                    {summary}
                  </Typography>

                  <Typography variant="subtitle1" component="p" sx={{ mb: 2 }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ratione, repellat aliquid. Accusantium atque voluptas
                    tenetur sequi nam, alias sed quae cupiditate, quisquam vitae
                    necessitatibus facilis eaque earum ratione. Voluptatibus
                    molestias obcaecati accusamus, neque quaerat consequatur
                    magni voluptate. Repudiandae iste molestias eligendi
                    deleniti ratione optio explicabo reiciendis qui tempore,
                    veritatis similique dicta tempora ab nesciunt pariatur
                    asperiores commodi quis a numquam.
                  </Typography>

                  <Typography variant="subtitle1" component="p" sx={{ mb: 2 }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Similique ad modi iure animi suscipit asperiores fugiat,
                    dicta provident nam est tempora enim accusantium numquam
                    totam quia porro temporibus voluptatem! Earum nostrum
                    laboriosam, esse aliquam quaerat nam iure numquam dolorem
                    molestiae, ab necessitatibus veniam doloremque ipsum aperiam
                    provident quasi voluptatibus suscipit.
                  </Typography>

                  <Typography variant="subtitle1" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni expedita asperiores tenetur veniam. Quas tenetur
                    voluptate reprehenderit? Mollitia illum quo quisquam
                    maiores, saepe repudiandae, earum enim tenetur, adipisci
                    delectus dolore.
                  </Typography>
                </CardContent>

                <Button
                  color="inherit"
                  startIcon={<ArrowBackIcon />}
                  sx={{ textTransform: "none", fontWeight: 700 }}
                  onClick={onGoBack}
                >
                  Back to homepage
                </Button>
              </Card>
            </ThemeProvider>
          </Box>
        </>
      )}
    </>
  );
}
