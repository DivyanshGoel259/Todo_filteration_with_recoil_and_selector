import { useRecoilValue } from "recoil";
import { filteredTodosSelector, todoAtom } from "../assets/store/atoms/atoms_todo_app";


export function Todos(){
    const filteredTodos = useRecoilValue(filteredTodosSelector)
    return <div>
        {filteredTodos.map((todo)=>{
            return <Todo title = {todo.title} description={todo.description}></Todo>
        })}
    </div>
}

function Todo({title,description}){

    return <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
    </div>
}