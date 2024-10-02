import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/starting" element={<Starting />} />
        <Route path="/" element={<Main />} />
        <Route path={`/profile?id=${userId}`} element={<Profile />} />
        <Route path={`posts/${postId}`} element={<Post />} />
        <Route path="posts/writes" element={<Writing />} />
        <Route path="/login" element={<Login />} />
        <Route path="users/signup" element={<Signup />} />
        <Route path={`/badge/id=${userId}`} element={<Badge />} />
        <Route path={`/posts/writes/${postId}`} element={<Writing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
