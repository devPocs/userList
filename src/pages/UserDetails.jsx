import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserDetails = () => {
  const { userId } = useParams();
  const users = useSelector((state) => state.users.users);

  // Find the user with the corresponding ID
  const user = users.find((user) => user.id === parseInt(userId, 10));

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <Link to={"/"}>
        <h3>Home</h3>
      </Link>

      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Address:</strong> {user.address.suite}, {user.address.street},{" "}
        {user.address.city}
      </p>
      <p>
        <strong>Company:</strong> {user.company.name}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
    </div>
  );
};

export default UserDetails;
