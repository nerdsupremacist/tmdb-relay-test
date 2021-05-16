import type { HomeQuery as HomeQueryType } from './__generated__/HomeQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';

import HomeQuery from './__generated__/HomeQuery.graphql';

import React, { useEffect, useRef } from 'react';
import { Container, Text, VStack } from '@chakra-ui/react';

import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LoadingSuspense from 'LoadingSuspense';
import NowPlayingMovies from './NowPlayingMovies';
import PopularMovies from './PopularMovies';
import PopularShows from './PopularShows';
import ShowsOnTheAir from './ShowsOnTheAir';
import TopRatedMovies from './TopRatedMovies';
import TopRatedShows from './TopRatedShows';
import TrendingMovies from './TrendingMovies';
import TrendingShows from './TrendingShows';

type LoadedProps = {
    data: PreloadedQuery<HomeQueryType>
}

function Home(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
            query HomeQuery {
                ...TrendingMovies_data @arguments(count: 7)
                ...TrendingShows_data @arguments(count: 7)
                ...PopularMovies_data @arguments(count: 7)
                ...PopularShows_data @arguments(count: 7)
                ...NowPlayingMovies_data @arguments(count: 7)
                ...ShowsOnTheAir_data @arguments(count: 7)
                ...TopRatedMovies_data @arguments(count: 7)
                ...TopRatedShows_data @arguments(count: 7)
            }
        `,
        props.data,
    );

    return (
        <Container maxW="container.lg" paddingBottom={8} paddingTop={8}>
            <VStack align="baseline" spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                    Trending Movies
                </Text>
                <TrendingMovies data={data} />
                <Text fontSize="xl" fontWeight="bold">
                    Trending TV Shows
                </Text>
                <TrendingShows data={data} />
                <Text fontSize="xl" fontWeight="bold">
                    Popular Movies
                </Text>
                <PopularMovies data={data} />
                <Text fontSize="xl" fontWeight="bold">
                    Popular TV Shows
                </Text>
                <PopularShows data={data} />
                <Text fontSize="xl" fontWeight="bold">
                    Now Playing Movies
                </Text>
                <NowPlayingMovies data={data} />
                <Text fontSize="xl" fontWeight="bold">
                    TV Shows on the Air this Week
                </Text>
                <ShowsOnTheAir data={data} />
                <Text fontSize="xl" fontWeight="bold">
                    Top Rated Movies
                </Text>
                <TopRatedMovies data={data} />
                <Text fontSize="xl" fontWeight="bold">
                    Top Rated TV Shows
                </Text>
                <TopRatedShows data={data} />
            </VStack>
        </Container>
    );
}

function HomeWrapper() {
    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<HomeQueryType>(HomeQuery);

    const error = useRef<ErrorBoundary>(null);
    useEffect(() => {
        error.current?.reset();
        loadQuery({ });
        return () => {
            dispose();
        };
    }, [dispose, loadQuery]);

    return (
        <LoadingSuspense boundaryRef={error}>
            {data != null && <Home data={data}/>}
        </LoadingSuspense>
    );
}

export default HomeWrapper;
