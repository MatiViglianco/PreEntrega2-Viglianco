import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "30%",
  marginTop: "1%",
}));

function GridTitle(props) {
  const { title } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid style={{ display: "flex", justifyContent: "center" }} xs={12}>
        <Item>
          <h1>{title}</h1>
        </Item>
      </Grid>
    </Box>
  );
}
export default GridTitle;
