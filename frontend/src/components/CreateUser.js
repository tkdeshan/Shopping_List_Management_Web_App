import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [itemId, setItemId] = useState();
  const [itemName, setItemName] = useState();
  const [quentity, setQuentity] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post('https://shopping-list-management-web-app-backend.vercel.app/api/item', { itemId, itemName, quentity })
      .then((result) => {
        console.log(result);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add Item</h2>
          <div className="mb-2">
            <label>Item Number</label>
            <input
              type="text"
              placeholder="1"
              className="form-control"
              onChange={(e) => setItemId(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Item Name</label>
            <input
              type="text"
              placeholder="Soap"
              className="form-control"
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Quentity</label>
            <input
              type="text"
              placeholder="10"
              className="form-control"
              onChange={(e) => setQuentity(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
