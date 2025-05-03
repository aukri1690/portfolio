import styled from "styled-components";

const Header = styled.h2`
    font-size:50px;
    font-family:"Comic Sans MS";
    margin:140px 0px 0px 565px;
`;

const SubHeader = styled.h2`
    font-size:20px;
    margin:50px 0px 30px 435px;
`

const SubHeaderSecond = styled.h2`
    font-size:20px;
    margin:50px 0px 30px 420px;
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align:center;
`

const Strong = styled.strong`
    font-size:25px;
    margin:10px 0px 10px 90px;
`;

const Vision = () => {
    return (
        <>
        <Header>Vision</Header>
        <SubHeader>-フロントエンドエンジニアを目指したきっかけ-</SubHeader>
        <InfoContainer>
            <Strong>とあるWebアプリケーションゲームのUIに目を惹かれ</Strong>
            <Strong>自身もユーザーを魅了するようなUIを開発したいと思い、</Strong>
            <Strong>フロントエンドエンジニアを目指すことを決意しました。</Strong>
            <Strong></Strong>
        </InfoContainer>
        <SubHeaderSecond>-フロントエンドエンジニアとして取り組みたいこと-</SubHeaderSecond>
        <InfoContainer>
            <Strong>楽しさや快適さを届けることによって人々の生活を豊かにするサービスの</Strong>
            <Strong>開発に携わりたいです。ユーザー目線を大切にした、直感的で使いやすい</Strong>
            <Strong>UIを開発することによってサービスの品質向上に貢献したいです。</Strong>
            <Strong></Strong>
        </InfoContainer>
        </>

    );
};

export default Vision;