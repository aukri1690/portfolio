import styled from "styled-components";
import vite from "../images/vite.svg";
import react from "../images/react.svg";
import javascript from "../images/javascript.svg";
import styledcomponents from "../images/styledcomponents.png";

const HeaderContainer = styled.div`
    display:flex;
`

const P = styled.p`
    font-size:17px;
    margin:73px 0px 0px 23px;
`

const Header = styled.h2`
    font-size:35px;
    font-family:"Comic Sans MS";
    margin:60px 0px 0px 230px;
`;

const TechStackContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin:40px 0px 0px 235px;
`;


const SetContainer = styled.div`
    display:flex;
`

const Strong = styled.strong`
    font-size:30px;
    font-family:"Comic Sans MS";
    margin:5px 0px 10px 0px;
`;

const Img = styled.img`
    width:40px;
    height:40px;
    margin:8px 0px 0px 3px;
`;

const TechStack = () => {
    return (
        <>
        <HeaderContainer>
        <Header>TechStack</Header>
        <P>-このサイトは以下の技術スタックで構成されています-</P>
        </HeaderContainer>
        <TechStackContainer>
            <SetContainer>
                <Strong>言語:JavaScript</Strong>    
                <Img src = {javascript}/>                          
            </SetContainer>
            <SetContainer>
                <Strong>ライブラリ:React</Strong>  
                <Img src = {react}/>                          
            </SetContainer>
            <SetContainer>    
                <Strong>スタイリング:styled-components</Strong>         
                <Img src = {styledcomponents}/>             
            </SetContainer>
            <SetContainer>  
                <Strong>ビルドツール:vite</Strong>            
                <Img src = {vite}/>              
            </SetContainer>
        </TechStackContainer>
        </>
    );
};

export default TechStack;