import React from 'react';
import { Container } from 'react-bootstrap';

function LoadingSpinner() {
  return (
    <Container> 
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>

    </Container>
  )
}

export default LoadingSpinner