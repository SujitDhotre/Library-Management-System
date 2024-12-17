# Library-Management-System
A web-based application for managing a library system, developed using Spring Boot for the backend and React.js for the frontend, with MySQL as the database. This application supports managing books, users, and issuing books to members.


# Features
  # User Management:

    Add users to the library system.
    Retrieve the list of all registered users.

  # Book Management:

    Add new books to the library.
    Retrieve the list of all books in the library.

  # Book Issuance:
  
    Issue books to users, tracking the transaction details, including the book names, quantities, and the date of issue.
    Return books with the ability to track their return status.

  # Analytical Dashboard for better understanding 

# Tech Stack
   # Backend:

        Spring Boot
        Spring Data JPA (for interacting with MySQL)
        MySQL Database  
  # Frontend:

        React.js
        Axios (for API calls)

# Project Structure
  # Backend (Spring Boot)
    src/main/java/com/example/library_management_system

    controller: Contains the controller classes for handling HTTP requests.
    Dao: Contains the repository interfaces for interacting with the database.
    model: Contains entity classes like Book, User, and IssuedBook.
    service: Contains service interfaces and their implementations for business logic.
    src/main/resources

    application.properties: Contains configuration settings for connecting to the MySQL database.

# Frontend (React.js)
    src/components
    
    Book: Components for managing book data.
    User: Components for managing user data.
    IssueBook: Component for issuing and returning books.
    src/service
    
    api.js: Contains the Axios instance and methods for making API calls to the backend.

# Lets  have look of project 

  # Dashboard
  ![Dashboard](https://github.com/user-attachments/assets/5600fde1-733d-431c-8142-6dc8fb2afa09)

  # Add Uesers 
      Admin can add both kinds of users like Author and Students by selecting there type
  ![New User](https://github.com/user-attachments/assets/172cbbf8-099c-4a8e-a3f8-7f36dbdba094)

  # Add Books 
     The admin can add multiple books at a time by dynamically adding and removing rows in the form. The current date will be stored automatically. Additionally, if we need to update the stock for existing books, the system will handle that. If a book is already present in the database, it will be updated accordingly.

  
![New Books](https://github.com/user-attachments/assets/1896017e-87cc-427a-bb72-caa71d3d46e9)

  # Issue Boooks To the User
      Using using this form admin can able to issue books to perticular book he can issue multiple books as same after time period is over he will able to return a book from the same form just using transaction id 
  ![image](https://github.com/user-attachments/assets/2e0e8eb5-0d3e-444f-bb0e-2b8ece2fb3d8)

# Reports
  # For all users 
  ![All_users](https://github.com/user-attachments/assets/ee6b7332-f43e-4069-85d9-1bad528af14a)

  # For all Books
  ![All_Books](https://github.com/user-attachments/assets/01e67788-ee66-4d13-90df-83078f8889c1)


