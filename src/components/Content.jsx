import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from "./Work";
import Info from "./Info";

const Content = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="./work" Component={Work} />
        <Route path="./info" Component={Info} />
      </Routes>
    </BrowserRouter>
  );
};

export default Content;
