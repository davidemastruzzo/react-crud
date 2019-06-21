import * as React from "react";
import {Book} from "../../models/Book";

interface Props {
    book?: Book;
}

interface State {
    book: Book;
}

export class Form extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            book: this.props.book ? this.props.book : {
                author: '',
                title: 'Basic Title',
                pages: 0,
                releasedAt: new Date()
            } as Book
        };
    };

    render() {
        return (
            <div>{this.state.book.title}</div>
        );
    }
}



