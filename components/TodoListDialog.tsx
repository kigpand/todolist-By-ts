import styled from 'styled-components';

const DialogWrapper = styled.div`
    top : 0;
    left : 0;
    z-index : 10;
    position : absolute;
    background-color : rgba(0,0,0,0.4);
    width : 100vw:
    height : 100vh;
`;

interface Props{
    onCloseDialog: () => void;
}

const TodoListDialog = ({ onCloseDialog }: Props) =>{
    return(
        <DialogWrapper>
            <div onClick={onCloseDialog}>취소</div>
        </DialogWrapper>
    )
}

export default TodoListDialog;