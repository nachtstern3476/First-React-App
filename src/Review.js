import React from 'react';
import './App.css';

function ReviewItems() {
    const users = [
      {
        "id": 1,
        "name": "Masayoshi",
        "review": "Harganya murah tapi kualitas bagus dan sesuai gambar",
        "profile": "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=940"
      },
      {
        "id": 2,
        "name": "Masayosha",
        "review": "Harganya murah tapi kualitas bagus dan sesuai gambar",
        "profile": "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        "id": 3,
        "name": "Masayoshe",
        "review": "Harganya murah tapi kualitas bagus dan sesuai gambar",
        "profile": "https://images.pexels.com/photos/3981337/pexels-photo-3981337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ];
  
    const listReview = users.map((itemReview)=>
      <div key={itemReview.id} className="item">
        <img src={itemReview.profile} alt="user"></img>
        <div className="review">
          <h3>{itemReview.name}</h3>
          <p>{itemReview.review}</p>
        </div>
      </div>
    );
  
    return (
      <div className="App-review-box">
        <h2>Review</h2>
        {listReview}
      </div>
    );
}

export default ReviewItems;