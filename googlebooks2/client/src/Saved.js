import React, { Component } from 'react'; 
import Header from './Header';



class Books extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        this.getBooks()
    }

    getBooks = () => {
        fetch('/api/books')
            .then(res => res.json())
            .then(books => {
                this.setState({
                    books: books
                })
            })
    }

    handleDelete = (bookId) => {
        fetch('/api/books/' + bookId, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(() => this.setState({ books: [] }))
            .then(() => this.getBooks())
    }

    render () {
        return (
            
            <div>
                <Header saved handleSearch = {this.handleSearch}/>
                {this.state.books.map(book => (
                    <div key={book._id}>
                        <a href={book.link}>{book.title}</a>
                        <div>{book.authors}</div>
                        <div>{book.description}</div>
                        <img src= {book.image} />
                        <button onClick={() => this.handleDelete(book._id)}>Delete</button>
                        <hr/> 
                    </div>
                ))}
            </div>
        );
    }
}

export default Books;