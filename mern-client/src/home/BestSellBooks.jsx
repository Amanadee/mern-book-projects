import React, { useEffect, useState } from 'react';
import BookCards from './BookCards'; // Import the BookCards component

const FavouriteBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books")
            .then(res => res.json())
            .then(data => setBooks(data)); // Update the state with fetched data
    }, []);

    return (
        <div>
            <BookCards books={books} headline="Best Seller Books" />
        </div>
    )
}

export default FavouriteBooks;
