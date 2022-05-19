import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import QAContainer from '../QAContainer/QAContainer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <p>Are you frequently asking yourself questions...?</p>
      <p>Well, get those questions out of your mind and onto the screen.</p>
      <p>
        The openAI assistant will hopefully be able to help you out in a small
        or big way...
      </p>
      <QAContainer />
      <Footer />
    </div>
  );
}

export default App;

// for reference:
// <header className="App-header">
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>
