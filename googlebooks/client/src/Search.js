import React, { Component } from 'react'; 
import Header from './Header';

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
        alert('SAVED!')
        fetch('/api/books', {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
        })
    }

    render () {
        console.log(this.state);
        return (
            <div>
                 <Header handleSearch = {this.handleSearch}/>
                
                <div style = {{marginTop: '25px'}}>{this.state.books.map(book => (
                    <div key={book.id}>
                        <a href={book.volumeInfo.infoLink}>{book.volumeInfo.title}</a>
                        <div>{book.volumeInfo.authors}</div>
                        <div>{book.volumeInfo.description}</div>
                        <img src= {book.volumeInfo?.imageLinks?.thumbnail}/>
                        <button
                            onClick={() => this.handleSave({
                                title: book.volumeInfo.title,
                                authors: book.volumeInfo.authors,
                                description: book.volumeInfo.description,
                                image: book.volumeInfo?.imageLinks?.thumbnail,
                                link: book.volumeInfo.infoLink
                            })}
                        >
                            Save
                        </button> <hr/> 
                    </div>
                ))}
                </div>
            </div>
        );
    }
}

export default Search;