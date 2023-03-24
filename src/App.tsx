import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";
import Menu, { useScrollToTop } from "./Components/Menu/Menu";
import { SocialMediaRightBar } from "./Components/SocialMediaRightBar/SocialMediaRightBar";
// import {SocialMediaIcons} from "./"
function App() {
  useScrollToTop();
  return (
    <div className="App">
      <SocialMediaRightBar />
      <Menu />
      <AllRoutes />
    </div>
  );
}

export default App;
