import Stars from "./Stars";

const Review = ({review}) => {
    return (
        <li>
            <Stars stars={review.stars} />
            <p className="review">{review.comment}</p>
        </li>
    );
}
export default Review;