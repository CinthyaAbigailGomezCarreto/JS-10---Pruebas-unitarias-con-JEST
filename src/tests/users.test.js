// Imports small array of users
const users = require("../data").default;

// You already have the methods imported
//import { default as expect } from "expect";
const {getUsers, getUserId, fetchUser} =  require("../users");


// Make a test to verify if the method getUserId(id) works correctly
// Verify any data of the resulting object you want

 
describe('Users Functions', () => {
    it('should fetch all users', () => {
        const usersData = getUsers();
        expect(usersData).toEqual(users);
    });
  
    it('should filter users by specific ID', () => {
        expect(getUserId(1)).toEqual(users[0]);
        expect(getUserId(2)).toEqual(users[1]);
        expect(getUserId(3)).toEqual(users[2]);
        expect(getUserId(4)).toEqual(users[3]);
        expect(getUserId(5)).toBeUndefined(); // Test case for non-existing user ID
    });

    it('fetchUser should throw an error for invalid user ID', async () => {
        expect.assertions(1); // Verifica que se ejecute al menos una afirmación dentro de la prueba
        try {
          const user = await fetchUser(1); // User ID 10 no existe
        } catch (error) {
          expect(error.message).toBe('User not found');
        }
    });
  });

/*console.log(`Looking for user ...`);
fetchUser(1)
  .then((user) => {
    console.log(`HEY!!! ${user}, we found it`); // Log the user data
  })
  .catch((error) => {
    console.error(error.message); // Log any errors
  });*/

// READ documentation