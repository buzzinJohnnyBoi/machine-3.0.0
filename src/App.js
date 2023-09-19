import './App.css';
import Page from './components/main';

const fs = require('fs');

function App() {
  const content = fs.readFileSync('C:\\Users\\User\\Documents\\hello.txt', 'utf-8');
  console.log(content);

  return (
    <div className="App">
      <header className="App-header">
        <Page />
        {content}
      </header>
    </div>
  );
}

export default App;
