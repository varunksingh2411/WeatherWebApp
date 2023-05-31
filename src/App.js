import Card from './component/Card';
import Weather from './component/Weather';

// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Weather></Weather>
    //   {/* <Card></Card> */}
    // </div>
    <>
{/* <Weather></Weather> */}
<Router>
    

     <Routes>
      <Route Component={Card} path={'/card/:city'}/>
      <Route Component={Weather} path={'/'}/>

       
    </Routes>
   </Router>
   </>


  );
}

export default App;
