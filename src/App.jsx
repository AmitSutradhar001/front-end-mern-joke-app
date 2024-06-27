import Layout from "./Layout";
import Documentation from "./pages/DocumentationLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RandomJoke from "./components/RandomJoke";
import JokesWithId from "./components/JokesWithId";
import JokesWithLimit from "./components/JokesWithLimit";
import AboutLayout from "./pages/AboutLayout";
import AboutMe from "./components/AboutMe";
import AboutSkills from "./components/AboutSkills";
import AboutContact from "./components/AboutContact";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="welcome" element={<Welcome />} />
            <Route path="documentation" element={<Documentation />}>
              <Route index element={<RandomJoke />} />
              <Route path="jokewithid" element={<JokesWithId />} />
              <Route path="jokewithlimit" element={<JokesWithLimit />} />
            </Route>
            <Route path="aboutme" element={<AboutLayout />}>
              <Route index element={<AboutMe />} />
              <Route path="skills" element={<AboutSkills />} />
              <Route path="contact" element={<AboutContact />} />
            </Route>
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
