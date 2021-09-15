import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { todoListArray, TodoItemType } from '../recoil/recoil';
import TodoListDialog from './TodoListDialog';
import TodoListItem from './TodoListItem';
import { dummyArray } from '../pages/dummy';

const MainWrapper = styled.div`
    background-color : white;
    width : 500px;
    height : 700px;
    z-index : 1;
    display : flex;
    flex-direction : column;

    .line{
        margin : 1rem 0 0 1rem;
        width : 90%;
        height : 3px;
        background-color : lightgray;
    }

    .title{
        width : 80%;
        margin : 1rem 0 0 1rem;
        font-size : 1.2rem;
        font-weight : bold;
    }

`;

interface Props{
    onOpenDialog: () => void;
}

const TodoListMain = ({ onOpenDialog }: Props) =>{

    const [todoList, setTodoList] = useRecoilState(todoListArray);

    useEffect(()=>{
        setTodoList({ date : new Date(), item : [...dummyArray] });
    },[]);

    const onItemRemove = (id : number): void =>{
        const result: TodoItemType[] = todoList.item.filter((item) => item.id !== id)
        setTodoList({ date : todoList.date, item : [...result] });
    }


    return(
        <MainWrapper>
            <div className = "title">{todoList.date.getFullYear()}년 {todoList.date.getMonth()}월 {todoList.date.getDate()}일</div>
            <div className = "line" />
            {todoList.item.map((v) =>{
                return( 
                <TodoListItem key={v.id} list={v} onItemRemove={onItemRemove}/>
            )})}
            <div className="addBtn" onClick={onOpenDialog}>더하기</div>
        </MainWrapper>
    )
}

export default TodoListMain;