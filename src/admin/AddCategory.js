import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as ErrorPage from '../admin/AdminComponent/Constant/ErrorPage';

const AddCategory = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        console.log("datadsdg", data);

        axios({
            method: 'post',
            url: '/api/category/category',
            data: data,
            headers: { "Content-Type": "application/json" },
        }).then(res => {

            console.log("res", res);
            if (res.data.status == "success") {
                navigate('/dashboard/category');

            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>  Add Category</h2>

                <div className="form-group">
                    <label>CategoryName :</label> <br></br>
                    <input {...register("categoryName", { required: true })} />
                    {errors.categoryName && <div style={{ color: "red" }} className='error'>{ErrorPage.ERROR_REQUIRED}</div>}
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

export default AddCategory