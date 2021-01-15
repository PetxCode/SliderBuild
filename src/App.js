import logo from "./logo.svg";
import "./App.css";
import { Layout, Button } from "antd";
import HomeView from "./Carousel/HomeView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderView from "./component/HeaderView";
import FeedView from "./component/FeedView";
import AppState from "./ContextAPI/AppState";
import ButtonHolder from "./component/ButtonHolder";
import EpicDesign from "./EpicDesign/EpicDesign";
import StartFile from "./ClassLecture/StartFile";
const { Header } = Layout;

function App() {
  return (
    <Router>
      <HeaderView />
      <AppState>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/EpicDesign" component={EpicDesign} />
          <Route exact path="/start" component={HomeView} />
          <Route exact path="/classfile" component={StartFile} />
          <Route exact path="/feed" component={FeedView} />
          <Route exact path="/button" component={ButtonHolder} />
        </Switch>
      </AppState>
    </Router>
  );
}

export default App;
