import Jordan1 from './images/Jordan-1.jpg'
import KobeProto5 from './images/Nike-Kobe-5-Protro.jpg'
import TopstypeWomen from './images/TopstypeWomen.jpg'
import UnderArmorMen from './images/UnderArmorMen.jpg'
import SkinnyStretch from './images/SkinnyStretch.jpg'
import BottomSweatpants from './images/bottom_sweatpants.jpg'
import SummerWomen from './images/summer_women.jpg'
import LongSleeve from './images/long_sleeve.jpg'
import CompressionShorts from './images/compression_shorts.jpg'
import Dockers from './images/dockers.jpg'
import Cloudfoam from './images/cloudfoam.jpg'
import GrandCourt from './images/grand_court.jpg'

const shopItems = {
    shoes:[
        {
            name:'Nike Air Jordans 1',
            price:324.99,
            image: Jordan1
        },
        {
            name:'Nike Kobe 5 Protro Chaos',
            price:198,
            image:KobeProto5
        },
        {
            name:'Cloudfoam Pure Running Shoe',
            price:31.71,
            image:Cloudfoam
        },
        {
            name:'Grand Court Sneaker',
            price:26.22,
            image:GrandCourt
        }
    ],

    men:[
        {
            name:'Under Armour Men\'s Tech 2.0',
            price:16.24,
            image:UnderArmorMen
        },
        {
            name:'Long Sleeve Beefy Henley Shirt',
            price:9.97,
            image:LongSleeve
        },
        {
            name:'Compression Pants Shirt Top',
            price:38.99,
            image:CompressionShorts
        },
        {
            name:'Dockers Men\'s Perfect Short',
            price:11.99,
            image:Dockers
        }
    ],

    women:[
        {
            name:'Topstype Women\'s Fall Color Block',
            price:18.98,
            image:TopstypeWomen
        },
        {
            name:'Skinny Stretch Pull-On Knit Jegging',
            price:14.01,
            image:SkinnyStretch
        },
        {
            name:'Bottom Sweatpants Pockets',
            price:17.99,
            image:BottomSweatpants
        },
        {
            name:'Summer Women Short Sleeve',
            price:23.99,
            image:SummerWomen
        }
    ]
}

export default shopItems;