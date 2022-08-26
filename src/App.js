import Header from "./Header";
import Sidebar from "./Sidebar";
import Body from "./Body";
import "./app.css";


function App() {
  return (
    <div className="row">
      <Header />
      <div className="body-container">
        <Sidebar />
        <Body />
      </div>
      
    </div>
  );
}

export default App;
