## **Books Manager Application**

### Welcome to the Books Manager application! This application allows you to manage a collection of books. You can create, update, and delete books using the form and buttons available. Additionally, you can filter the book list based on various criteria like title, author, genre, and publication date.

## **Table of Contents**
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## **Installation**
1. Clone the repository:
    ```bash
    git clone https://github.com/misskukuua/bookhub-test.git
    cd books-manager
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

    ## **Usage**

- **Creating a Book**: Fill in the details in the "Create a Book" form and click the "Create Book" button.
- **Updating a Book**: Click the edit icon next to a book in the list, modify the details in the "Update a Book" form, and click the "Update Book" button.
- **Deleting a Book**: Click the delete icon next to a book in the list.
- **Filtering Books**: Use the filters provided in the "Book Filter" section and click the "Apply Filters" button to view the filtered list of books.

## **Features**

- **Create, Update, and Delete Books**: Manage your book collection with ease.
- **Filter Books**: Filter the book list based on title, author, genre, and publication date.
- **Responsive Design**: Optimized for both desktop and mobile views.

## **API**

This application interacts with a backend API to manage books. Below are the main API functions used:

- `getBooks()`: Fetches all books from the API.
- `createBook(data)`: Creates a new book with the provided data.
- `updateBook(id, data)`: Updates the book with the specified ID using the provided data.
- `deleteBook(id)`: Deletes the book with the specified ID.


## **Contributing**

To contribute:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Add your feature description"
    ```
4. Push to the branch:
    ```bash
    git push origin feature/your-feature-name
    ```
5. Open a pull request on GitHub.



