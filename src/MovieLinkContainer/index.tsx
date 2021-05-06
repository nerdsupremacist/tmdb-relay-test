import type { MovieLinkContainer_IMovie$key } from './__generated__/MovieLinkContainer_IMovie.graphql';

import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
    movie: MovieLinkContainer_IMovie$key,
    children: ReactNode | ReactNode[],
}

function MovieLinkContainer(props: Props) {
    const movie = useFragment(
        graphql`
            fragment MovieLinkContainer_IMovie on IMovie {
                movieId: id
            }
        `,
        props.movie,
    );

    return (
        <Link to={`/movie/${movie.movieId}`}>
            {props.children}
        </Link>
    );
}

export default MovieLinkContainer;
