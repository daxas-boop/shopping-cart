import React, {useState} from 'react';
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
    display:flex;
    justify-content:space-between;
    position:relative;
    align-item:flex-end;
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
    &:hover{
        cursor:pointer;
        transform:scale(1.2)
    }
`

const SelectQty = styled.div `
    display:flex;
    flex-direction:column;
`

const Card = (props) => {
    const [quantity, setQuantity] = useState('1')
    const {onClick, name, image, price} = props;

    return(
        <Container>
            <Image src={image} alt={name}></Image>
            <ItemName>{name}</ItemName>
            <Info>
                <ItemPrice>${price}</ItemPrice>
                <CartIcon onClick={() => onClick(quantity)} icon={faCartPlus} size='lg'></CartIcon>
                <SelectQty>
                    <label>Qty</label>
                    <select 
                    onChange={(e) => setQuantity(e.target.value)}
                    name="quantity">
                        <option value="1">1 </option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 </option>
                        <option value="6">6 </option>
                    </select> 
                </SelectQty>
            </Info>
        </Container>
    )
}

export default Card;