import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { descriptionAtom, titleAtom, todoAtom } from "../assets/store/atoms/atoms_todo_app";


export function CreateTodo(){
    const [title,settitle]= useRecoilState(titleAtom)
    const [description,setDescription] = useRecoilState(descriptionAtom)
    const [todo,setTodo] = useRecoilState(todoAtom)


    return <div>

        <input id="Title" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="Title" onChange={(e)=>{
            settitle(e.target.value)
        }} />

        <input type="text" style={{
            margin:10,
            padding:10
        }} id="Description" placeholder="Description" onChange={(e)=>{
            setDescription(e.target.value)
        }} />

        <button onClick={()=>{
            setTodo([...todo,{
                title : title,
                description:description
            }])
            console.log(todo)
        }}>Add Todo</button>

        
    
    </div>
}