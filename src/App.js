import './App.css';

import Operation from './components/Operation'
import Result from './components/Result'

function App() {
  return (
    <div className='App'>
      <h1>Treino de Redux</h1>
      <div className='linha'>
        <Operation/>
        <Result/>
      </div>
    </div>
  )
}

export default App;
