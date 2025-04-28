import Header from "./components/Header";
import Profile from "./components/Profile";
import Vision from "./components/Vision";
import TechStack from "./components/TechStack";
import { Element } from 'react-scroll';
import GlobalStyle from './GlobalStyle';

const App = () => {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <Element name="profile">
        <Profile/>
    </Element>
    <Element name="techstack">
        <TechStack/>
    </Element>
    <Element name="vision">
        <Vision/>
    </Element>
    </>
  );
};

export default App;