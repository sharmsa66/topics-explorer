
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import TopicsProvider from "./contexts/TopicsProvider";
import SearchContainer from "./containers/SearchContainer/SearchContainer";
import Circle from "./components/UI/Circle/circle";
import Stepper from "./components/UI/Stepper/Stepper";

function App() {
  
  return (
    <TopicsProvider>
      <div className="App">
        <Header />
        
          {/* <SearchContainer/> */}
          <Stepper/>
        {/* <Footer /> */}
      </div>
    </TopicsProvider>
  );
}

export default App;
