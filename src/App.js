import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

import { Container} from 'react-bootstrap'
import './bootstrap.min.css'

function App() {
  return (
    <>
      <Header/>
      <main>
        <Container>
         <HomeScreen/>
        </Container>
      </main>

<Footer/>
    </>
  );
}

export default App;
