import styled from "styled-components";
import { Link } from 'react-scroll'; 

const HeaderContainer = styled.div`
    display: flex;
    align-items:stretch;
    font-family:"Comic Sans MS";
`;

const Title = styled.h2`
    font-size:36px;
    margin-left:100px;
`;

const IntroduceContainer = styled.div`
    display:flex;
    margin-left:350px;
`

const Introduce = styled.h3`
    font-size:30px;
    margin-left:80px;
    cursor: pointer;
`

const Header = () => {
    return (
        <HeaderContainer>
        <Title>R.Nagata</Title>
        <IntroduceContainer>
            <Link to="profile" smooth={true} duration={500}>
                <Introduce>Profile</Introduce>
            </Link>
            <Link to="techstack" smooth={true} duration={500}>
                <Introduce>Tech Stack</Introduce>
            </Link>
            <Link to="vision" smooth={true} duration={500}>
                <Introduce>Vision</Introduce>
            </Link>
        </IntroduceContainer>
        </HeaderContainer>
    );
};

export default Header;