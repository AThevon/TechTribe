import './Reset.css';
import './App.css';
import Header from './components/Header.js'
import Aside from './components/Aside.js'
import Feed from './components/Feed.js'
import Input from './components/Input.js'
import Slider from './components/Slider.js'

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
