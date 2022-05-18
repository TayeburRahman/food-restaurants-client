import React, {useState, useEffect} from 'react';
import AllFoodCard from './AllFoodCard';

const AllFoodItems = () => {
    const [allFoodCategory, setAllFoodCategory] = useState([])

    useEffect(() => {
        fetch("https://sheltered-crag-23788.herokuapp.com/allFoods")
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setAllFoodCategory(data)
        })
    },[])

    return (
        <div className="text-center">
            <h3>All Menus</h3>
            <p>Here is your menu list data</p>
            <div className="table-responsive">
                <table className="table table-hover bg-white">
                    <thead>
                        <tr>
                            <th scope="col">#Item ID</th>
                            <th scope="col">Img</th>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>

                    <tbody className="">
                        {
                            allFoodCategory.map(data => <AllFoodCard data={data} key={Math.random()} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllFoodItems;