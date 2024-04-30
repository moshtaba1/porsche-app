import './App.css';
import LeftComponent from './leftComponent/LeftComponent';
import RightComponent from './rightComponet/RightComponent';
import Navbar from './navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <LeftComponent/>        
      <RightComponent/>
    </div>
  );
}

export default App;
