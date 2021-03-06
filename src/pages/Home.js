import React, {useContext} from "react";

import { Link } from "react-router-dom";

import { MovieContext } from "../context/MovieContext";
import Card from "../components/Card";
import "../styles/Home.css";


const Home = () => {
    const { movies} = useContext(MovieContext);

    return (
        <div className="home-container">

                <div className="movies">
                    {movies?.map((movie) => {
                        return (
                            <Link
                                to={`movies/${movie.id}`}
                                className="text-link"
                                key={movie.id}
                            >
                                <Card
                                    key={movie.id}
                                    image={movie.image}
                                    title={movie.title}
                                />
                            </Link>
                        );
                    })}
                </div>

        </div>
    );
};
export default Home;
