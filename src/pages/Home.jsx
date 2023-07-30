import React from "react";
import { useState } from "react";
import Homepage from "./HomePage";

const HomePage = ({data}) =>{
    const [products, setProducts] = useState(data)
    const addProduct = (product) =>{
        setProducts([...products, product])
    }
    const deleteProduct = (id)=>{
        const newData = products.filter((product) =>
            product.id !== id)
            setProducts(newData);
        }
        const updateProduct = (id) =>{
            const newData = product.map((product) =>{
                return product.id == id? {...product, name:"Product 1 update", price:100} : product
            })
            setProducts(newData)
        }
        return(
            <div>
                <button onClick={() =>addProduct({id: 4, name:"Product 4", price:123})}>Add</button>
                {products.map((product, index) => {
                    return(
                        <div key={index + 1}>
                            <h3>{product.name}</h3>
                            <h3>{product.price}</h3>
                            <button onClick={() => deleteProduct(product.id)}>DELETE</button>
                            <button onClick={() => updateProduct(product.id)}>UPDATE</button>

                        </div>    
                    )
                })}
            </div>
        )

    }
    export default Homepage
