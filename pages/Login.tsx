import styled from 'styled-components';
import LoginInput from '../components/LoginInput';
import LoginBtn from '../components/LoginBtn';
import { useEffect, useState } from 'react';

const LoginWrapper = styled.div`
    width : 100vw;
    height : 100vh;
    display : flex;
    align-items : center;
    justify-content : center;

    .loginForm{
        width : 450px;
        height : 600px;
        border-radius : 8px;
        box-shadow: 0px 0px 29px -2px #000000;
        background-color : rgb(225, 179, 0);
        color : white;
        font-family: 'HSYuji-Regular';
        display : flex;
        flex-direction: column;
        align-items: center;

        .title{
            font-size : 3rem;
            margin-top : 3rem;
        }

        .otherLogin{
            margin : 3rem 0;
            font-size : 2rem;
        }
    }
`;
const Login = () =>{

    const [id, setId] = useState<string>();
    const [pw, setPw] = useState<string>();

    const onSetId = (id: string) =>{
        setId(id);
    }

    const onSetPw = (pw: string) =>{
        setPw(pw);
    }

    return(
        <LoginWrapper>
            <div className="loginForm">
                <div className="title">WelCome!</div>
                <div className="otherLogin">Other</div>
                <LoginInput onSetId={onSetId} onSetPw={onSetPw}/>
                <LoginBtn id={id} pw={pw}/>
            </div>
        </LoginWrapper>
    )
}

export default Login;