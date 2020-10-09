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
`

const ItemContainer = styled.div `
    display:grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    justify-content:space-between;
    margin-top:35px;
    heigth:150px;
    grid-column:1/5;
`

const Title = styled.h2 `
    margin:0;
    font-size:20px;
`

const Subtitle = styled.h4 `
    margin:0;
`

const Header = styled.div `
    display:flex;
    justify-content:space-between;
    padding-bottom:20px;
    margin-right:45px;
    border-bottom:1px solid gray;
`

const ProductDetails = styled.section `
    display:grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    margin-right:45px;
    margin-top:25px;
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

const Cart = () => {
    const [cartItems] = useContext(ItemsContext);

    const calculateTotalPrice = (accum, item) => {
       return accum + item.item.price * item.amount 
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
                        <Subtitle style={{textAlign:'center'}}>Price</Subtitle>
                        <Subtitle style={{textAlign:'end'}}>Total</Subtitle>
                    {cartItems.map(item => (
                        <ItemContainer key= { item.item.name } >
                            <Subtitle> { item.item.name } </Subtitle>
                            <Subtitle> {item.amount} </Subtitle>
                            <Subtitle style={{textAlign:'center'}}> 
                                ${ item.item.price } 
                            </Subtitle>
                            <Subtitle style={{textAlign:'end'}}> 
                                ${ Number(item.item.price * item.amount).toFixed(2) } 
                            </Subtitle>
                        </ItemContainer>
                    ))}
                </ProductDetails>
            </ShoppingCart>
            <OrderSummary>
                <Header style={{margin:'0px 20px', textAlign:'center', display:'block'}}>
                    <Title>Order Summary</Title>
                </Header>
                <div>ITEMS {cartItems.length}</div>
                <div>TOTAL PRICE:$ 
                { 
                    (cartItems.length === 1) ? cartItems[0].item.price * cartItems[0].amount :
                    cartItems.length > 1 ? cartItems.reduce( calculateTotalPrice , 0) :'0'
                }
                </div>
                <Button>CHECKOUT</Button>
            </OrderSummary>
        </Container>
    )
}

export default Cart;