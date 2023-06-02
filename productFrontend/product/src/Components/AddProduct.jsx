import React,{useState} from "react";
import axios from "axios";


function AddProduct() {
    const[Product, setProduct] =useState({});
    const handleAddProductForm=(event)=>{
        console.log("handle form product");
        console.log(Product);
        AddProductToApi(Product);
        event.preventDefault(); 
    };

    const AddProductToApi=(productDetails)=>{
        console.log("handle from productDetails");
        console.log(productDetails);
        axios.post("/product", productDetails).then(
            (response) =>{
                console.log("product saved");
            },
            (error) =>{
                console.log("not saved");
            }

        );
    };

    return(
        <div className="AddProduct">
            <h3>Add a Product</h3>
            <form onSubmit={handleAddProductForm}>
                <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" className="form-control" name="productName"
                    onChange={(e) =>{
                        setProduct({...Product, productName: e.target.value});
                    }} required />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" className="form-control" name="description"
                    onChange={(e) =>{
                        setProduct({...Product, description: e.target.value});
                    }} required />
                </div>
                <button className="btn btn-danger" type="submit">ADD</button>
            </form>

        </div>
    )

}
export default AddProduct;