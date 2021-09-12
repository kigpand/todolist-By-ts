import {  TodoItemType } from '../pages/TodoList';
import styled from 'styled-components';

interface Props {
    list : TodoItemType;
    onItemRemove : (id : number)=> void;
}

const ItemWrapper = styled.div`
    display : flex;
    justify-content : space-around;

    .closeBtn{
        &:hover{
            cursor : pointer;
        }
    }
`;
const TodoListItem = ({ list, onItemRemove }: Props) =>{

    return(
        <ItemWrapper>
            <div className="content">{list.content}</div>
            <div className="closeBtn" onClick={()=>onItemRemove(list.id)}>닫기</div>
        </ItemWrapper>
    )
}

export default TodoListItem;