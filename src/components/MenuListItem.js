import React from 'react';
import styled from 'styled-components';

const MainView = styled.View`
flex:1;
margin:10px;
padding:10px;
background-color:#ffffff;
border-radius:5px;
shadow-color: #000;
shadow-offset: {width: 1px, height: 1px};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation:1;
`;
const CardView = styled.View`
flex:1;
flex-direction:row;
`;
const ImageContainer = styled.View`
flex:1;
padding:5px;
align-items:center;
`;
const ImageView = styled.Image`
width:130px;
height:130px;
`;
const ContentContainer = styled.View`
flex:1;
padding:5px;
justify-content:center;
`;
const TitleView = styled.Text`
    font-size: 24px;
    color: #000000;
`;
const SizeView = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #000000;
    font-family:serif;
`;
const SubTitle = styled.Text`
    font-size: 20px;
    color: #808080;
`;
const ArchiveOnCloudScreen = ({ item, index }) => {
    return (
        <MainView >
            <CardView>
                <ImageContainer >
                    <ImageView source={item.logo}/>
                </ImageContainer>
                <ContentContainer >
                    <TitleView>{item.title}</TitleView>
                    <SizeView style={{ color: item.size.color }} >{item.size.size}</SizeView>
                    <SubTitle>{item.subtitle}</SubTitle>
                </ContentContainer>
            </CardView>
        </MainView>
    )
}
export default ArchiveOnCloudScreen;