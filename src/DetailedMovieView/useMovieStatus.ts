import type { useMovieStatus_movie$key } from './__generated__/useMovieStatus_movie.graphql';
import type { BadgeProps } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type MovieStatusResult = [string, BadgeProps['colorScheme']] | null

function useMovieStatus(movie: useMovieStatus_movie$key): MovieStatusResult {
    const decoded = useFragment(
        graphql`
            fragment useMovieStatus_movie on Movie {
                status
            }
        `,
        movie,
    );
    
    switch (decoded.status) {
    case 'Cancelled':
        return ['Cancelled', 'teal'];
    case 'InProduction':
        return ['In Production', 'green'];
    case 'Planned':
        return ['Planned', 'yellow'];
    case 'Rumored':
        return ['Rumored', 'blue'];
    case 'PostProduction':
        return ['In Post-production', 'red'];
    case 'Released':
        return null;
    default:
        return null;
    }
}

export default useMovieStatus;
