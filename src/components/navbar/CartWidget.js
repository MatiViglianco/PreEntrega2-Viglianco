import * as React from "react";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function CartButton() {
  return (
    <IconButton color="error" aria-label="add to shopping cart">
      <AddShoppingCartIcon />
    </IconButton>
  );
}

export default CartButton;
