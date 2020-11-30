
const returnLength = (list) => {
  return list.length
}


const makeTopFive = (list) => {
  return list.slice(0,5)
}

const sortMostToLeast = (list) => {
  return list.sort((a,b) => b.count - a.count)
}

function totalBooksCount(books) {
  return returnLength(books)
}

function totalAccountsCount(accounts) {
  return returnLength(accounts);
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
  const sortGenres = sortMostToLeast(commonGenres);
  const topFiveGenres = makeTopFive(sortGenres)
  return topFiveGenres;
}
function getMostPopularBooks(books) {
  const popularBooks = books.map((book) => {
    return {
      name: book.title,
      count: book.borrows.length,
    };
  });
  const sortBooks = sortMostToLeast(popularBooks)
  const topFiveBooks = makeTopFive(sortBooks);
  return topFiveBooks;
}

function getMostPopularAuthors(books, authors) {
const getAuthors = books.reduce((acc, book)=> {
!acc[book.authorId] ? acc[book.authorId] = book.borrows.length : acc[book.authorId] += book.borrows.length
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
 const sortMostPopular = sortMostToLeast(mostPopularAuthors)
 const topFiveAuthors = makeTopFive(sortMostPopular)

 return topFiveAuthors
} 

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
