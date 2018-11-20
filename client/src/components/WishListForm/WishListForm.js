import React, { Component } from 'react';
import "./WishListForm.css";

class WishListForm extends Component {

    state = {
        wishItem: ""
    };

    handleSubmit = event => {

    }

    handleInputChange = event => {
        const value = event.target.value;
        this.setState({
            wishItem: value,
        })
    }


    handleDelete = event => {


    }

    render() {
        return (

            <form>
                <div className="justify-content-center form-inline">
                    <input
                        type="text"
                        className="form-control"
                        name="wishItem"
                        value={this.state.wishItem}
                        placeholder="Enter Wish List Item"
                        onChange={this.handleInputChange} />
                    <span className="input-group-btn">
                        <button onClick={this.handleSubmit} type="submit" className="btn btn-danger">Add Item</button>
                    </span>
                </div>
            </form>
        )
    }

}

export default WishListForm;
