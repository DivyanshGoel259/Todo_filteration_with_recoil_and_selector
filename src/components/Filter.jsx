import { useRecoilState } from "recoil";
import { filterAtom } from "../assets/store/atoms/atoms_todo_app";


export function Filter(){
    const [filter , setFitler] = useRecoilState(filterAtom)

    return <div>
        <input type="text" style={{
            margin:10,
            padding:10
        }} placeholder="Write filter" onChange={(e)=>{
            setFitler(e.target.value)
        }} />
    </div>
}