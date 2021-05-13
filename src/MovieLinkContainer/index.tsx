import type { MovieLinkContainer_movie$key } from './__generated__/MovieLinkContainer_movie.graphql';

import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
    movie: MovieLinkContainer_movie$key,
    children: ReactNode | ReactNode[],
    onClick?: () => void,
}

function MovieLinkContainer(props: Props) {
    const movie = useFragment(
        graphql`
            fragment MovieLinkContainer_movie on Movie {
                id
            }
        `,
        props.movie,
    );

    return (
        <Link onClick={() => props.onClick?.()} to={`/movie/${movie.id}`}>
            {props.children}
        </Link>
    );
}

export default MovieLinkContainer;
