import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
  const BaseURL = 'https://shopping-list-management-web-app-backend.vercel.app';
  const { id } = useParams();
  const [itemId, setItemId] = useState();
  const [itemName, setItemName] = useState();
  const [quentity, setQuentity] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BaseURL}/api/items/${id}`)
      .then((result) => {
        console.log(result);
        setItemId(result.data.itemId);
        setItemName(result.data.itemName);
        setQuentity(result.data.quentity);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put(`${BaseURL}/api/item/${id}`, { itemId, itemName, quentity })
      .then((result) => {
        console.log(result);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="col-md-6 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2>Update Item</h2>
          <div className="mb-2">
            <label>Item Number</label>
            <input
              type="text"
              className="form-control"
              value={itemId}
              onChange={(e) => setItemId(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Item Name</label>
            <input
              type="text"
              className="form-control"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Quentity</label>
            <input
              type="text"
              className="form-control"
              value={quentity}
              onChange={(e) => setQuentity(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
