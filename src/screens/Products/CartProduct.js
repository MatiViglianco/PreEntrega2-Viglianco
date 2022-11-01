import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import styles from "./styles.module.css";

function CardProduct({ product }) {
  return (
    <Card className={styles.card}>
      <img
        className={styles.img}
        component="img"
        alt={`products/${product.id}`}
        src={product.pictureUrl}
      />
      <div className={styles.content}>
        <div className={styles.title}>
          <Typography gutterBottom variant="h3" component="div">
            {product.title}
          </Typography>
          <Typography
            style={{ marginRight: "1rem" }}
            variant="h4"
            color="text.dark"
          >
            {product.price}
          </Typography>
        </div>
        <Typography
          style={{ paddingBottom: "4rem", width: "80%" }}
          variant="body1"
        >
          {product.description}
        </Typography>
      </div>
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
