import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function ItemCount() {
  const [numberCount, setNumberCount] = React.useState(0);
  const [date, setDate] = React.useState("");

  function clickCount() {
    setNumberCount(numberCount + 1);
    setDate(new Date().toString());
  }

  function clickRestCount() {
    setNumberCount(numberCount - 1);
  }

  function clickDeleteCount() {
    setNumberCount(numberCount - numberCount);
  }

  return (
    <div>
      <h1>PRODUCT CARD</h1>
      <br />
      {date}
      <Button variant="contained" onClick={() => clickRestCount()}>
        {"-"}
      </Button>
      {numberCount}
      <Button variant="contained" onClick={() => clickCount()}>
        {"+"}
      </Button>
      <br />
      <Button variant="contained" onClick={() => clickDeleteCount()}>
        {"Add to cart"}
      </Button>
      <Button variant="contained" onClick={() => clickDeleteCount()}>
        <DeleteIcon />
      </Button>
    </div>
  );
}
export default ItemCount;
