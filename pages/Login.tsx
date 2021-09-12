import styled from 'styled-components';
import LoginInput from '../components/LoginInput';
import LoginBtn from '../components/LoginBtn';
import BACKGROUND from '../images/background.jpg';
import Image from 'next/image';
import {  useState } from 'react';

export type LoginType = {
    id : string,
    pw : string
}

const LoginWrapper = styled.div`
    width : 100vw;
    height : 100vh;
    display : flex;
    align-items : center;
    justify-content : center;

    .background{
        position: absolute;
        top: 0;
        left : 0;
        width : 100%;
        height : 100%;
        opacity : 0.7;
    }

    .loginForm{
        width : 450px;
        height : 600px;
        border-radius : 8px;
        box-shadow: 0px 0px 29px -2px #000000;
        background-color : black;
        color : white;
        font-family: 'HSYuji-Regular';
        display : flex;
        flex-direction: column;
        align-items: center;
        z-index : 1;

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

    const [loginInfo, setLoginInfo] = useState<LoginType>({ id: null, pw: null});

    const onSetId = (id: string) =>{
        setLoginInfo({ id : id, pw: loginInfo.pw });
    }

    const onSetPw = (pw: string) =>{
        setLoginInfo({ id: loginInfo.id, pw: pw });
    }

    return(
        <LoginWrapper>
            <div className="background">
                <Image src={BACKGROUND} alt = "배경" layout="fill"/>
            </div>
            <div className="loginForm">
                <div className="title">WelCome!</div>
                <div className="otherLogin">Other</div>
                <LoginInput onSetId={onSetId} onSetPw={onSetPw}/>
                <LoginBtn loginType = {loginInfo} />
            </div>
        </LoginWrapper>
    )
}

export default Login;