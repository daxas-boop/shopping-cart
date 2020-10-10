import React, { useContext } from 'react';
import { ItemsContext } from './ItemsContext';
import styled from '@emotion/styled';

const Container = styled.section `
    font-family:'Roboto';
    max-width:1080px;
    margin:0 auto;
    padding-top:64px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    min-height:80vh;
    @media (max-width: 768px) {
        grid-template-columns:1fr;
        grid-template-rows:3fr 1fr;
    }
`

const ShoppingCart = styled.section `
    grid-column:1/2;
    margin-top:45px;
`

const OrderSummary = styled.section `
    grid-column:2/3;
    background-color: #eee;
    margin-top:45px;
    text-align:center;
    display:flex; 
    flex-direction:column;
    justify-content:space-around;
    @media (max-width: 768px) {
        grid-column:1/2;
    }
`

const ItemContainer = styled.div `
    display:grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    justify-content:space-between;
    margin-top:35px;
    heigth:150px;
    min-height:40px;
    grid-column:1/6;
    position:relative;
    padding:5px 0;
    border-bottom:1px solid grey;
    border-top:1px solid grey;
    align-items:center;
`

const Title = styled.h2 `
    margin:0;
    font-size:20px;
`

const Subtitle = styled.h4 `
    margin:0;
    text-align:center;
    @media (max-width: 768px) {
        font-size:14px;
    }
`

const Header = styled.div `
    display:flex;
    justify-content:space-between;
    padding-bottom:20px;
    margin-right:45px;
    border-bottom:1px solid gray;
    @media (max-width: 768px) {
        margin-right:0
    }
`

const ProductDetails = styled.section `
    display:grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    margin-right:45px;
    margin-top:25px;
    @media (max-width: 768px) {
        margin-right:0
    }
`

const Button = styled.button `
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

const RemoveItem = styled.h4 `
    margin:0;
    text-align:center;
    color:grey;
    &:hover{
        color:black;
        cursor:pointer;
    }
    @media (max-width: 768px) {
        font-size:14px
    }
`

const Cart = () => {
    const [cartItems, setCartItems] = useContext(ItemsContext);

    const calculateTotalPrice = (accum, item) => {
       return accum + item.item.price * item.amount 
    }

    const removeItem = (removeItem) => {
        setCartItems(
            cartItems.filter( item =>  item !== removeItem )
        )
    }

    return (
        <Container>
            <ShoppingCart>
                <Header>
                    <Title>Shopping Cart</Title>
                    <Title>{cartItems.length} Items</Title>
                </Header>
                <ProductDetails>
                        <Subtitle >Product Details</Subtitle>
                        <Subtitle >Quantity</Subtitle>
                        <Subtitle >Price</Subtitle>
                        <Subtitle >Total</Subtitle>
                    {cartItems.map(item => (
                        <ItemContainer key= { item.item.name } >
                            <Subtitle> { item.item.name } </Subtitle>
                            <Subtitle> {item.amount} </Subtitle>
                            <Subtitle > 
                                ${ item.item.price } 
                            </Subtitle>
                            <Subtitle > 
                                ${ Number(item.item.price * item.amount).toFixed(2) } 
                            </Subtitle>
                            <RemoveItem
                                onClick={() => removeItem(item)}
                            > Remove </RemoveItem>
                        </ItemContainer>
                    ))}
                </ProductDetails>
            </ShoppingCart>
            <OrderSummary>
                <Header style={{margin:'0px 20px', textAlign:'center', display:'block'}}>
                    <Title>Order Summary</Title>
                </Header>
                <div>{cartItems.length} ITEMS</div>
                <div>TOTAL PRICE: $  
                { 
                    (cartItems.length === 1) ? cartItems[0].item.price * cartItems[0].amount :
                    cartItems.length > 1 ? (cartItems.reduce( calculateTotalPrice , 0)).toFixed(2) :'0'
                }
                </div>
                <Button>CHECKOUT</Button>
            </OrderSummary>
        </Container>
    )
}

export default Cart;
