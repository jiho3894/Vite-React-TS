import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Study/Form";
import Home from "./Study/Home";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
