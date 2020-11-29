function findAccountById(accounts, id) {
  const findAccount = Object.values(accounts).find(
    (account) => account.id === id
  );
  return findAccount;
}

function sortAccountsByLastName(accounts) {
  const sortAccounts = Object.values(accounts).sort((accA, AccB) =>
    accA.name.last > AccB.name.last ? 1 : -1
  );
  return sortAccounts;
}

function numberOfBorrows(account, books) {
  
  const {id:userId} = account

  const bookBorrows = Object.values(books)
    .map((book) => book.borrows)
    .flat()
    .filter((borrow) => borrow.id === userId);
  return bookBorrows.length;
}

function getBooksPossessedByAccount(account, books, authors) {
  const {id:userId} = account;
  const borrowedBooks = books.filter(
    (book) =>
      book.borrows.findIndex(
        (borrow) => borrow.id === userId && borrow.returned === false
      ) != -1
  );
  

  const addAuthor = borrowedBooks.map((book) => {
    book.author = authors.find((author) => author.id === book.authorId);
    return book;
  });
  console.log(addAuthor);
  return addAuthor
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
