import About from './components/About';
import Experience from './components/Experience';
import Art from './components/Art';

function App() {
  return (
    <div className='container'>
      <About />
      <div className='details'>
        <Experience />
        <Art />
      </div>
    </div>
  );
}

export default App;
