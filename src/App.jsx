import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Feed from "./pages/Feed/Feed";
function App() {
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route path="Home" element={<Home />} />
        <Route path="Feed" element={<Feed />} />
      </Route>
    </Routes>
  )
}

export default App ;
