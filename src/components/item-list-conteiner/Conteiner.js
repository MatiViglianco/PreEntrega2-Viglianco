import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import GridTitle from "./Grid";
import ItemCount from "../ItemCount";
function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="m">
        <Box sx={{ bgcolor: "#90caf9", height: "100vh" }}>
          <GridTitle title={"Welcome to my store made by React"} />
          <GridTitle title={<ItemCount />} />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default SimpleContainer;
