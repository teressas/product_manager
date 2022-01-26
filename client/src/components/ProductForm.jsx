import React, { useState } from 'react'
import axios from 'axios';


const ProductForm = (props) => {

    const { products, setProducts } = props
    

    const [formState, setFormState] = useState({
        title: "",
        price: 0,
        description: ""
    })

    // const [title, setTitle] = useState("");
    // const [price, setPrice] = useState(0);
    // const [description, setDescription] = useState("");

    const [errForm, setErrForm] = useState({})
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const changeHandler = (e) => {
        let { name, value } = e.target
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    // changes status of form submission after the user submits the form
    // const formMessage = () => {
    //     if (hasBeenSubmitted) {
    //         return "Thank you, product has been saved!";
    //     } else {
    //         return "Welcome, please enter a new product";
    //     }
    // };

    const formMessage = () => {
        return hasBeenSubmitted ? "Thank you, product has been saved!" : "Welcome, please enter a new product"
    }

    // if any of the product attributes are < it's length then set errCheck.(attribute) to true else false
    const errHandler = () => {
        let errCheck = {}
        formState.title.length < 2 ? (errCheck.title = true) : errCheck.title = false
        formState.price < 1 ? (errCheck.price = true) : errCheck.price = false
        formState.description.length < 3 ? (errCheck.description = true) : errCheck.description = false
        // console.log(errCheck)
        // generated errCheck ={ title: true, price:true, description: true}
        // then sets ErrForm as errCheck and 
        setErrForm(errCheck)
        // console.log(setErrForm)
        return (errCheck.title || errCheck.price || errCheck.description) // if any of the items is true, return true
    }

    // clears form after successful submission
    const clearForm = () => {
        setFormState({
            title: "",
            price: "",
            description: "",
        })
    }

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        // checks for errors, if there are no errors - (!errHandler()), then clear the form and set form has been submitted as True
        if (!errHandler()) {
            console.log("connecting to database and create user")
            console.log(formState)
            clearForm()
            setHasBeenSubmitted(true)
        }
        // const newProduct = {...formState}
        // console.log(newProduct)
        // make a post request to create a new product
        axios.post('http://localhost:8000/api/products', {...formState})
            .then(res => {
                console.log(res)
                setFormState(...formState)
                
                setProducts([...products, res.data.result])
                console.log(setFormState)
                
            })
            .catch(err => console.log(err))
    }


    // use this {JSON.stringify(errForm.title)} to check variable
    return (
        <div className="container-sm mt-3 mb-5">
            <h1>Product Manager Form</h1>
            <form onSubmit={onSubmitHandler}>
                {formMessage()}
                <div className="form-group mt-3">
                    <label>Title</label><br />
                    <input name="title" type="text" onChange={changeHandler} value={formState.title} placeholder='title'/>
                    {errForm.title && (<p style={{ color: 'red' }}> Error in title</p>)}
                </div>
                <div className="form-group mt-3">
                    <label>Price</label><br />
                    <input name="price" type="number" onChange={changeHandler} value={formState.price} />
                    {errForm.price && (<p style={{ color: 'red' }}> Error in price</p>)}

                </div>
                <div className="form-group mt-3">
                    <label>Description</label><br />
                    <input name="description" type="text" onChange={changeHandler} value={formState.description} placeholder='description'/>
                    {errForm.description && (<p style={{ color: 'red' }}> Error in description</p>)}
                </div>
                <div className="form-group mt-3">
                    <button className="btn btn-lg btn btn-info">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;




