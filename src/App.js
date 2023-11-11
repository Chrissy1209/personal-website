import Header from './components/Header';
import sx from './App.module.sass';

function App() {

  return (
    <div className={sx.App}>
      <Header />

      <div className="body" style={{ height: '1000px' }}>
        {/* <About /> */}
        {/* <Contact /> */}
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
