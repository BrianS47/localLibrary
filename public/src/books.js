function findAuthorById(authors, id) {

  const findAuthor = authors.find((author) => author.id === id)
  return findAuthor
}

function findBookById(books, id) {

const findBook = books.find(book => book.id === id )
return findBook


}

function partitionBooksByBorrowedStatus(books) {
const returnedBooksArr = []
const borrowedBooks = books.filter(book => book.borrows.find(borrow => borrow.returned === false))
const returnedBooks = books.forEach(book => {
  if(book.borrows.every(borrow => borrow.returned === true)) {
    returnedBooksArr.push(book)
  }
})



const allBooks = []
allBooks.push(borrowedBooks,returnedBooksArr)
return allBooks

}

function getBorrowersForBook(book, accounts) {
const borrows = book.borrows

const borrowers = borrows.map(borrow => borrow.id)
const borrowerAccount = accounts.filter(account => borrowers.includes(account.id))

const addReturned = borrowerAccount.map((account) => {
account.returned = borrows.every(borrow => borrow.returned)
return account
}) 
return addReturned 
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
