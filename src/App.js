import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/starting" element={<Starting />} />
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/posts/writes" element={<Writing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/signup" element={<Signup />} />
        <Route path="/badge" element={<Badge />} />
        <Route path="/chating" element={<Chating />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
