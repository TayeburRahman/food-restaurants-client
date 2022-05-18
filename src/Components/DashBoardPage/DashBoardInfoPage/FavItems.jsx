import React from 'react';
import FavItemCart from './FavItemCart';
import dashFavPic1 from '../../../utility/dashFavPic1.jpg';
import dashFavPic2 from '../../../utility/dashFavPic2.jpg';
import dashFavPic3 from '../../../utility/dashFavPic3.jpg';
import dashFavPic4 from '../../../utility/dashFavPic4.jpg';
import dashFavPic5 from '../../../utility/dashFavPic5.jpg';

const FavItems = () => {
    const favData = [
        {
            img : dashFavPic1,
            like : "256",
            title : " Spicy Cutlet",
            rating : 254
        },
        {
            img : dashFavPic2,
            like : "145",
            title : "Mexican Juice",
            rating : 211
        },
        {
            img : dashFavPic3,
            like : "167",
            title : " Spicy Pizza",
            rating : 188
        },
        {
            img : dashFavPic4,
            like : "214",
            title : "Vegetable Salad",
            rating : 213
        },
        {
            img : dashFavPic5,
            like : "188",
            title : "Chops Stick",
            rating : 325
        },
        {
            img : dashFavPic1,
            like : "254",
            title : "Meet  Cutlet",
            rating : 155
        },
    ]
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://sheltered-crag-23788.herokuapp.com/DinnerFood")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])
    
    return (
        <div className="bg-white mt-4">
            <div className="">
                <h4 className="text-center pt-3">Most Favorites Items</h4>
                <p className="text-center">Dingo's Top rated food items.</p>
            </div>
            <div className="row">
                {
                    favData.map(singleFav => <FavItemCart singleFav={singleFav} key={Math.random()} />)
                }
            </div>
        </div>
    )
};

export default FavItems;