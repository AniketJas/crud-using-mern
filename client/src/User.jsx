import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setUser(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteUser/" + id)
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center aligh-items-center">
      <div className="w-50 align-self-center bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          Add User
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* dynamic data show */}
            {user.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link
                      to={`/update/${user._id}`}
                      className="btn btn-warning ms-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={(e) => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
