
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TopicsProvider from "./contexts/TopicsProvider";
import TopicList from "./containers/TopicsList/TopicList";

import  './App.css';

function App() {
  return (
    <TopicsProvider>
      <div className="App">
        <Header />
        <TopicList/>
        <Footer />
      </div>
    </TopicsProvider>
  );
}

export default App;
