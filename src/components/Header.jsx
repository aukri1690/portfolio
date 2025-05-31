import styled from "styled-components";
import { Link } from 'react-scroll'; 
import zenn from "../images/zenn.png";

const HeaderContainer = styled.div`
    display: flex;
    align-items:stretch;
    font-family:"Comic Sans MS";
`;

const Title = styled.h2`
    font-size:36px;
    margin-left:70px;
`;

const IntroduceContainer = styled.div`
    display:flex;
    margin-left:470px;
`

const Introduce = styled.h3`
    font-size:30px;
    margin-left:60px;
    cursor: pointer;
`;

const Img = styled.img`
    width:120px;
    height:30px;
    margin:37px 0px 0px 40px;
`;

const Header = () => {
    return (
        <HeaderContainer>
        <Title>R.Nagata</Title>
        <IntroduceContainer>
            <Link to="profile" smooth={true} duration={500}>
                <Introduce>Profile</Introduce>
            </Link>
            <Link to="techstack" smooth={true} duration={500}>
                <Introduce>TechStack</Introduce>
            </Link>
            <a href="https://zenn.dev/aukri1690" target="_blank" rel="noopener noreferrer">
                <Img src={zenn}/>
            </a>
        </IntroduceContainer>
        </HeaderContainer>
    );
};

export default Header;