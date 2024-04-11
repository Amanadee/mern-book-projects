import React, { useState } from 'react'
import axios from 'axios';

const Writer = () => {
  // State to manage the value of the textarea
  const [textValue, setTextValue] = useState('');

  // Function to handle changes in the textarea
  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  const saveBook = ()=>{
    console.log('>>>save ', textValue)
    let postData = {
        authorName: "", 
        imageURL: "", 
        category: "", 
        bookDescription: "", 
        bookTitle: "", 
        bookPageURI: "", 
        bookContent: textValue
    }
    axios.post('http://localhost:5000/save-book', postData)
      .then(response => {
        console.log('Post successful:', response.data);
        // Do something with the response if needed
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors
      });

  }

  return (
    <div className="writer_con">
            <div>
                <textarea
                    className="writer_area"
                    value={textValue} // Set the value of the textarea
                    onChange={handleChange} // Handle changes in the textarea
                    rows={20} // Number of visible text lines
                    cols={40} // Number of visible text columns
                    placeholder="Enter your text here..." // Placeholder text
                />

            </div>
            <div className="button_con">
                <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
                Draft
                </button>
                <button onClick={(e)=>{
                    saveBook();
                }} className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
                Save
                </button>
                <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
                Publish
                </button>
            </div>
    </div>
  );
}

export default Writer;