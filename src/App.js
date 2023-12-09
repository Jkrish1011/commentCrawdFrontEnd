import { useContext } from 'react'
import { commentCrawdContext } from './context/Firebase/BaseContext';
function App() {
  const { handleUserAuth } =  useContext(commentCrawdContext);

  return (
    <div className="App">
      <button onClick={handleUserAuth}>
        Login
      </button>
    </div>
  );
}

export default App;
