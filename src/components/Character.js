import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 1px solid #e2e2e2;
  box-shadow: 4px 4px 5px #e2e2e2;
  border-radius: 3px;
  width: 30%;
  margin: 1rem 0;

  img {
    width: 100%;
    box-shadow: 0 4px 5px #e2e2e2;
  }

  h4 {
    font-size: 2.2rem;
    padding: 0 2rem;
  }

  .info {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid gray;
    }
    .row:last-child {
      border-bottom: none;
    }

    span {
      font-size: 1.4rem;
      color: gray;
    }

    p {
      font-size: 1.8rem;
    }
  }
`;

const Character = ({ character }) => {
  return (
    <Div>
      <img src={character.image} alt={character.name} />
      <h4>{character.name}</h4>
      <div className='info'>
        <div className='row'>
          <span>STATUS</span>
          <p>{character.status}</p>
        </div>
        <div className='row'>
          <span>SPECIES</span>
          <p>{character.species}</p>
        </div>
        <div className='row'>
          <span>GENDER</span>
          <p>{character.gender}</p>
        </div>
      </div>
    </Div>
  );
};

export default Character;
