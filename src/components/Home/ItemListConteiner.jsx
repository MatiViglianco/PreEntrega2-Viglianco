import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CardProduct from "../../screens/Products/CartProduct";
import axios from "axios";
import styles from "./styles.module.css";

const ItemListConteiner = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const url = "https://api.sampleapis.com/coffee/hot";
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={styles.conta} maxWidth="m">
        <Box className={styles.box}>
          {data.slice(0, 12)?.map((product) => {
            const item = {
              id: product.id,
              title: product.title,
              description: product.description,
              price: "$20",
              pictureUrl: product.image,
              stock: 5,
            };
            return <CardProduct product={item} />;
          })}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default ItemListConteiner;
