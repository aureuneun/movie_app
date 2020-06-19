import React from "react";
import styled from "styled-components";
import axios from "axios";
import Movie from "../components/Movie";
import Loader from "../components/Loader";

const Container = styled.div``;

const Movies = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
`;

class Home extends React.Component {
  constructor() {
    super();
    console.log("Constructor");
  }
  state = {
    isLoading: true,
    moives: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    console.log("Mount");
    this.getMovies();
  }
  componentDidUpdate() {
    console.log("Update");
  }
  componentWillUnmount() {
    console.log("Unmount");
  }
  render() {
    console.log("Render");
    const { isLoading, movies } = this.state;
    return (
      <Container>
        {console.log(isLoading)}
        {isLoading ? (
          <Loader />
        ) : (
          <Movies>
            {movies &&
              movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
          </Movies>
        )}
      </Container>
    );
  }
}

export default Home;
