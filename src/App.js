import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import sx from './App.module.sass';

function App() {

  return (
    <div className={sx.App}>
      <Header />

      <div className="body">
        <About />
      </div>

      <Footer />
    </div>
  );
}

export default App;
