
import './App.css'
import Gallery from './components/Gallery'
import TodoList from './components/ToodoList'

function App() {


  return (
   
      <div className='p-4'>
        <h1 className='text-7xl font-bold text-center'>Learning React</h1>
        <h2 className="text-2xl">1.Your First Component</h2>
        <Gallery/>
        <h2>To Do List</h2>
        <TodoList/>
      </div>
   
  )
}

export default App
