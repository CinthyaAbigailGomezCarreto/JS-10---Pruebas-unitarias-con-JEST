// Imports small array of users
// Pretend it's an API request
const users = require("./data");

// Fetches all users
const getUsers = () => {
  return users;
};

// Filters users by specific ID
// const getUser = (id) => {
//    return users.find((user) => user.id === id);
// };
function getUserId(id) {
  return users.find((user) => user.id === id);
}

const fetchUser = (id) => {
  return new Promise((resolve, reject) => {
    // Simulate asynchronous data fetching using setTimeout
    console.log(`Looking for the user: ${id}`);
    setTimeout(() => {
      const user = users[id];
      if (user) {
        resolve(`Here is the user: ${user}`); // Resolve with user data if user exists
      } else {
        reject(new Error("User not found")); // Reject with error if user is not found
      }
    }, 500); // Simulating 2 second delay
  });
};

// test
// console.log(getUser(3));

module.exports = { getUsers, getUserId, fetchUser};