import React from "react";

type UserProps = {
  userId: string;
};

const fetchUser = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    {
      next: { revalidate: 10 },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }
  return res.json();
};

const UserId = async ({ params }: { params: Promise<UserProps> }) => {
  const { userId } = await params;
  const user = await fetchUser(userId);

  return (
    <div>
      <h1>User ID: {userId}</h1>
      <p>This is the user page for user with ID: {userId}</p>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default UserId;
