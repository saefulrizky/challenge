import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Form extends Component {
  render(){
    return(
      <form className="form-horizontal">

      <div className="form-group">
      <label className="col-sm-2 control-label">Title</label>
      <div className="col-sm-10">
      <input type="text" className="form-control" placeholder="Title" />
      </div>
      </div>

      <div className="form-group">
      <label className="col-sm-2 control-label">Rate</label>
      <div className="col-sm-10">
      <select className="form-control">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      </select>
      </div>
      </div>

      <div className="form-group">
      <label className="col-sm-2 control-label">Description</label>
      <div className="col-sm-10">
      <textarea className="form-control" placeholder="Description"></textarea>
      </div>
      </div>

      <div className="form-group">
      <label className="col-sm-2 control-label">Price</label>
      <div className="col-sm-10">
      <input type="text" className="form-control" placeholder="Price" />
      </div>
      </div>

      <div className="form-group">
      <label className="col-sm-2 control-label">Brand</label>
      <div className="col-sm-10">
      <input type="text" className="form-control" placeholder="Brand" />
      </div>
      </div>

      <div className="form-group">
      <label className="col-sm-2 control-label">Detail Product</label>
      <div className="col-sm-10">
      <textarea className="form-control" placeholder="Using Markdown" rows="11"></textarea>
      </div>
      </div>


      <div className="form-group">
      <div className="col-sm-2"></div>
      <div className="col-sm-10">
      <NavLink className="btn btn-danger" to='/'>Add</NavLink> &nbsp;
      <NavLink className="btn btn-warning" to='/'>Cancel</NavLink>
      </div>
      </div>

      </form>

    );
  }
}

export default Form
