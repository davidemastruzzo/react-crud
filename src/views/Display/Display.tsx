import * as React from "react";
import {Book} from "../../models/Book";
import './Display.scss'

interface Props {
    books: Book[];
}

export class Display extends React.Component<Props, {}> {

    public constructor(props: Props) {
        super(props);
    };

    public render() {

        return (
            <div className="books">
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Pages</th>
                        <th>Released At</th>
                    </tr>
                    {this.props.books.map((b) => {
                        return (
                            <tr>
                                <td>{b.id}</td>
                                <td>{b.author}</td>
                                <td>{b.title}</td>
                                <td>{b.pages}</td>
                                <td>{b.releasedAt.getDay() + "/" +b.releasedAt.getMonth() + "/" + b.releasedAt.getFullYear()}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        );
    };
}
