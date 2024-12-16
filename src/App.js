import './App.css';

import Counter from './components/Counter/Counter';
import Jokes from './components/Jokes/Jokes';
import Login from './components/Login/Login';
import User from './components/Users/Users';

import Wrapper from './components/Wrapper/Wrapper';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {


  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
          <Route path="/" element={
              <Login />
            } />
          <Route path="/counter" element={
            <Wrapper>
              <Counter />
            </Wrapper>
            } />
          <Route path="/jokes" element={
            <Wrapper>
              <Jokes />
            </Wrapper>
            } />
          <Route path="/users" element={
            <Wrapper>
              <User />
            </Wrapper>
            } />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
