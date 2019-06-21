import * as React from "react";
import {Book} from "../../models/Book";
import './Display.scss'

interface Props {
    books: Array<Book>;
    onDelete: (book: Book) => void;
}

export class Display extends React.Component<Props> {

    public constructor(props: Props) {
        super(props);
    };

    public render() {

        return (
            <div className="books">
                <table>
                    <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Pages</th>
                        <th>Released At</th>
                    </tr>
                    {this.props.books.map((book) => {
                        return (
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.author}</td>
                                <td>{book.title}</td>
                                <td>{book.pages}</td>
                                <td>{book.releasedAt.getDay() + "/" + book.releasedAt.getMonth() + "/" + book.releasedAt.getFullYear()}</td>
                                <td>
                                    <button onClick={() => this.onDelete(book)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <button>
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>

        );
    };

    private onDelete(book: Book) {
        this.props.onDelete(book);
    }
}
