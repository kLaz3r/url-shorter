import './App.css';
import Header from './components/Header';
import Statistics from './components/Statistics';
import Boost from './components/Boost';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Statistics></Statistics>
      <Boost></Boost>
      <Footer></Footer>
    </div>
  );
}

export default App;
