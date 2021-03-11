import { Subject } from 'rxjs';

export class BooksService {

  booksSubject = new Subject();

  private books = ["Vaxi's Books", "Arithmetic Book", "The Graphic Magazine"];

  addBooks(bookName: string) {
    this.books.push(bookName);
    this.booksSubject.next();
  }

  deleteBook(bookName: string) {
    this.books = this.books.filter(x => x !== bookName);
    this.booksSubject.next();
  }

  getBooks() {
    return [...this.books];
  }
}
