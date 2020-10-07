import React from 'react'
import styled from '@emotion/styled';
import mainImage from '../assets/images/mainHome.jpg';
import WidgetImg1 from '../assets/images/Widget-1.png';
import WidgetImg2 from '../assets/images/Widget-2.png';
import WidgetImg3 from '../assets/images/Widget-3.png';

const MainContainer = styled.section `
    background-image:url(${mainImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height:600px;
`

const WidgetContainer = styled.section `
    padding: 10px 0;
    display:flex;
    flex-wrap:wrap;
    background-color:#D5AF9A;
    height:250px;
`

const Widget = styled.article `
    height:250px;
    flex-grow:1;
    text-align:center;
`

const Image = styled.img `
    width: 400px;
    max-height:250px;
    margin: 0 5px;
`

const Home = () => {

    return (
        <>
        <MainContainer>
            <div>Buy Here!</div>
        </MainContainer> 
        <WidgetContainer>
            <Widget>
                <Image src={WidgetImg1} alt=''></Image>
            </Widget>
            <Widget>
                <Image src={WidgetImg2} alt=''></Image>
            </Widget>
            <Widget>
                <Image src={WidgetImg3} alt=''></Image>
            </Widget>
        </WidgetContainer>
        </>
    )
}

export default Home;