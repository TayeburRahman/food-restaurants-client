import React, { useState } from 'react';
import axios from 'axios';
import { useForm, useFieldArray } from "react-hook-form";
const AddFoodItem = () => {
    // ALL STATES
    const [imageUrl1, setImageUrl1] = useState("");
    const [imageUrl2, setImageUrl2] = useState("");
    const [imageUrl3, setImageUrl3] = useState("");
    // console.log(imageUrl1, imageUrl2, imageUrl3);

    // USE FORM 
    const { register, resetField, handleSubmit, control, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            name: "",
            title: "",
            shortDescription: "",
            price: "",
            foodCategory: "",
            type: "",
            foodInstructions: [{ instructions: "" }],
            ingredient: [{ ingredient: "" }],
            tags: "",
            readyTime: "",
            prepTime: "",
            cookTime: "",
            rating: "",
            servings: "",
            makingPic1: "",
            makingPic2: "",
            makingPic3: "",
        }
    });

    // MULTIPLE DYNAMIC INPUT FIELD useFieldArray
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


    // SUBMIT FORM 
    const onSubmit = data => {
        // console.log(data)
        let FoodInstructions = data.foodInstructions.map(ele => ele.instructions)
        // console.log(FoodInstructions)
        let Ingredient = data.ingredient.map(ele => ele.ingredient)
        // console.log(Ingredient)

        const sendFormMenuData = {
            ...data,
            foodInstructions: FoodInstructions,
            ingredient: Ingredient,
            makingPic1: imageUrl1,
            makingPic2: imageUrl2,
            makingPic3: imageUrl3,
        }
        console.log(sendFormMenuData)

        fetch("https://sheltered-crag-23788.herokuapp.com/addMenu", {
            method: 'POST',
            body: JSON.stringify(sendFormMenuData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                alert(data)
                resetField("name")
                resetField("title")
                resetField("shortDescription")
                resetField("price")
                resetField("foodCategory")
                resetField("type")
                resetField("foodInstructions")
                resetField("ingredient")
                resetField("tags")
                resetField("readyTime")
                resetField("prepTime")
                resetField("cookTime")
                resetField("rating")
                resetField("servings")
                resetField("makingPic1")
                resetField("makingPic2")
                resetField("makingPic3")
            })

    }

    // HANDLE IMAGE UPLOAD TO IMAGE BB HOSTING
    const handleImgUpload = (e, setImgState) => {
        // console.log(e.target.files[0])
        const imageData = new FormData()
        imageData.set('key', 'e65ce4e078a8e7e2d464434d0214032e')
        imageData.append('image', e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(response => {
                setImgState(response.data.data.display_url);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <div className="text-center">
                <h3>New Menu</h3>
                <p>Add a new delicious food menu.</p>
            </div>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="px-3">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <label className="d-flex justify-content-start">*Title :</label>
                            <input className="form-control border-0 border-bottom mb-2" type="text"  {...register("title", { required: true })} />
                            {errors.title && <span className="text-danger">* Title field is required</span>}

                            <label className="d-flex justify-content-start mt-3">*Category :</label>
                            <input className="form-control border-0 border-bottom mb-2" type="text" {...register("foodCategory", { required: true })} />
                            {errors.foodCategory && <span className="text-danger">* Category field is required</span>}


                            <label className="d-flex justify-content-start mt-3">*Description :</label>
                            <textarea className="form-control border-0 border-bottom mb-2" type="text" placeholder="Short Description" {...register("shortDescription", { required: true })} />
                            {errors.shortDescription && <span className="text-danger">* Description field is required</span>}


                            <label className="d-flex justify-content-start mt-3" htmlFor="">*Food Ingredient :</label>
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
                                {Instructions.map((item, index) => {
                                    return (
                                        <li key={Math.random()} className='d-flex'>
                                            <textarea className="form-control mb-2 me-1" {...register(`foodInstructions.${index}.instructions`)} />
                                            <button type="button" className="btn btn-sm mb-2 btn-dark" onClick={() => InstructionsRemove(index)}> Del </button>
                                        </li>
                                    );
                                })}
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
                                    <label className="d-flex justify-content-start mt-3">*Post :</label>
                                    <select className="form-select  border-0 border-bottom" aria-label="Default select example" {...register("type", { required: true })}>
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
                                    <label className="d-flex justify-content-start mt-3">*Tag :</label>
                                    <input className="form-control border-0 border-bottom mb-2" type="text" {...register("tags", { required: true })} />
                                    {errors.tags && <span className="text-danger">* Tag field is required</span>}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <label className="d-flex justify-content-start mt-3">*Price :</label>
                                    <input className="form-control border-0 border-bottom mb-2" type="number" {...register("price", { required: true })} />
                                    {errors.price && <span className="text-danger">* Price field is required</span>}
                                </div>
                                <div className="col-sm-6">
                                    <label className="d-flex justify-content-start mt-3">*Rating :</label>
                                    <select className="form-select border-0 border-bottom" aria-label="Default select example" {...register("rating", { required: true })}>
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
                                    <label className="d-flex justify-content-start mt-3">*Ready Time :</label>
                                    <input className="form-control border-0 border-bottom mb-2" type="text" placeholder="etc 30 Minutes" {...register("readyTime", { required: true })} />
                                    {errors.readyTime && <span className="text-danger">* Ready Time field is required</span>}
                                </div>
                                <div className="col-sm-6">
                                    <label className="d-flex justify-content-start mt-3">*Prep Time :</label>
                                    <input className="form-control border-0 border-bottom mb-2" type="text" placeholder="etc 30 Minutes" {...register("prepTime", { required: true })} />
                                    {errors.prepTime && <span className="text-danger">* Prep Time field is required</span>}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <label className="d-flex justify-content-start mt-3">*Cook Time :</label>
                                    <input className="form-control border-0 border-bottom mb-2" type="text" placeholder="etc 30 Minutes" {...register("cookTime", { required: true })} />
                                    {errors.cookTime && <span className="text-danger">* Cook Time field is required</span>}
                                </div>
                                <div className="col-sm-6">
                                    <label className="d-flex justify-content-start mt-3">*Servings :</label>
                                    <input className="form-control border-0 border-bottom mb-2" type="number" {...register("servings", { required: true })} />
                                    {errors.servings && <span className="text-danger">* Servings field is required</span>}
                                </div>
                            </div>

                            <label className="d-flex justify-content-start mt-3">*Image Name :</label>
                            <input className="form-control border-0 border-bottom mb-2" type="text" {...register("name", { required: true })} />
                            {errors.name && <span className="text-danger">* Name field is required</span>}


                            <label className="d-flex justify-content-start mt-3">*Image 1st :</label>
                            <input onChange={(e) => handleImgUpload(e, setImageUrl1)} className="form-control border-0 border-bottom mb-2" type="file" name="One" required />

                            <label className="d-flex justify-content-start mt-3">*Image 2nd :</label>
                            <input onChange={(e) => handleImgUpload(e, setImageUrl2)} className="form-control border-0 border-bottom mb-2" type="file" name="Two" required />

                            <label className="d-flex justify-content-start mt-3">*Image 3rd :</label>
                            <input onChange={(e) => handleImgUpload(e, setImageUrl3)} className="form-control border-0 border-bottom mb-2" type="file" name="Three" required />

                            <br />
                            <input type="submit" className="btn btn-success" value="Add Menu" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFoodItem;