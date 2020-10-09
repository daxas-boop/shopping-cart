import Jordan1 from './images/Jordan-1.jpg'
import KobeProto5 from './images/Nike-Kobe-5-Protro.jpg'
import TopstypeWomen from './images/TopstypeWomen.jpg'
import UnderArmorMen from './images/UnderArmorMen.jpg'

const shopItems = {
    shoes:[
        {
            name:'Nike Air Jordan 1 ',
            price:320,
            image: Jordan1
        },
        {
            name:'Nike Kobe 5 Protro Chaos',
            price:410,
            image:KobeProto5
        }
    ],

    men:[
        {
            name:'Under Armour Men\'s Tech 2.0',
            price:16.24,
            image:UnderArmorMen
        }
    ],

    women:[
        {
            name:'Topstype Women\'s Fall Color Block',
            price:18.98,
            image:TopstypeWomen
        }
    ]
}

export default shopItems;