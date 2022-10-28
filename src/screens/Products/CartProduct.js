import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

function CardProduct({ product }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardActions>
          <CardMedia
            component="img"
            height="140"
            alt={`products/${product.id}`}
            src={product.pictureUrl}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="h3" color="text.dark">
              {product.price}
            </Typography>
          </CardContent>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

// function CardProduct({ product }) {
//   console.log(product);
//   return (
//     <Box className={styles.item}>
//       <img
//         style={{ width: "8rem", height: "8rem" }}
//         alt={`products/${product.id}`}
//         src={product.pictureUrl}
//       />
//       <h1>
//         {product.id}
//         {product.title}
//         {product.description}
//         {product.price}
//         {product.stock}
//       </h1>
//     </Box>
//   );
// }
export default CardProduct;
