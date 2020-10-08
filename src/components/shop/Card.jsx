import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div `
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin: 5px;
    padding: 15px;
    width:200px;
    height:300px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

const Info = styled.div `
    height:80px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    text-align:center;
    position:relative;
`

const Image = styled.img `
    width:200px;
    height:180px;
`

const ItemName = styled.h3 `
    font-size:20px;
    margin:0;
`

const ItemPrice = styled.h4 `
    margin:0;
    font-weight:200;
`

const CartIcon = styled(FontAwesomeIcon) `
    color:green;
    position:absolute;
    bottom:0;
    right:0;
    &:hover{
        cursor:pointer;
        transform:scale(1.2)
    }
`

const Card = (props) => {
    const {name, image, price} = props;

    return(
        <Container>
            <Image src={image} alt={name}></Image>
            <Info>
                <ItemName>{name}</ItemName>
                <ItemPrice>{price}</ItemPrice>
                <CartIcon icon={faCartPlus} size='lg'></CartIcon>
            </Info>
        </Container>
    )
}

export default Card;