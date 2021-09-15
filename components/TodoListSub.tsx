import styled from 'styled-components';

const SubStyled = styled.div`
    width : 500px;
    height : 700px;
    background-color : #EDFF75;
    z-index : 1;
`;
const TodoListSub = () =>{
    return(
        <SubStyled>투두리스트 서브</SubStyled>
    )
}

export default TodoListSub;