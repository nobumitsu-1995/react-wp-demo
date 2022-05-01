import './styles/App.css';
import Router from './Router';
import Header from './components/templates/Header';
import styled from 'styled-components';
import Footer from './components/templates/Footer';

const Container = styled.div`
  padding: 100px 0;
  min-height: 100vh;
  position: relative;
`;

function App() {
  return (
    <>
      <Header/>
      <Container>
        <Router/>
        <Footer/>
      </Container>
    </>
  );
}

export default App;
