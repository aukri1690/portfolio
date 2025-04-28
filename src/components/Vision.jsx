import styled from "styled-components";

const Header = styled.h2`
    font-size:40px;
    font-family:"Comic Sans MS";
    margin:70px 0px 0px 255px;
`;

const SubHeader = styled.h2`
    font-size:25px;
    font-family:"Comic Sans MS";
    margin:50px 0px 15px 215px;
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Strong = styled.strong`
    font-size:25px;
    margin:10px 0px 10px 225px;
`;

const Vision = () => {
    return (
        <>
        <Header>Vision</Header>
        <SubHeader>【目指したきっかけ】</SubHeader>
        <InfoContainer>
            <Strong>とあるWebアプリケーションゲームのUIに目を惹かれ、自身もユーザーを魅了</Strong>
            <Strong>するようなUIを開発したいと思い、フロントエンドエンジニアを目指すことを</Strong>
            <Strong>決意しました。</Strong>
        </InfoContainer>
        <SubHeader>【取り組みたいこと】</SubHeader>
        <InfoContainer>
            <Strong>楽しさや快適さを届けることによって人々の生活を豊かにできるサービスの</Strong>
            <Strong>開発に携わりたいです。ユーザー目線を大切した、直感的で使いやすいUIを</Strong>
            <Strong>開発することによってサービスの品質向上に貢献したいです。</Strong>
        </InfoContainer>
        </>

    );
};

export default Vision;