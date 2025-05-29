import React from "react";
async function fetchFriends() {
  // Simulate a network request to fetch friends
  const response = await fetch(`${process.env.NEXT_URL}/api/hello`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "Mehedi" }), // Example payload
  });
  if (!response.ok) {
    throw new Error("Failed to fetch friends");
  }

  const data = await response.json();
  return { data };
}

const Friends = async () => {
  const { data } = await fetchFriends();
  if (!data) {
    return <div>Error loading friends</div>;
  }
  return <div>Friends , {data.message}</div>;
};

export default Friends;
