import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import { Error, Repo } from "./Pages";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Repo />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
