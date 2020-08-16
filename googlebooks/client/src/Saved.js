import React, { Component } from 'react'; 



class Books extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        fetch('/api/books')
            .then(res => res.json())
            .then(books => {
                this.setState({
                    books: books
                })
            })
    }

    render () {
        return (
            <div>
                {this.state.books.map(book => (
                    <div key={book._id}>
                        <div>{book.title}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Books;