import styled from 'styled-components';
import TodoListMain from '../components/TodoListMain';
import TodoListSub from '../components/TodoListSub';
import BACKGROUND from '../images/background.jpg';
import Image from 'next/image';

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
const TodoList = () =>{
    return(
        <TodoWrapper>
            <div className="background">
                <Image src={BACKGROUND} alt = "배경" layout="fill"/>
            </div>
            <div className="main">
                <TodoListMain />
                <TodoListSub />
            </div>
        </TodoWrapper>
    )
}

export default TodoList;