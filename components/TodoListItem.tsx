import styled from 'styled-components';
import { TodoItemType } from '../recoil/recoil';

interface Props {
    list : TodoItemType;
    onItemRemove : (id : number)=> void;
}

const ItemWrapper = styled.div`
    width : 80%;
    display : flex;
    margin : 1rem 0 0 1rem;
    
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