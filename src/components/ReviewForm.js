import React from "react";
import Stars from "./Stars";

const useState = React.useState

const ReviewForm = ({submitHandler}) => {
  return (
      <div className="review-form">
          <form onSubmit = {submitHandler}>
              <label>Stars:</label>
                <Stars name = "stars" stars={null} />
                    <br></br>
                <label>Comment:</label>
                    <br></br>
                <textarea rows="2" cols="25" name="comment" /> 
                    <br></br>
                <button type="submit">Submit</button>
          </form>
      </div>
  );
}
export default ReviewForm;