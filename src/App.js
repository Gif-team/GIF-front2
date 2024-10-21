import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main";
import { Profile } from "./pages/profile";
import { Post } from "./pages/post";
import { Writing } from "./pages/writing";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import { Badge } from "./pages/badge";
import { Chating } from "./pages/chating";
import { NotFound } from "./pages/notFound";
import { Starting } from "./pages/starting";
import { AlertProvider } from "./context/alertContext";

function App() {
  return (
    <AlertProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/starting" element={<Starting />} />
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/posts/writes" element={<Writing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users/signup" element={<SignUp />} />
          <Route path="/badge" element={<Badge />} />
          <Route path="/chating" element={<Chating />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AlertProvider>
  );
}

export default App;
