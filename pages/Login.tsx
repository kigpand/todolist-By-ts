import styled from 'styled-components';
import Image from 'next/image';
import Background from '../images/background.jpg';

const LoginWrapper = styled.div`
    width : 100vw;
    height : 100vh;
    display : flex;
    align-items : center;
    justify-content : center;

    .image{
        width : 100%;
        height : 100%;
        position : relative;
        top : 0;
        left :0;
    }

    .loginForm{
        width : 500px;
        height : 70%;
        z-index : 2;
        position : absolute;
        background-color : white;
    }
`;
const Login = () =>{
    return(
        <LoginWrapper>
            <div  className="loginForm"></div>
            <div className="image">
                <Image src={Background} alt="배경" layout="fill"></Image>
            </div>
        </LoginWrapper>
    )
}

export default Login;