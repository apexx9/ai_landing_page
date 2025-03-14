import React from "react";


const ReviewDetails = async ({params} : {params: Promise<{featureId: String; reviewId: String}>}) => {
    const {featureId, reviewId} = (await params);
    return(
        <div className="review-details">
            <h1>Review Details of {featureId} and {reviewId}</h1>
            <p>Some details of the review</p>
        </div>
    )
}
export default ReviewDetails;