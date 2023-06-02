import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class ListProduct extends Component {
    constructor(props) {
        super(props)

        this.state= {
            products:[]
        }
    }
    componentDidMount(){
        ProductService.getProducts().then((res)=>{
            this.setState({products: res.data});
        });
    }
    render() {
        return (
            <div>
                <h2 className="text-center">All Products</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>imageURL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products.map(
                                    product =>
                                     <tr key={product.productId}>
                                        <td>{product.productName}</td>
                                        <td>{product.description}</td>
                                        <td>{product.price}</td>
                                        <td>{product.URL}</td>
                                     </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListProduct;