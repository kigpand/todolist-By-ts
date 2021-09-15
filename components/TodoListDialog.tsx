import styled from 'styled-components';

const DialogWrapper = styled.div`
    position : absolute;
    background-color : rgba(0,0,0,0.4);
    width : 100%;
    height : 100%;
    top: 0;
    left: 0;
    z-index : 2;
    display : flex;
    align-items: center;
    justify-content : center;

    .body{
        width: 300px;
        height : 200px;
        border-radius : 20px;
        background-color : white;

        .header{
            border-radius : 20px 20px 0 0;
            height: 30px;
            background-color : #EDFF75;
            display : flex;
            align-items : center;
            padding-left : 1rem;
        }

        .main{
            height : 170px;
            display : flex;
            flex-direction : column;
            align-items: center;
            justify-content : center;

            .inputer { 
                width : 80%;
                height : 30px;
                outline : none;
            }
        }
    }
`;

interface Props{
    onCloseDialog: () => void;
}

const TodoListDialog = ({ onCloseDialog } : Props) =>{
    return(
        <DialogWrapper>
            <div className="body">
                <div className="header">추가 하실 내용을 입력해주세요!</div>
                <div className="main">
                    <input className="inputer" type = "text" />
                    <div className="btns">
                        <span>완료</span>
                        <span onClick={onCloseDialog}>취소</span>
                    </div>
                </div>
            </div>
        </DialogWrapper>
    )
}

export default TodoListDialog;