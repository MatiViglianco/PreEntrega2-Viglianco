import Home from "./Home/Home";
import ItemList from "../components/Home/ItemList";
import NavBar from "../../src/components/navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ItemList" element={<ItemList />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
