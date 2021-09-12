import styled from 'styled-components';
import TodoListMain from '../components/TodoListMain';
import TodoListSub from '../components/TodoListSub';
import BACKGROUND from '../images/background.jpg';
import Image from 'next/image';
import { dummyArray } from './dummy';
import { useState } from 'react';

const TodoWrapper = styled.div`
    width : 100vw;
    height : 100vh;

    .background{
        position: absolute;
        top: 0;
        left : 0;
        width : 100%;
        height : 100%;
        opacity : 0.7;
    }

    .main{
        width : 100%;
        height : 100%;
        display : flex;
        align-items : center;
        justify-content : center;
    }
`;

export interface TodoItemType {
    id : number;
    content : string;
}

export interface TodoListType {
    date : Date;
    item : TodoItemType[];
}

const TodoList = () =>{

    const [todoList, setTodoList] = useState<TodoListType>({ date : new Date(), item : [...dummyArray]});

    const onItemRemove = (id : number): void =>{
        const result: TodoItemType[] = todoList.item.filter((item) => item.id !== id)
        setTodoList({ date : todoList.date, item : [...result] });
    }

    return(
        <TodoWrapper>
            <div className="background">
                <Image src={BACKGROUND} alt = "배경" layout="fill"/>
            </div>
            <div className="main">
                <TodoListMain todoList = {todoList} onItemRemove ={onItemRemove}/>
                <TodoListSub />
            </div>
        </TodoWrapper>
    )
}

export default TodoList;