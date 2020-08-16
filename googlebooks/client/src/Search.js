import React, { Component } from 'react'; 

class Search extends Component {
    state = {
        books: []
    }

    handleSearch = (event) => {
        const book = event.target.value;
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + book)
            .then(res => res.json())
            .then(books => {
                this.setState({
                    books: books.items
                })
            })
    }

    handleSave = (book) => {
        fetch('/api/books', {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
        })
        .then(() => console.log('Saved'))
        .catch(error => {
            console.log(error)
        })
    }

    render () {
        console.log(this.state);
        return (
            <div>
                <input type="text" onChange={this.handleSearch} />
                {this.state.books.map(book => (
                    <div key={book.id}>
                        <div>{book.volumeInfo.title}</div>
                        <div>{book.volumeInfo.authors}</div>
                        <div>{book.volumeInfo.description}</div>
                        <div>{book.volumeInfo.infoLink}</div>
                        <div>{book.volumeInfo?.imageLinks?.thumbnail}</div>
                        <button
                            onClick={() => {
                                this.handleSave({
                                    title: book.volumeInfo.title,
                                    authors: book.volumeInfo.authors,
                                    description: book.volumeInfo.description,
                                    image: book.volumeInfo?.imageLinks?.thumbnail,
                                    link: book.volumeInfo.infoLink
                                })
                            }}
                        >
                            Save
                        </button>
                    </div>
                ))}
            </div>
        );
    }
}

export default Search;