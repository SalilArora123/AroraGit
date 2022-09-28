import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as ErrorPage from '../Constant/ErrorPage';

const EditProduct = () => {

    const navigate = useNavigate();
    const params = useParams();
    console.log("paramsEditProduct", params.id);

    const { register, reset, handleSubmit, control, formState: { errors } } = useForm();

    useEffect(() => {

        axios({
            method: 'post',
            url: '/api/product/prefilledproduct',
            data: {
                id: params.id
            },
            headers: {
                'Content-Type': 'application/json',
            },

        }).then(response => {
            console.log("responseEdit", response);
            reset({
                productname: response.data.data[0].product_name,
                productdescription: response.data.data[0].product_description,
                productprice: response.data.data[0].product_price

            });
        })

    }, []);


    const onSubmit = (data) => {

        axios({
            method: 'post',
            url: '/api/product/editproduct',
            data: {
                id: params.id,
                productName: data.productname,
                productdescription: data.productdescription,
                productprice: data.productprice
            },
            headers: { "Content-Type": "application/json" },
        }).then(res => {
            console.log("resupdate", res);
            if (res.data.status == "success") {
                
                navigate('/dashboard/product');
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2> Edit Product</h2>

                <div className="form-group">
                    <label>ProductName :</label> <br></br>
                    <input {...register("productname", { required: true })} />
                    {errors.productname && <div style={{ color: "red" }} className='error'>{ErrorPage.ERROR_REQUIRED}</div>}
                    <br></br>
                    <label>Product Description :</label> <br></br>
                    <input {...register("productdescription", { required: true })} />
                    {errors.productdescription && <div style={{ color: "red" }} className='error'>{ErrorPage.ERROR_REQUIRED}</div>}
                    <br></br>
                    <label>Product Price :</label> <br></br>
                    <input {...register("productprice", { required: true })} />
                    {errors.productprice && <div style={{ color: "red" }} className='error'>{ErrorPage.ERROR_REQUIRED}</div>}
                    <br></br>
                </div>
                <br></br>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )

}

export default EditProduct;