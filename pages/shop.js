import axios from "axios";
import Link from 'next/link';
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import Router from 'next/router';
import Head from 'next/head'

export const getServerSideProps = async () => {

    let resultProduct;

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/category/getcategory',
        headers: { "Content-Type": "application/json" },

    }).then(res => {
        resultProduct = res.data.data;
    })

    return {
        props: {
            dataAll: resultProduct
        }
    }
}
const Shop = ({ dataAll }) => {

    console.log("dataAlllll", dataAll);
    const router = useRouter();
    const { register, reset, handleSubmit } = useForm();


    const [resultSelected, setResultSelected] = useState([]);
    const category = router.query.data;
    console.log("category", category);


    useEffect(() => {

        axios({
            method: 'post',
            url: 'http://localhost:3000/api/product/getproductser',
            data: {
                categoryId: category ? category : "all"
            },
            headers: { "Content-Type": "application/json" },
        }).then(res => {
            setResultSelected(res.data.data);
            reset({
                category: category ? category : "all"
            })
        })
    }, []);


    const func = () => {

        for (let i = 0; i < dataAll.length; i++) {
            // debugger
            if (dataAll[i].category_id == category) {
                console.log("datAll", dataAll[i].category_name);
                console.log("categoryyyyy", category);
                return dataAll[i].category_name;
            }

        }

    }


    const onSubmit = (data) => {

        console.log("dataaaaaaaa", data);

        axios({
            method: 'post',
            url: 'http://localhost:3000/api/product/getproductser',
            data: {
                categoryId: data.category ? data.category : "all"
            },
            headers: { "Content-Type": "application/json" },
        }).then(res => {
            console.log("pppppppppppppppppppppppp", res.data.data);
            setResultSelected(res.data.data);

            if (res.data.status === "success") {
                router.push({
                    pathname: '/shop',
                    query: { data: data.category ? data.category : "all" }
                })

            }
        })
    }

    return (

        <div>

            <Head>
                <title>{func() ? func() : "shop"}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <div className="login">
                            <Link href="/login">Login</Link>
                        </div>
                    </Nav>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <select {...register("category")}>
                            <option value="all">All</option>
                            {dataAll.map(function (value, index) {

                                return (
                                    <option value={value.category_id}>{value.category_name}</option>
                                )
                            })}
                        </select>
                        <input type="submit" />
                    </form>

                </Container>
            </Navbar>
            <h3 style={{ fontSize: "27px", color: "red", marginLeft: "39%" }}>Products ::</h3>


            {
                resultSelected.map(function (value, index) {

                    return (

                        <Link href={`/productdetail/${value.product_id}`}>
                            <div key={index} style={{ padding: "10px", borderRadius: "10px", boxShadow: "0px 0px 10px black", width: "20%", marginLeft: "442px", marginBottom: "20px" }}>
                                {value.product_name}
                            </div>
                        </Link>

                    )
                })
            }
            

        </div>
    )

}

export default Shop;
