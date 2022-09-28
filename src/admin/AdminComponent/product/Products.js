import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useRouter } from 'next/router';

const Products = () => {

  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [render, setRender] = useState(false);
  const router = useRouter();
  
  useEffect(() => {

    axios({
      method: 'get',
      url: '/api/product/getproducts',
      headers: { "Content-Type": "application/json" },
    }).then(res => {
      console.log("resProduct", res.data.data);
      setProductList(res.data.data);

    })

  }, [render]);


  const deleteHandler = (id) => {

    console.log("id", id);
    axios({
      method: 'post',
      url: '/api/product/deleteproduct',
      data: id,
      headers: { "Content-Type": "application/json" },
    }).then(res => {
      console.log("res", res);
      setRender(!render);
    })

  }

  const userHandler = () => {
    router.push("/");
  }

  return (

    <div>

      <button onClick={userHandler}>User Panel</button>
      <NavLink style={{ position: "absolute", left: "82%", top: "26%", fontSize: "22px" }} to="/dashboard/addproduct"><button style={{ backgroundColor: "#047600", color: "white", border: "2px solid #047600" }}>Add Products</button></NavLink>

      <h3 style={{ position: "absolute", left: "42%", fontSize: "24px", fontStyle: "oblique", top: "92px" }}>::ProductListing::</h3>

      <table style={{ backgroundColor: "yellowgreen", position: "absolute", top: "36%", height: "36%" }}>

        <thead >
          <tr style={{ border: "1px solid black" }}>
            <th>Category_id</th>
            <th>Product_name</th>
            <th>Product_Description</th>
            <th>Product_Price</th>
          </tr>
        </thead>
        <tbody>

          {productList.map(function (value, index) {

            console.log("value", value);
            return (
              <tr key={index} style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black" }}>{value.category_id}</td>
                <td style={{ border: "1px solid black" }}>{value.product_name}</td>
                <td style={{ border: "1px solid black" }}>{value.product_description}</td>
                <td style={{ border: "1px solid black" }}>{value.product_price}</td>
                <button style={{ border: "2px solid green", color: "darkolivegreen" }} onClick={() => deleteHandler(value.product_id)}>Delete</button>
                <NavLink to={"/dashboard/editproduct/" + value.product_id}><button style={{ border: "2px solid green", color: "darkolivegreen" }}>Edit</button></NavLink>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div >
  )
}

export default Products;