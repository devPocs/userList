// UsersList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers, refreshUsers } from "./actions";

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(refreshUsers());
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={handleRefresh}>Refresh</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.address.suite}, {user.address.street},{" "}
                  {user.address.city}
                </td>
                <td>
                  <Link to={`/user/${user.id}`}>Details</Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No User Available</td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default UsersList;
