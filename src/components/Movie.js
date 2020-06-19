import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Description = styled.p`
  height: 100%;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 1.2em;
  margin-bottom: 5px;
`;

const Year = styled.h5`
  margin-bottom: 5px;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Poster = styled.div`
  width: 120px;
  height: 100%;
  border-radius: 12px;

  background-image: url(${(props) => props.bgImage});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

const Genres = styled.ul`
  display: flex;
  margin-bottom: 5px;
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  word-break: break-all;
`;

const Container = styled.div`
  width: 450px;
  height: 200px;
  display: grid;
  padding: 10px;
  grid-template-columns: 135px auto;
  gap: 10px;
  border-radius: 15px;
  margin-bottom: 15px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const Movie = ({ movie }) => {
  const {
    title,
    year,
    genres,
    description_full,
    medium_cover_image: poster,
  } = movie;
  return (
    <Container>
      <Link to={{ pathname: `/movie/${movie.id}`, state: { movie } }}>
        <Image>
          <Poster bgImage={poster} />
        </Image>
      </Link>
      <Info>
        <Title>{title.length > 25 ? `${title.slice(0, 25)}...` : title}</Title>
        <Year>{year}</Year>
        <Genres>
          {genres &&
            genres.map((genre, index) => <Item key={index}>{genre}</Item>)}
        </Genres>
        <Description>
          {description_full.length > 200
            ? `${description_full.slice(0, 200)}...`
            : description_full}
        </Description>
      </Info>
    </Container>
  );
};

export default Movie;
