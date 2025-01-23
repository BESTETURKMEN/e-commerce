import React from "react";
import "./Reviews.scss";
import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";

export default function Reviews() {
  return (
    <div className="tab-panel-reviews">
      <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
      <div className="comments">
        <ol className="comment-list">
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </ol>
      </div>
      <div className="review-form-wrapper">
        <h2>Add a review</h2>
        <ReviewForm />
      </div>
    </div>
  );
}
