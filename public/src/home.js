function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
  let borrowedBooks = 0;

  const borrows = books.map((book) => book.borrows).flat();

  const addIfFalse = borrows.forEach((borrow) => {
    if (borrow.returned === false) {
      borrowedBooks += 1;
    }
  });
  return borrowedBooks;
}

function getMostCommonGenres(books) {
  const mostCommonGenres = books.reduce((acc, book) => {
    !acc[book.genre] ? acc[book.genre] = 1 : acc[book.genre]++
    

    return acc;
  }, {});

  const commonGenres = Object.entries(mostCommonGenres).map((genre) => {
    return {
      name: genre[0],
      count: genre[1],
    };
  });
  const sortGenres = commonGenres.sort((a, b) => b.count - a.count);
  const topFive = sortGenres.slice(0, 5);
  return topFive;
}
function getMostPopularBooks(books) {
  const popularBooks = books.map((book) => {
    return {
      name: book.title,
      count: book.borrows.length,
    };
  });
  const sortBooks = popularBooks.sort((a, b) => b.count - a.count);
  const topFive = sortBooks.slice(0, 5);
  return topFive;
}

function getMostPopularAuthors(books, authors) {
const getAuthors = books.reduce((acc, book)=> {
if(!acc[book.authorId]) {
  acc[book.authorId] = book.borrows.length
} else {
  acc[book.authorId] += book.borrows.length
} 
return acc
}, {}) 
const authorIds = authors.map((author) => {
  return {
    name : `${author.name.first} ${author.name.last}`,
    id: author.id   
  }
})
const mostPopular = (getAuthors,authorIds) => {
  const returnArr = []
  authorIds.forEach(author => {
    returnArr.push({
      name: author.name,
      count: getAuthors[author.id.toString()]
    })
  })
  return returnArr
}
 const mostPopularAuthors = mostPopular(getAuthors,authorIds)
 const sortMostPopular = mostPopularAuthors.sort((a,b) => b.count - a.count)
 const topFive = sortMostPopular.slice(0,5)

 return topFive 
} 

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
