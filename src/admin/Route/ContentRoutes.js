
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../../pages/home';
import AddCategory from '../AddCategory';
import EditCategory from '../AdminComponent/EditCategory';
import AddProduct from '../AdminComponent/product/AddProduct';
import EditProduct from '../AdminComponent/product/EditProduct';
import Products from '../AdminComponent/product/Products';
import Category from '../Category';

export const ContentRoutes = () => {

  return (


    <Routes>

      <Route path='/category' element={<Category />} />
      <Route path='/addcategory' element={<AddCategory />} />
      <Route path='/editcategory/:id' element={<EditCategory />} />
      <Route path='/product' element={<Products />} />
      <Route path='/addproduct' element={<AddProduct />} />
      <Route path='/editproduct/:id' element={<EditProduct />} />
      <Route path="/home" element={<Home />} />

    </Routes>

  )
}

