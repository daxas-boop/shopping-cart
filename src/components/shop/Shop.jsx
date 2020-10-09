import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import shopItems from './shop-items';
import Card from './Card';
import { ItemsContext } from '../ItemsContext';

const Container = styled.section `
    padding-top: 64px;
    display:grid;
    grid-template-columns:1fr 3fr;
    font-family:'Roboto';
`

const ItemsContainer = styled.section `
    display:flex;
    flex-wrap:wrap;
`

const Categories = styled.section `
    display:flex;
    flex-direction:column;
    justify-self:center;
`

const Title = styled.h2 `
    letter-spacing:2px;
    font-weight:400;
`

const Subtitle = styled.p `
    font-weight:200;
    &:hover{
       font-weight:400;
       cursor:pointer
    }
`


const Shop = (props) => {
    const [showItems, setShowItems] = useState(props.location.items || 'all')
    const [cartItems, setCartItems] = useContext(ItemsContext);
    const allItems = shopItems.men.concat(shopItems.women, shopItems.shoes)

    const handleAddItemCart = (item, quantity) => {
        const cartItem = {
            item: item,
            amount: quantity
        }
        
        setCartItems([...cartItems, cartItem]);
    }

    return (
        <Container>
            <Categories>
                <Title>CATEGORIES</Title>
                    <Subtitle
                        onClick={() => setShowItems('all')}
                    >All 
                    </Subtitle>
                    <Subtitle
                        onClick={() => setShowItems('men')}
                    >Men's Clothes
                    </Subtitle>
                    <Subtitle
                        onClick={() => setShowItems('women')}
                    >Women's Clothes
                    </Subtitle>
                    <Subtitle
                        onClick={() => setShowItems('shoes')}
                    >Shoes</Subtitle>
            </Categories>
            <ItemsContainer>
                {showItems !== 'all' ?
                    shopItems[showItems].map(item => (
                        <Card
                            key={item.name}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            onClick={ (quantity) => handleAddItemCart(item,quantity)}
                        />
                )) :
                    allItems.map(item => (
                        <Card
                            key={item.name}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            onClick={ (quantity) => handleAddItemCart(item, quantity)}
                        />
                ))}
           </ItemsContainer>
        </Container>
    )
}

export default Shop;