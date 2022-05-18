import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';


const UpdateMenu = () => {
    const [updateData, setUpdateData] = useState([])
    const [updateIngredient, setUpdateIngredient] = useState([])
    const [updateInstruction, setUpdateInstruction] = useState([])
    const [user, setUser] = useState(null);

    const { control, register, handleSubmit, reset, formState: { errors } } = useForm();
    const ID = useParams()
    const id = ID.ID
    const backNavigate = useNavigate()
    // console.log(id)
    //* GET SINGLE DATA
    useEffect(() => {
        fetch(`https://sheltered-crag-23788.herokuapp.com/updateMenu/${id}`)
            .then(res => res.json())
            .then(json => {
                // console.log(json);
                setUpdateData(json)
                setUpdateIngredient(json.ingredient)
                setUpdateInstruction(json.foodInstructions)
            })
    }, [id])

    //* Back Button
    const handleBackNavigate = () => {
        backNavigate('/dashboard/allFoods')
    }

    const { title, foodCategory, type, shortDescription, name, tags, servings, readyTime, rating, prepTime, cookTime, price } = updateData


    useEffect(() => {
        // simulate async api call with set timeout
        setTimeout(() => setUser({
            title: title,
            foodCategory: foodCategory,
            shortDescription: shortDescription,
            type: type,
            price: price,
            tags: tags,
            rating: rating,
            readyTime: readyTime,
            prepTime: prepTime,
            cookTime: cookTime,
            servings: servings,
            name: name,
            ingredient: [{ ingredient: "" }],
            foodInstructions: [{ instructions: "" }]
        }), 1000);
    }, [updateData]);

    // effect runs when user state is updated
    useEffect(() => {
        // reset form with user data
        reset(user);
    }, [user]);



    const onSubmit = (data) => {
        // console.log(updateInstruction)
        let FoodInstructions = updateInstruction.concat(data.foodInstructions.map(ele => ele.instructions))
        // console.log(updateIngredient)
        let Ingredient = updateIngredient.concat(data.ingredient.map(ele => ele.ingredient))
        const upData = {
            ...data,
            foodInstructions: FoodInstructions,
            ingredient: Ingredient
        }
        console.log(upData);

        //* PATCH / UPDATE SINGLE DATA
        fetch(`https://sheltered-crag-23788.herokuapp.com/toModifyServerData/${id}`,{
            method: 'PATCH',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(upData) 
        })
        .then(res => res.json())
        .then(jsonData => {
            // console.log(jsonData);
            alert(jsonData)
        })
        return false;
    }


    //* useFieldArray input for useForm
    const {
        fields: Instructions,
        append: InstructionsAppend,
        remove: InstructionsRemove
    } = useFieldArray({ control, name: "foodInstructions" });
    const {
        fields: Ingredient,
        append: IngredientAppend,
        remove: IngredientRemove
    } = useFieldArray({ control, name: "ingredient" });



    //* Food Ingredient function
    let IngredientItems = [...updateIngredient]
    // console.log('IngredientItems', IngredientItems)
    const handleIngredient = (value, index) => {
        // console.log(value, index);
        IngredientItems.splice(index, 1, value)
        // console.log('items', IngredientItems);
        setUpdateIngredient(IngredientItems)
    }
    // console.log(updateIngredient);


    //* Food Instruction function
    let InstructionItems = [...updateInstruction]
    // console.log('InstructionItems', InstructionItems)
    const handleInstruction = (value, index) => {
        // console.log(value, index);
        InstructionItems.splice(index, 1, value)
        // console.log('items', InstructionItems);
        setUpdateInstruction(InstructionItems)
    }
    // console.log(updateInstruction);

    return (
        <>
            <Navbar />
            <div className="container">
                <div style={{ marginTop: 120 }}>
                    <div className="text-center">
                        <h2>Update Menu {title}</h2>
                        <p>Update your menu</p>
                    </div>

                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="px-3">
                                <div className="card border-0 shadow m-3">
                                    <div className="card-body">
                                        <button onClick={() => handleBackNavigate()} type="button" className="btn btn-sm mb-3 btn-success" >Back</button>
                                        {user &&
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="form-row">

                                                    <label className="d-flex justify-content-start ms-2">*Title :</label>
                                                    <input defaultValue={title} className="form-control border-0 border-bottom mb-2" type="text" {...register("title", { required: true })} />
                                                    {errors.title && <span className="text-danger">* Title field is required</span>}


                                                    <label className="d-flex justify-content-start mt-3 ms-2">*Category :</label>
                                                    <input defaultValue={foodCategory} className="form-control border-0 border-bottom mb-2" type="text" {...register("foodCategory", { required: true })} />
                                                    {errors.foodCategory && <span className="text-danger">* Category field is required</span>}


                                                    <label className="d-flex justify-content-start mt-3 ms-2">*Description :</label>
                                                    <textarea defaultValue={shortDescription} className="form-control border-0 border-bottom mb-3" type="text" {...register("shortDescription", { required: true })} />
                                                    {errors.shortDescription && <span className="text-danger">* Description field is required</span>} 
                                                   

                                                    <label className="d-flex justify-content-start mt-3" htmlFor="">*Food Ingredient :</label>
                                                    {
                                                        updateIngredient.map((singleIngredient, index) =>
                                                            <div key={Math.random()}>
                                                                <li key={index} className="d-flex justify-content-start mb-2 ms-2">Ingredient {index + 1}</li>
                                                                <textarea type="text" onBlur={(e)=> handleIngredient(e.target.value, index)} defaultValue={singleIngredient} className="form-control border-0 border-bottom mb-2" />
                                                            </div>)
                                                    }
                                                    <ul className="list-unstyled">
                                                        {Ingredient.map((item, index) => {
                                                            return (
                                                                <li key={Math.random()} className='d-flex'>
                                                                    <textarea className="form-control mb-2 me-1" {...register(`ingredient.${index}.ingredient`)} />
                                                                    <button type="button" className="btn btn-sm mb-2 btn-dark" onClick={() => IngredientRemove(index)}> Del </button>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                    <section className="mb-4">
                                                        <button
                                                            className="btn btn-sm btn-dark d-flex justify-content-start"
                                                            type="button"
                                                            onClick={() => {
                                                                IngredientAppend({ ingredient: "" });
                                                            }}
                                                        > Add ingredient
                                                        </button>
                                                    </section>



                                                    <label className="d-flex justify-content-start mt-3 ms-2">*Food Instructions :</label>
                                                    <ul className="list-unstyled">
                                                        {
                                                            updateInstruction.map((singleInstruction, index) =>
                                                                <div key={Math.random()}>
                                                                    <li key={index} className="d-flex justify-content-start mb-2 ms-2">Instructions {index + 1}</li>
                                                                    <textarea onBlur={(e) => handleInstruction(e.target.value, index)} defaultValue={singleInstruction} className="form-control border-0 border-bottom mb-2" type="text"/>
                                                                </div>)
                                                        }
                                                        {
                                                            Instructions.map((item, index) => {
                                                                return (
                                                                    <li key={Math.random()} className='d-flex'>
                                                                        <textarea className="form-control mb-2 me-1" {...register(`foodInstructions.${index}.instructions`)} />
                                                                        <button type="button" className="btn btn-sm mb-2 btn-dark" onClick={() => InstructionsRemove(index)}> Del </button>
                                                                    </li>
                                                                );
                                                            })
                                                        }
                                                    </ul>
                                                    <section className="mb-4">
                                                        <button
                                                            className="btn btn-sm btn-dark d-flex justify-content-start"
                                                            type="button"
                                                            onClick={() => {
                                                                InstructionsAppend({ instructions: "" });
                                                            }}
                                                        > Add instructions
                                                        </button>
                                                    </section>


                                                    <div className="row">                         
                                                        <div className="col-sm-6">
                                                            <label className="d-flex justify-content-start mt-3 ms-2">*Post :</label>
                                                            <select defaultValue={type} className="form-select  border-0 border-bottom" aria-label="Default select example" {...register("type", { required: true })}>
                                                                <option value="HomeMenu">Add To Home Menu</option>
                                                                <option value="BreakFastFood">Add To Breakfast Food</option>
                                                                <option value="BreakFastDrink">Add To Breakfast Drink</option>
                                                                <option value="LunchFood">Add To Lunch Food</option>
                                                                <option value="LunchDrink">Add To Lunch Drink</option>
                                                                <option value="DinnerFood">Add To Dinner Food</option>
                                                                <option value="DinnerDrink">Add To Dinner Drink</option>
                                                            </select>
                                                            {errors.type && <span className="text-danger">* Type field is required</span>}
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <label className="d-flex justify-content-start mt-3 ms-2">*Tag :</label>
                                                            <input defaultValue={tags} className="form-control border-0 border-bottom mb-2" type="text" {...register("tags", { required: true })} />
                                                            {errors.tags && <span className="text-danger">* Tag field is required</span>}
                                                        </div>
                                                    </div>


                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <label className="d-flex justify-content-start mt-3 ms-2">*Price :</label>
                                                            <input defaultValue={price} className="form-control border-0 border-bottom mb-2" type="number" {...register("price", { required: true })} />
                                                            {errors.price && <span className="text-danger">* Price field is required</span>}
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <label className="d-flex justify-content-start mt-3 ms-2">*Rating :</label>
                                                            <select defaultValue={rating} className="form-select border-0 border-bottom" aria-label="Default select example" {...register("rating", { required: true })}>
                                                                <option>2</option>
                                                                <option>2.5</option>
                                                                <option>3</option>
                                                                <option>3.5</option>
                                                                <option>4</option>
                                                                <option>4.5</option>
                                                                <option>5</option>
                                                            </select>
                                                            {errors.rating && <span className="text-danger">* Rating field is required</span>}
                                                        </div>
                                                    </div>


                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <label className="d-flex justify-content-start mt-3 ms-2">*Ready Time :</label>
                                                            <input defaultValue={readyTime} className="form-control border-0 border-bottom mb-2" type="text" placeholder="Ready Time : etc 30 Minutes" {...register("readyTime", { required: true })} />
                                                            {errors.readyTime && <span className="text-danger">* Ready Time field is required</span>}
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <label className="d-flex justify-content-start mt-3 ms-2">*Prep Time :</label>
                                                            <input defaultValue={prepTime} className="form-control border-0 border-bottom mb-2" type="text" placeholder="Prep Time : etc 30 Minutes" {...register("prepTime", { required: true })} />
                                                            {errors.prepTime && <span className="text-danger">* Prep Time field is required</span>}
                                                        </div>
                                                    </div>


                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <label className="d-flex justify-content-start mt-3 ms-2">*Cook Time :</label>
                                                            <input defaultValue={cookTime} className="form-control border-0 border-bottom mb-2" type="text" placeholder="Cook Time : etc 30 Minutes" {...register("cookTime", { required: true })} />
                                                            {errors.cookTime && <span className="text-danger">* Cook Time field is required</span>}
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <label className="d-flex justify-content-start mt-3 ms-2">*Servings :</label>
                                                            <input defaultValue={servings} className="form-control border-0 border-bottom mb-2" type="number" placeholder="Serving" {...register("servings", { required: true })} />
                                                            {errors.servings && <span className="text-danger">* Servings field is required</span>}
                                                        </div>
                                                    </div>

                                                    <label className="d-flex justify-content-start mt-3 ms-2">*Image Name :</label>
                                                    <input defaultValue={name} className="form-control border-0 border-bottom mb-2" type="text" placeholder="Image Name" {...register("name", { required: true })} />
                                                    {errors.name && <span className="text-danger">* Name field is required</span>}


                                                </div>
                                                <br />
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-primary me-1">Update Menu</button>
                                                    <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button>
                                                </div>
                                            </form>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UpdateMenu;