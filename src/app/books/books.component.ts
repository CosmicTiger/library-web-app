import { Component } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component ({
  selector: 'app-books',
  templateUrl: './books.component.html'
})


export class BooksComponent {

  books = [];

  constructor(private booksService: BooksService) {
    this.books = booksService.getBooks();
  }

  deleteBook(book) {
  }

  saveBook(f) {
    if (f.valid) {
    }
  }
};
