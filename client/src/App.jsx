import { Route, Redirect } from "react-router-dom";
//HOC
import HomeLayoutHOC from "./HOC/Home.Hoc"

//components
// import Temp from "./components/temp"
// pages
import Home from "./Pages/Home";

function App() {
  return (
    <> 
    <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
    </>
  );
}

export default App;
