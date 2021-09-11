import styled from 'styled-components';

const BtnWrapper = styled.div`
    width : 100%;
    margin-top : 2rem;
    display : flex;
    flex-direction : column;
    align-items : center;
    
    div{
        width : 70%;
        height : 40px;
        margin-top : 0.5rem;
        display : flex;
        align-items : center;
        justify-content : center;

        &:hover{
            cursor : pointer;
        }
    }

    .loginBtn{
        background-color : lightblue;

        &:hover{
            background-color : skyblue;
        }
    }

    .joinBtn{
        background-color : gray;

        &:hover{
            background-color : darkgray;
        }
    }
`;
const LoginBtn = ({ id, pw }) =>{

    const onLoginSubmit = () =>{
        console.log(`id : ${id}`);
        console.log(`pw : ${pw}`);
    }

    const onJoin = () =>{
        console.log("회원가입");
    }

    return(
        <BtnWrapper>
            <div className="loginBtn" onClick={onLoginSubmit}>로그인</div>
            <div className="joinBtn" onClick={onJoin}>회원가입</div>
        </BtnWrapper>
    )
}

export default LoginBtn;