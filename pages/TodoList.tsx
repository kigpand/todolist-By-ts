import styled from 'styled-components';
import TodoListMain from '../components/TodoListMain';
import TodoListSub from '../components/TodoListSub';
import TodoListDialog from '../components/TodoListDialog';
import { useState } from 'react';

const TodoWrapper = styled.div`
    width : 100vw;
    height : 100vh;
    font-family: 'HSYuji-Regular';

    .main{
        width : 100%;
        height : 100%;
        display : flex;
        flex-direction : column;
        align-items : center;
        justify-content : center;
    }
`;

const TodoList = () =>{

    const [dialog, setDialog] = useState<boolean>(false);

    const onOpenDialog = () =>{
        setDialog(true);
    }

    const onCloseDialog = () =>{
        setDialog(false);
    }

    return(
        <TodoWrapper>
            { dialog && <TodoListDialog onCloseDialog={onCloseDialog} />}
            <div className="main">
                <TodoListSub />
                <TodoListMain onOpenDialog={onOpenDialog} />
            </div>
        </TodoWrapper>
    )
}

export default TodoList;