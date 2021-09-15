import styled from 'styled-components';
import TodoListMain from '../components/TodoListMain';
import TodoListSub from '../components/TodoListSub';
import BACKGROUND from '../images/background.jpg';
import Image from 'next/image';
import TodoListDialog from '../components/TodoListDialog';
import { useState } from 'react';

const TodoWrapper = styled.div`
    width : 100vw;
    height : 100vh;
    font-family: 'HSYuji-Regular';
    position : relative;

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
            <div className="background">
                <Image src={BACKGROUND} alt = "배경" layout="fill"/>
            </div>
            <div className="main">
                <TodoListMain onOpenDialog={onOpenDialog} />
                <TodoListSub />
            </div>
        </TodoWrapper>
    )
}

export default TodoList;