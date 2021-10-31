module.exports = function() {
    const book = JSON.parse(fs.readFileSync(`${__dirname}/../data/books.json`, "utf-8"));
    const users = JSON.parse(fs.readFileSync(`${__dirname}/../data/users.json`, "utf-8"));
    const borrowedBooks = JSON.parse(fs.readFileSync(`${__dirname}/../data/borrowedBooks.json`, "utf-8"));
}