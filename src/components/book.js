import React from "react";

export default function Book(props) {
  return (
    <div className="book-container">
      <div className="book-name-author">
        <h2 className="title">{props.bookData.name}</h2>
        <h3 className="author">{props.bookData.author}</h3>
      </div>
      <div className="book-des-price">
        <p className="price">{props.bookData.price}</p>
        <h5 className="description">{props.bookData.description}</h5>
      </div>
    </div>
  );
}
