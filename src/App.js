import "./App.css";
import AppBar from "./Components/AppBar";
import Banner from "./Components/Banner";
import Comments from "./Components/Comments";
import Menu from "./Components/Menu";
import PickoftheWeak from "./Components/PickoftheWeak";

function App() {
  return (
    <>
      <AppBar/>
      <Banner/>
      <Menu/>
      <PickoftheWeak/>
      <Comments/>
      <div className="bg-dark text-white text-center mt-5 py-5">
        <h2 className="text-primary">React Pizza </h2>
        <p className="mt-5"><i class="bi bi-c-circle"></i>  Copyright-2024 React Pizza</p>
        </div>
    </>
  );
}

export default App;
