import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as ErrorPage from '../AdminComponent/Constant/ErrorPage';

const EditCategory = () => {

    const navigate = useNavigate();
    const params = useParams();
    console.log("paramsid", params.id);

    const { register, reset, handleSubmit, control, formState: { errors } } = useForm();

    useEffect(() => {

        axios({
            method: 'post',
            url: '/api/category/prefilled',
            data: {
                id: params.id
            },
            headers: {
                'Content-Type': 'application/json',
            },

        }).then(response => {
            console.log("response", response);
            reset({
                categoryName: response.data.data[0].category_name
            });
        })

    }, []);

    const onSubmit = (data) => {

        console.log("datadsdg", data);

        axios({
            method: 'post',
            url: '/api/category/editcategory',
            data: {
                id: params.id,
                categoryName: data.categoryName
            },
            headers: { "Content-Type": "application/json" },
        }).then(res => {
            console.log("resupdate", res);

            if (res.data.status == "success") {
                navigate('/dashboard/category');
            }
        })

    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2> Edit Category</h2>

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

export default EditCategory;