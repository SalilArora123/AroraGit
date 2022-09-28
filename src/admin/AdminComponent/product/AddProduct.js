import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as ErrorPage from '../Constant/ErrorPage';

const AddProduct = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const [showCategory, setShowCategory] = useState([]);

    useEffect(() => {

        axios({
            method: 'get',
            url: '/api/category/getcategory',
            headers: { "Content-Type": "application/json" },
        }).then(res => {
            console.log("resgetCate", res.data.data);
            setShowCategory(res.data.data);
        })
        
    }, []);

    const onSubmit = (data) => {

        console.log("addData", data);

        axios({
            method: 'post',
            url: '/api/product/product',
            data: {
                productName: data.ProductName,
                productDescription: data.ProductDescription,
                productPrice: data.ProductPrice,
                categoryName: data.categoryname
            },
            headers: { "Content-Type": "application/json" },
        }).then(res => {

            console.log("res", res);
            if (res.data.status == "success") {

                navigate('/dashboard/product');

            }
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Add Products </h2>

                <div className="form-group">
                    <label>ProductName:</label> <br></br>
                    <input {...register("ProductName", { required: true })} />
                    {errors.ProductName && <div style={{ color: "red" }} className='error'>{ErrorPage.ERROR_REQUIRED}</div>}
                    <br></br>
                    <label>Product Description:</label> <br></br>
                    <input {...register("ProductDescription", { required: true })} />
                    {errors.ProductDescription && <div style={{ color: "red" }} className='error'>{ErrorPage.ERROR_REQUIRED}</div>}
                    <br></br>
                    <label>Product Price:</label> <br></br>
                    <input {...register("ProductPrice", { required: true })} />
                    {errors.ProductPrice && <div style={{ color: "red" }} className='error'>{ErrorPage.ERROR_REQUIRED}</div>}
                    <br></br>

                    <label>Category Name</label>
                    <select {...register("categoryname")}>

                        <option>Choose the option</option>
                        {console.log("valueSSSSS", showCategory)}
                        {showCategory.map(function (value, index) {
                            return (
                                <option key={index} value={value.category_id}>{value.category_name}</option>
                            )
                        })}

                    </select>
                </div>
                <br></br>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )

}

export default AddProduct