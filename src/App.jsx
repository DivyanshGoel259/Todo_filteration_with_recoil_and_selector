import { RecoilRoot } from "recoil";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import { Filter } from "./components/Filter";


function App(){
  return <div>
    <RecoilRoot>
      <CreateTodo></CreateTodo>
      <Filter></Filter>
      <Todos></Todos>
      
    </RecoilRoot>

  </div>
}

export default App
