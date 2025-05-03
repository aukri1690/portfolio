import styled from "styled-components";
import icon from "../images/icon.jpg";

const Header = styled.h2`
    font-size:50px;
    font-family:"Comic Sans MS";
    margin:50px 0px 50px 560px;
`;

const ProfileContainer = styled.div`
    display: flex;
    align-items:flex-start;
`;

const Img = styled.img`
    width:220px;
    height:220px;
    border-radius:50%;
    margin:20px 40px 0px 220px;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin:15px 0px 0px 0px;
`;

const Strong = styled.strong`
    font-size:25px;
    margin:0px 0px 10px 40px;
`;

const Profile = () => {
    return (
        <>
        <Header>Profile</Header>
        <ProfileContainer>
            <Img src={icon}/>
            <InfoContainer>
            <Strong>永田浬久(ながたりく)</Strong>
            <Strong>2005年1月16日生まれ。愛知県小牧市出身。</Strong>
            <Strong>学歴：名古屋市立大学 データサイエンス学部</Strong>
            <Strong>志望：フロントエンドエンジニア</Strong>
            <Strong>連絡先：c230054@ed.nagoya-cu.ac.jp</Strong>
            </InfoContainer>
        </ProfileContainer>
        </>
    );
};

export default Profile;