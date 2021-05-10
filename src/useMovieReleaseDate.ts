import type { useMovieReleaseDate_movie$key } from './__generated__/useMovieReleaseDate_movie.graphql';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

function useMovieReleaseDate(movie: useMovieReleaseDate_movie$key) {
    const decoded = useFragment(
        graphql`
            fragment useMovieReleaseDate_movie on Movie {
                releaseDate
            }
        `,
        movie,
    );

    if (decoded.releaseDate != null) {
        return new Date(decoded.releaseDate);
    }

    return null;
}

export default useMovieReleaseDate;
