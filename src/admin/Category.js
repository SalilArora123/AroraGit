import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Category = () => {

  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(() => {

    axios({
      method: 'get',
      url: '/api/category/getcategory',
      headers: { "Content-Type": "application/json" },
    }).then(res => {
      console.log("res", res.data.data);
      setCategoryList(res.data.data);
    })

  }, [render]);

  const deleteHandler = (id) => {

    console.log("id", id);
    axios({
      method: 'post',
      url: '/api/category/deletecategory',
      data: id,
      headers: { "Content-Type": "application/json" },
    }).then(res => {
      console.log("res", res);
      setRender(!render);
    })
    
  }

  return (

    <div>

      <NavLink style={{ position: "absolute", left: "82%", top: "26%", fontSize: "22px" }} to="/dashboard/addcategory"><button style={{ backgroundColor: "#047600", color: "white", border: "2px solid #047600" }}>Add Category</button></NavLink>


      <h3 style={{ position: "absolute", left: "42%", fontSize: "24px", fontStyle: "oblique", top: "92px" }}>::CategoryListing::</h3>

      <table style={{ backgroundColor: "yellowgreen", position: "absolute", top: "36%", height: "36%" }}>
        <thead >
          <tr style={{ border: "1px solid black" }}>
            <th>Category_id</th>
            <th>Category_name</th>
          </tr>
        </thead>
        <tbody>

          {categoryList.map(function (value, index) {

            console.log("value", value);
            return (
              <tr key={index} style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black" }}>{value.category_name}</td>
                <td style={{ border: "1px solid black" }}>{value.category_id}</td>
                <button style={{ border: "2px solid green", color: "darkolivegreen" }} onClick={() => deleteHandler(value.category_id)}>Delete</button>
                <NavLink to={"/dashboard/editcategory/" + value.category_id}><button style={{ border: "2px solid green", color: "darkolivegreen" }}>Edit</button></NavLink>

              </tr>
            )
          })}

        </tbody>
      </table>
    </div >

  )
}

export default Category;