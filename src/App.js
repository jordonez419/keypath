import './App.css';
import Widget from './Components/Widget';
import { Route, Routes } from 'react-router-dom';
import Learn from './Components/Learn';
import Learn2 from './Components/Learn2';
import Learn3 from './Components/Learn3';
import Quiz from './Components/Quiz';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Routes className="transition-container">
          <Route exact path='/' element={<Learn />}></Route>
          <Route exact path='/learn/1' element={<Learn2 />}></Route>
          <Route exact path='/learn/2' element={<Learn3 />}></Route>
          <Route exact path='/widget' element={<Widget />}></Route>
          <Route exact path='/quiz' element={<Quiz />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
