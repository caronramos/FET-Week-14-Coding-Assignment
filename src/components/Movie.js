import React from 'react';
import { Card } from 'react-bootstrap';
import ReviewList from './ReviewList';
import Stars from './Stars';

export default class Movie extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      released: props.released,
      ratingImage: props.ratingImage,
      imdbRating: props.imdbRating,
      summary: props.summary,
      image: props.image
    };
  }

  render() {
    return (
      <Card style={{ width: '35rem' }}>
        <Card.Header>{this.state.title}</Card.Header>
        <Card.Img variant="top" src={this.state.image} />
        <Card.Body>
          <div className="cardBody">
            {this.state.released}
            {this.state.summary}
            <br />
            {this.state.ratingImage}
            <span class="tab"></span>
            {this.state.imdbRating}
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Stars />
          <ReviewList />
        </Card.Footer>
      </Card>
    )
	}
}