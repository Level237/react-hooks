import  { useCallback, useState } from 'react'
import Todo from '../../../components/Todo';

export default function TodoPage() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState<string[]>([]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
    const addTodo = useCallback(() => {
      setTodos((t) => [...t, "New Todo"]);
    }, [todos]);
  return (
    <div>
      <Todo todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}
