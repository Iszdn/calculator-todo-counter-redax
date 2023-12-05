import './App.css'
import CalculatorComponent from './features/calculator/Calculator'
import Counter from './features/Counter/Counter'
import Todos from './features/todo/Todo'
import Todo2 from './features/todo2/Todo2'

function App() {
  
  return (
    <>
     <CalculatorComponent></CalculatorComponent>
     <Todos></Todos>
     <Counter/>
     <Todo2/>
    </>
  )
}

export default App
