import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Details from "./pages/Details";

const App = () => {
  return (

    // set DaisyUI theme 
    <div data-theme="sunset" className="min-h-[100vh]">
      {/* app routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/note/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
