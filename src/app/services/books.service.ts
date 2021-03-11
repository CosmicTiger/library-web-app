import { Subject } from 'rxjs';

export class BooksService {

  booksSubject = new Subject();

  private books = ["Vaxi's Books", "Arithmetic Book", "The Graphic Magazine"];

  addBooks(bookName: string) {
    this.books.push(bookName);
    this.booksSubject.next();
  }

  getBooks() {
    return [...this.books];
  }
}
