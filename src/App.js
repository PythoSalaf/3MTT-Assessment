import { Routes, Route } from "react-router-dom";
import { Grid, List, Navbar } from "./Components";
import { Error, Repo } from "./Pages";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Repo />}>
          <Route index element={<Grid />} />
          <Route path="list-view" element={<List />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
