import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export default function NewsCard({
  title,
  author,
  publishedAt,
  urlToImage,
  content,
  description,
  itemIndex,
  queryValue
}) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "550px",
        border: "1px solid gray",
        cursor: "pointer",
        ":hover": { border: "1px solid blue" }
      }}
      onClick={() => {
        navigate(`new/${queryValue}/${itemIndex}`);
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {author?.trim().charAt(0)}
          </Avatar>
        }
        title={title}
        subheader={publishedAt}
      />
      <CardMedia component="img" height="194" image={urlToImage} alt="image" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <br />

        <Typography variant="body2" color="text.secondary">
          By: {author ? author : "Anonimus"}
        </Typography>
      </CardContent>

      <CardActions
        sx={{ display: "flex", justifyContent: "end", marginRight: "5px" }}
        disableSpacing
      ></CardActions>
    </Card>
  );
}
