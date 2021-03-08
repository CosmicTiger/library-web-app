export class BooksService {
  private books = ["Vaxi's Books", "Arithmetic Book", "The Graphic Magazine"];

  addBooks(bookName: string) {
    this.books.push(bookName);
  }

  getBooks() {
    return [...this.books];
  }
}
