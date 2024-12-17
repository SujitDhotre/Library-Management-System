import axios from "axios";

const setUrl = "http://localhost:8080";

const api = axios.create({
  baseURL: setUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add User
export const addUser = async (user) => {
  console.log(user);
  return await axios.post(`${setUrl}/user`, user);
};

// Get Users
export const getUsers = async () => {
  try {
    return await axios.get(`${setUrl}/users`);
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Add Book
export const addBook = async (book) => {
  console.log(book);
  return await axios.post(`${setUrl}/book`, book);
};

// Get Books
export const getBooks = async () => {
  try {
    return await axios.get(`${setUrl}/books`);
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

// Issue Books
export const issueBooks = async (userDetails, books) => {
  try {
    const response = await axios.post(`${setUrl}/issue-books`, { userDetails, books });
    return response.data; // Returns the transaction ID
  } catch (error) {
    console.error("Error issuing books:", error);
    throw error;
  }
};

// Get Issued Books by Transaction ID
export const getIssuedBooks = async (transactionId) => {
  try {
    const response = await axios.get(`${setUrl}/issued-books/${transactionId}`);
    return response.data; // Returns a list of issued books
  } catch (error) {
    console.error("Error fetching issued books:", error);
    throw error;
  }
};

// Get User Details by Transaction ID
export const getUserDetails = async (transactionId) => {
  try {
    const response = await axios.get(`${setUrl}/user-details/${transactionId}`);
    return response.data; // Returns user details
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};

// Mark a Book as Returned
export const returnBook = async (bookId) => {
  try {
    const response = await axios.put(`${setUrl}/return-book/${bookId}`);
    return response.data; // Returns a success message
  } catch (error) {
    console.error("Error marking book as returned:", error);
    throw error;
  }
};
