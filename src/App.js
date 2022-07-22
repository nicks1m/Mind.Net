
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import styled from 'styled-components'

const Container = styled.div``

function App() {
  return (
    <Container className="App">
      <Login/>
    </Container>
  );
}

export default App;
