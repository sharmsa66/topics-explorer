import TopicContainer from "./containers/TopicContainer/TopicContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import TopicsProvider from "./contexts/TopicsProvider";

function App() {
  return (
    <TopicsProvider>
      <div className="App">
        <Header />
        <TopicContainer />
        <Footer />
      </div>
    </TopicsProvider>
  );
}

export default App;
