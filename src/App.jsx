import './Reset.css';
import './App.css';
import Header from './components/Header.jsx'
import Aside from './components/Aside.jsx'
import Feed from './components/Feed.jsx'
import Input from './components/Input.jsx'
import Slider from './components/Slider.jsx'

function App() {
  return (
    <section className='main-section'>
      <div className="bg-gradient"></div>
    <Header/>
    <Aside/>
    <Input/>
    <Slider/>
    <Feed/>
    </section>
  );
}

export default App;
