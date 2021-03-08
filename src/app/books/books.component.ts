import { Component } from '@angular/core';

@Component ({
  selector: 'app-books',
  templateUrl: './books.component.html'
})


export class BooksComponent {
  books = ['Mathematics 1', 'Computational Complexion', 'Basic Algebra'];

  deleteBook(book) {
    this.books = this.books.filter(p => p !== book);
  }

  saveBook(f) {
    if (f.valid) {
      this.books.push(f.value.bookName);
    }
  }
};
