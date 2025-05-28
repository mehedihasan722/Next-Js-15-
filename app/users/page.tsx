import React from "react";

const Users = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users = await res.json();

  return (
    <div>
      <h1>Users Lise</h1>
      <ul>
        {users.map((user: { id: number; name: string }) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
