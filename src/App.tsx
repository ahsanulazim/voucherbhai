import { Route, Routes } from "react-router";
import Dashboard from "./components/Dashboard";
import MainLayout from "../routes/MainLayout";
import Sale from "../routes/Sale";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sale" element={<Sale />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
