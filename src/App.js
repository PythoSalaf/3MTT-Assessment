import { Routes, Route } from "react-router-dom";
import { ErrorBoundary, ErrorTester, Grid, List, Navbar } from "./Components";
import { Error, Repo, RepoDetail } from "./Pages";
function App() {
  return (
    <div>
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Repo />}>
            <Route index element={<Grid />} />
            <Route path="list-view" element={<List />} />
          </Route>
          <Route />
          <Route path="test-error" element={<ErrorTester />} />
          <Route path="repo/:title" element={<RepoDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
