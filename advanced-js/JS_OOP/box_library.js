function Book(
  title,
  numOfChapters,
  author,
  numOfPages,
  publisher,
  numOfCopies
) {
  if (arguments.length !== 6) {
    throw new Error("Expected 6 arguments but got " + arguments.length);
  }

  if (
    typeof title !== "string" ||
    typeof author !== "string" ||
    typeof publisher !== "string" ||
    typeof numOfChapters !== "number" ||
    numOfChapters < 0 ||
    typeof numOfPages !== "number" ||
    numOfPages < 0 ||
    typeof numOfCopies !== "number" ||
    numOfCopies < 0
  ) {
    throw new TypeError("Invalid arguments where passed");
  }

  this.title = title;
  this.author = author;
  this.publisher = publisher;
  this.numOfChapters = numOfChapters;
  this.numOfPages = numOfPages;
  this.numOfCopies = numOfCopies;
}

function BoxLibrary(height, width, length, material) {
  const self = this;
  this.height = height;
  this.width = width;
  this.length = length;
  this.volume = length * width * height;

  this.material = material;

  this.content = [];
  this.numOfBooks = 0;

  this.getBooksCount = function () {
    return this.numOfBooks;
  };

  this.removeBook = function (title) {
    const found_idx = findBook(title);

    if (found_idx === -1) {
      throw new Error("book doesn't exist");
    }

    const curr_book = this.content[found_idx];
    if (curr_book.numOfCopies === 1) {
      this.numOfBooks--;
      return this.content.splice(found_idx, 1)[0];
    } else {
      curr_book.numOfCopies--;
      this.numOfBooks--;
      return curr_book;
    }
  };

  this.addBook = function (book) {
    if (!(book instanceof Book)) {
      throw new TypeError("Argument passed must be of type Book");
    }

    const updateCopies = book.numOfCopies;

    const found_idx = findBook(book.title);

    if (found_idx !== -1) {
      const stored_book = this.content[found_idx];
      stored_book.numOfCopies += updateCopies;
    } else {
      const newBookEntry = new Book(
        book.title,
        book.numOfChapters,
        book.author,
        book.numOfPages,
        book.publisher,
        book.numOfCopies
      );
      this.content.push(newBookEntry);
    }

    this.numOfBooks += updateCopies;
  };

  function findBook(title) {
    return self.content.findIndex((book) => book.title === title);
  }
}

console.log("\n--- TEST 1: Creating a Box ---");
const myBox = new BoxLibrary(10, 20, 10, "Wood");
console.log(`Box Volume: ${myBox.volume}`);
console.log(`Material: ${myBox.material}`);

console.log("\n--- TEST 2: Creating Books ---");

try {
  var book1 = new Book("Harry Potter", 17, "JK Rowling", 300, "Bloomsbury", 2);
  var book2 = new Book(
    "Lord of the Rings",
    20,
    "Tolkien",
    1000,
    "Allen & Unwin",
    1
  );
  console.log("Created valid books successfully.");
} catch (e) {
  console.error("Failed to create valid book:", e.message);
}

try {
  console.log("Test: Creating invalid book (negative pages)...");
  new Book("Bad Book", 10, "Author", -50, "Pub", 10);
} catch (e) {
  console.log("Caught expected error:", e.message);
}

try {
  console.log("Test: Creating invalid book (Publisher is a number)...");
  new Book("Bad Book", 10, "Author", 50, 12345, 10);
} catch (e) {
  console.log("Caught expected error:", e.message);
}

console.log("\n--- TEST 3: Adding Books (Logic Check) ---");

myBox.addBook(book1);
console.log(`Count (Should be 2): ${myBox.getBooksCount()}`);

myBox.addBook(book1);
console.log(
  `Count after duplicate add (Should be 4): ${myBox.getBooksCount()}`
);
myBox.addBook(book1);
console.log(
  `Count after duplicate add (Should be 6): ${myBox.getBooksCount()}`
);
console.log(
  `Harry Potter Copies (Should be 6): ${myBox.content[0].numOfCopies}`
);

myBox.addBook(book2);
console.log(`Count after new book (Should be 7): ${myBox.getBooksCount()}`);

console.log("\n--- TEST 4: Removing Books (Logic Check) ---");

myBox.removeBook("Harry Potter");
console.log(
  `Count after removing 1 copy (Should be 6): ${myBox.getBooksCount()}`
);
console.log(
  `Harry Potter Copies left (Should be 5): ${myBox.content[0].numOfCopies}`
);

try {
  myBox.removeBook("Spider-Man");
} catch (e) {
  console.log(`Caught expected error for missing book: ${e.message}`);
}

console.log("\n--- TEST 5: Full Removal Verification ---");

myBox.removeBook("Lord of the Rings");
console.log(
  `Count after removing last copy (Should be 5): ${myBox.getBooksCount()}`
);

console.log(`Remaining Book Title: ${myBox.content[0].title}`);
