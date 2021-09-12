import React from 'react';
import styled from 'styled-components';
import { TodoListType } from '../pages/TodoList';
import TodoListItem from './TodoListItem';

const MainWrapper = styled.div`
    
    background-color : white;
    width : 500px;
    height : 700px;
    z-index : 1;
`;

interface Props {
    todoList : TodoListType;
    onItemRemove : (id : number)=> void;
}

const TodoListMain = ({ todoList, onItemRemove}: Props) =>{

    return(
        <MainWrapper>
            <div className = "title">{todoList.date.getFullYear()}년 {todoList.date.getMonth()}월 {todoList.date.getDate()}일</div>
            {todoList.item.map((v) =>{
                return( 
                <TodoListItem key={v.id} list={v} onItemRemove={onItemRemove}/>
            )})}
        </MainWrapper>
    )
}

export default TodoListMain;