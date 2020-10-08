import React from 'react'
import styled from '@emotion/styled';
import mainImage from './images/mainHome.jpg';
import WidgetImg1 from './images/Widget-1.png';
import WidgetImg2 from './images/Widget-2.png';
import WidgetImg3 from './images/Widget-3.png';
import { Link } from 'react-router-dom'
import { keyframes } from '@emotion/core';

const MainContainer = styled.section `
    background-image:url(${mainImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height:100vh;
    height:700px;
    font-family:'Roboto';
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    
`

const WidgetContainer = styled.section `
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
`

const Widget = styled.article `
    margin-top:5px;
    flex: 0 0 33%;
    max-width:33%;
    display:flex;
    overflow:hidden;
    position:relative;

    @media (max-width: 768px) {
        flex: 0 0 50%;
        max-width:50%;
    }

    @media (max-width: 576px) {
        flex: 0 0 95%;
        max-width:95%;
    }
`

const Image = styled.img `
    max-width: 100%;
    transition: transform .5s ease;
    &:hover{
        transform:scale(1.1)
    }
`

const bounce = keyframes `
    0%{top:50%}
    40%{top:50%}
    43%{top:48%}
    46%{top:50%}
    48%{top:49%}
    50%{top:50%}
    100%{top:50%;}
`

const Button = styled(Link) `
    text-align:center;
    padding:0.5em 1.2em;
    background-color:#CFA38C;
    border:0.1em solid #CFA38C;
    font-family:'Roboto';
    font-size:18px;
    font-weight:400;
    transition: all 0.2s;
    color:#F0EFEB;
    margin:0 auto;
    &:hover{
        color:#000000;
        background-color:#BF855F;
        border:0.1em solid #BF855F;
        cursor:pointer
    }
    &:active,&:focus{
        outline:none
    }
`

const AnimatedButton = styled(Button) `
    animation: ${bounce} 5s infinite linear;
    animation-iteration-count:3;
    position:absolute;
    top:50%;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.2s;
`

const Title = styled.h2 `
    font-size:64px;
    margin-top:10px;
    letter-spacing:5px;
    @media (max-width: 768px) {
        font-size:48px;
    }
`

const Subtitle = styled.h4 `
    font-size:24px;
    letter-spacing:8px
`

const Banner = styled.article `
    margin-left:2em;
    margin-right:2em;
    max-width:40%;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        max-width:100%;
    }
`

const Home = () => {
    return (
        <>
        <MainContainer>
            <Banner>
                <Subtitle>Winter Fashion</Subtitle>
                <Title>Fashion Collection 2019</Title>
                <Button to={{ pathname: '/shop', items:'all'}}>Buy here</Button>
            </Banner>
        </MainContainer> 
        <WidgetContainer>
            <Widget>
                <Image src={WidgetImg1} alt=''></Image>
                <AnimatedButton to={{ pathname: '/shop', items:'shoes'}}>Shoes</AnimatedButton>
            </Widget>
            <Widget>
                <Image src={WidgetImg2} alt=''></Image>
                <AnimatedButton to={{ pathname: '/shop', items:'men'}}>Men's Clothes</AnimatedButton>
            </Widget>
            <Widget>
                <Image src={WidgetImg3} alt=''></Image>
                <AnimatedButton to={{ pathname: '/shop', items:'women'}}>Women's Clothes</AnimatedButton>
            </Widget>
        </WidgetContainer>
        </>
    )
}

export default Home;