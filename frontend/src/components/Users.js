import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Users() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://shopping-list-management-web-app-backend.vercel.app/api/items'
      )
      .then((result) => setItems(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Item Number</th>
              <th>Item Name</th>
              <th>Quentity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item.itemId}</td>
                <td>{item.itemName}</td>
                <td>{item.quentity}</td>
                <td>
                  <button>Update</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
