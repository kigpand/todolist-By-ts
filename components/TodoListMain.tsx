import styled from 'styled-components';

const MainWrapper = styled.div`
    
    background-color : white;
    width : 500px;
    height : 700px;
    z-index : 1;
`;
const TodoListMain = () =>{
    return(
        <MainWrapper>투두리스트 메인</MainWrapper>
    )
}

export default TodoListMain;