import { Component } from '@angular/core';

@Component ({
  selector: 'app-books',
  templateUrl: './books.component.html'
})


export class BooksComponent {
  books = ['Mathematics 1', 'Computational Complexion', 'Book 3'];
};
