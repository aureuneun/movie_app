import React from "react";
import axios from "axios";
import styled from "styled-components";
import Loader from "../components/Loader";
import Movie from "../components/Movie";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Detail extends React.Component {
  state = {
    isLoading: true,
    movie: "",
  };
  getMovie = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const {
      data: {
        data: { movie },
      },
    } = await axios.get(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    console.log(movie);
    this.setState({ movie, isLoading: false });
  };
  componentDidMount() {
    this.getMovie();
  }
  render() {
    const { movie, isLoading } = this.state;
    return (
      <Container>
        {isLoading ? <Loader /> : <Movie key={movie.id} movie={movie} />}
      </Container>
    );
  }
}
export default Detail;
