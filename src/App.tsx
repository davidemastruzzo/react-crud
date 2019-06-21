import React from 'react';
import './App.scss';
import {Display} from "./views/Display/Display"
import {Book} from "./models/Book";

interface State {
    books: Set<Book>;
}

export class App extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props);

        this.state = {
            books: new Set([
                {
                    id: 1,
                    author: "Stephen Chbosky" ,
                    title: "The Perks of being a Wallflower",
                    pages: 256,
                    releasedAt: new Date(1999,2,1)
                },
                {
                    id: 2,
                    author: "Eckhart Tolle" ,
                    title: "The Power of Now",
                    pages: 236,
                    releasedAt: new Date(1997, 1 ,1)
                },
            ])
        };
        this.deleteBook = this.deleteBook.bind(this);
    }

    render(): React.ReactNode {
        return (
            <div className="App">
                <Display books={this.state.books} onDelete={this.deleteBook}/>
            </div>
        )
    }

    private deleteBook(book: Book) {
        this.state.books.delete(book);
    }
}
