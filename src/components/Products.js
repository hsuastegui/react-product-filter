import React, { Component } from 'react';
import _ from 'lodash';

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            filter: [],
            supplier: '',
            product: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.filter = this.filter.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.products.length){
            this.setState({
                filter: nextProps.products
            });
        }
    }
    filter(){
        let filter = [];
        if(this.state.supplier !== '' && this.state.product !== ''){
            filter = _.filter(this.props.products, {'supplier': this.state.supplier, 'product': this.state.product});
        }else if(this.state.supplier !== ''){
            filter = _.filter(this.props.products, {'supplier': this.state.supplier});
        }else if(this.state.product !== ''){
            filter = _.filter(this.props.products, {'product': this.state.product});
        }else{
            filter = this.props.products;
        }
        this.setState({filter});
    }
    handleChange(event){
        if(event.target.id === 'selSupplier'){
            this.setState({supplier: event.target.value}, ()=>{
                this.filter();
            });
        }else if(event.target.id === 'selProduct'){
            this.setState({product: event.target.value}, ()=>{
                this.filter();
            });
        }
    }
    renderFilters(){
        if(this.props.products.length == 0) return;
        const suppliers = _.uniqBy(this.props.products, 'supplier');
        const products = _.uniqBy(this.props.products, 'product');
        const productsHtml = products.map((item, index) => {
            return <option key={index}>{item.product}</option>
        });
        const suppliersHtml = suppliers.map((item, index) => {
            return <option key={index}>{item.supplier}</option>
        });
        return(
            <form>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="selSupplier">Supplier</label>
                        <select className="form-control" id="selSupplier" onChange={this.handleChange}>
                            <option></option>
                            {suppliersHtml}
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="selProduct">Product</label>
                        <select className="form-control" id="selProduct" onChange={this.handleChange}>
                            <option></option>
                            {productsHtml}
                        </select>
                    </div>
                </div>
            </form>
        );
    }
    renderProducts(){
        const productsHtml = this.state.filter.map((item, index) => {
            return(
                <tr key={index}>
                    <td>{index}</td>
                    <td>{item.supplier}</td>
                    <td>{item.product}</td>
                    <td>£{item.price}</td>
                </tr>
            );
        });
        return(
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Supplier</th>
                            <th>Product</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsHtml}
                    </tbody>
                </table>
            </div>
        );
    }
    render(){
        return(
            <div className="col-sm-12 col-md-12 main">
                <h1 className="page-header">Product pricing</h1>
                {this.renderFilters()}
                <h2 className="sub-header">Product details</h2>
                {this.renderProducts()}
            </div>
        );
    }
}

export default Products;