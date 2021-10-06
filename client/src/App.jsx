
//HOC
import HomeLayoutHOC from "./HOC/Home.Hoc"
import Temp from "./components/temp"
function App() {
  return (
    <div> 
    <HomeLayoutHOC path="/" exact component={Temp}/>
    </div>
  );
}

export default App;
