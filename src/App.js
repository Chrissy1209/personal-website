import Header from './components/Header';
import About from './components/About';
import sx from './App.module.sass';

function App() {

  return (
    <div className={sx.App}>
      <Header />

      <div className="body">
        <About />
        {/* <Contact /> */}
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
