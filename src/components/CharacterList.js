import React from 'react';
import { connect } from 'react-redux';
import { fetchCharactersData } from '../actions';
import Character from './Character';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Button = styled.button`
  background: #852aaf;
  padding: 1rem;
  font-size: 1.6rem;
  color: white;
  border: none;
  border-radius: 6px;
  box-shadow: 4px 4px 5px #5d1e7a;
  cursor: pointer;
  margin: 2rem auto;
  outline: none;
`;

const CharacterList = props => {
  const fetchCharacters = e => {
    e.preventDefault();
    props.fetchCharactersData();
  };

  return (
    <>
      <Button onClick={fetchCharacters}>Fetch Characters</Button>
      <Container>
        {props.isFetching && <p>Loading...</p>}
        {props.characters.map(character => (
          <Character key={character.id} character={character} />
        ))}
      </Container>
      {props.error && <p>{props.error}</p>}
    </>
  );
};

const mapStateToProps = state => ({
  error: state.error,
  characters: state.characters,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  { fetchCharactersData }
)(CharacterList);
