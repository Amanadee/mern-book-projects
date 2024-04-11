import React,{useEffect,useState} from 'react'
import BookCards from '../home/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books")
            .then(res => res.json())
            .then(data => setBooks(data)); // Update the state with fetched data
    }, []);

    return (
        <div>
            <BookCards books={books} headline="Other Data" />
        </div>
    )
}

export default OtherBooks