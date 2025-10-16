// Models for the Library API

// Book model
export class Book {
  constructor(id, title, author, genre, available = true) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.available = available;
  }
}

// User model
export class User {
  constructor(id, name, email, subscriptionActive = false) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.subscriptionActive = subscriptionActive;
  }
}

// Borrowing model
export class Borrowing {
  constructor(id, userId, bookId, borrowDate, returnDate = null) {
    this.id = id;
    this.userId = userId;
    this.bookId = bookId;
    this.borrowDate = borrowDate;
    this.returnDate = returnDate;
  }
}

// Mock data
export const mockBooks = [
  new Book(1, 'The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction', true),
  new Book(2, 'To Kill a Mockingbird', 'Harper Lee', 'Fiction', true),
  new Book(3, '1984', 'George Orwell', 'Dystopian', false),
  new Book(4, 'Pride and Prejudice', 'Jane Austen', 'Romance', true),
];

export const mockUsers = [
  new User(1, 'Alice Johnson', 'alice@example.com', true),
  new User(2, 'Bob Smith', 'bob@example.com', false),
  new User(3, 'Charlie Brown', 'charlie@example.com', true),
];

export const mockBorrowings = [
  new Borrowing(1, 1, 3, '2023-10-01'),
  new Borrowing(2, 2, 1, '2023-10-05', '2023-10-15'),
];
