import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeList extends Component {
    //on load, get movies from db
    componentDidMount=()=>{
        this.props.dispatch({ type: "GET_MOVIES" });
    }

    render() {
        return (
            <section className="HomeList">
                {this.props.reduxMovieState.map((movie)=>
                    <article>
                        <h2>{movie.title}</h2>
                        <img src={movie.poster} alt={`movie poster for ${movie.title}`}/>
                    </article>
                )}
            </section>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxMovieState: reduxState.movies
})
export default connect(putReduxStateOnProps)(HomeList);
