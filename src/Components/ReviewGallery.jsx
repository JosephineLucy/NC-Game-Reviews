import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";
import QueryBar from "./QueryBar.jsx";

export default function ReviewGallery() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("https://josies-games.herokuapp.com/api/reviews")
      .then((results) => {
        setReviews(results.data.reviews);
      });
  }, []);

  return (
    <section className="Review-Gallery">
      <QueryBar reviews={reviews} setReviews={setReviews} />
      {reviews.map((review) => {
        return (
          <ReviewCard
            key={review.review_id}
            review={review}
            ID={review.review_id}
            title={review.title}
            designer={review.designer}
            owner={review.owner}
            image={review.review_img_url}
            body={review.review_body}
            category={review.category}
            dateCreated={review.created_at}
            votes={review.votes}
          />
        );
      })}
    </section>
  );
}