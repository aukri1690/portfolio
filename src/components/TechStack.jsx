import styled from "styled-components";
import vite from "../images/vite.svg";
import react from "../images/react.svg";
import javascript from "../images/javascript.svg";
import styledcomponents from "../images/styledcomponents.png";

const Header = styled.h2`
    font-size:45px;
    font-family:"Comic Sans MS";
    margin:140px 0px 0px 530px;
`;

const P = styled.p`
    font-size:17px;
    margin:20px 0px 50px 455px;
`;

const StackContainer = styled.div`
    display:flex;
    flex-direction:row;
    margin:0px 0px 0px 120px;
`;

const SetContainer = styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;
    margin:0px 0px 0px 100px;
`;

const Strong = styled.strong`
    font-size:20px;
    font-family:"Comic Sans MS";
`;

const Img = styled.img`
    width:130px;
    height:130px;
    margin:8px 0px 0px 3px;
`;

const TechStack = () => {
    return (
        <>      
            <Header>TechStack</Header>
            <P>-このサイトは以下の技術スタックで構成されています-</P>
            <StackContainer >
            <SetContainer>
                <Img src = {javascript}/> 
                <Strong>言語</Strong>
                <Strong>JavaScript</Strong>                                           
            </SetContainer>
            <SetContainer>
                <Img src = {react}/> 
                <Strong>ライブラリ</Strong> 
                <Strong>React</Strong>                        
            </SetContainer>
            <SetContainer> 
                <Img src = {vite}/>   
                <Strong>ビルドツール</Strong>
                <Strong>vite</Strong>                     
            </SetContainer> 
            <SetContainer> 
                <Img src = {styledcomponents}/> 
                <Strong>スタイリング</Strong>
                <Strong>styled-components</Strong>               
            </SetContainer>
            </StackContainer>
        </>
    );
};

export default TechStack;