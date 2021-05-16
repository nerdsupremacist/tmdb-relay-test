import type { MovieOrShowResult_result$key } from './__generated__/MovieOrShowResult_result.graphql';

import React from 'react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import MovieListItem from 'MovieListItem';
import ShowListItem from 'ShowListItem';

type Props = {
    result: MovieOrShowResult_result$key,
}

function MovieOrShowResult(props: Props) {
    const result = useFragment(
        graphql`
            fragment MovieOrShowResult_result on MovieOrTV {
                __typename
                ... on Movie {
                    ...MovieListItem_movie
                }
                ... on TVShow {
                    ...ShowListItem_show
                }
            }
        `,
        props.result,
    );

    switch (result.__typename) {
    case 'Movie':
        return <MovieListItem movie={result} />;
    case 'TVShow':
        return <ShowListItem show={result} />;
    }

    return null;
}

export default MovieOrShowResult;
