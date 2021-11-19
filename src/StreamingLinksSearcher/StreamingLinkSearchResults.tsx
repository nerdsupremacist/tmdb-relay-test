import type {
    StreamingLinkSearchResultsQuery as StreamingLinkSearchResultsQueryType,
} from './__generated__/StreamingLinkSearchResultsQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';

import StreamingLinkSearchResultsQuery from './__generated__/StreamingLinkSearchResultsQuery.graphql';

import React, { useEffect, useRef } from 'react';
import { Link, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';

import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LoadingSuspense from 'LoadingSuspense';
import StreamingLink from 'StreamingLink';
import { useSelectedCountries, useSelectedProviders } from './StreamingLinkFormDataProvider';

type LoadedProps = {
    data: PreloadedQuery<StreamingLinkSearchResultsQueryType>
}

type Props = {
    id: string,
}

function StreamingLinkSearchResults(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
            query StreamingLinkSearchResultsQuery(
                $id: ID!
                $providers: [ID!]!
                $countries: [ID!]!
            ) {
                node(id: $id) {
                    ... on IStreamable {
                        searchStreamingOptions(
                            providers: $providers,
                            countries: $countries,
                        ) {
                            bestOption {
                                country {
                                    emoji
                                }
                                option {
                                    ...StreamingLink_option
                                }
                            }
                        }
                    }
                }
            }
        `,
        props.data,
    );

    const options = data.node?.searchStreamingOptions?.map(option => option.bestOption);
    if (options == null || options.length < 1) {
        return (
            <VStack padding="4vh" w="100%">
                <Text fontSize="2xl" fontWeight="bold">No results...</Text>
            </VStack>
        );
    }

    return (
        <VStack align="start" padding="4vh" w="100%">
            <Text fontSize="2xl" fontWeight="bold">Streaming Links</Text>
            <Wrap spacing={2} >
                {
                    options.map((option, index) => {
                        return (
                            <WrapItem key={`option_${index}`}>
                                <VStack>
                                    <StreamingLink option={option.option}/>
                                    <Text>{option.country.emoji}</Text>
                                </VStack>
                            </WrapItem>
                        );
                    })
                }
            </Wrap>
            <Text align="right" fontSize="sm" fontWeight="light" w="100%">
                Links powered by <Link href="">JustWatch</Link>
            </Text>
        </VStack>
    );
}

function StreamingLinkSearchResultsWrapper(props: Props) {
    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<StreamingLinkSearchResultsQueryType>(StreamingLinkSearchResultsQuery);

    const id = props.id;
    const providers = useSelectedProviders();
    const countries = useSelectedCountries();

    const error = useRef<ErrorBoundary>(null);
    useEffect(() => {
        error.current?.reset();
        loadQuery({
            countries,
            id,
            providers,
        });
        return () => {
            dispose();
        };
    }, [dispose, loadQuery, id, countries, providers]);

    return (
        <LoadingSuspense boundaryRef={error}>
            {data != null && <StreamingLinkSearchResults data={data}/>}
        </LoadingSuspense>
    );
}

export default StreamingLinkSearchResultsWrapper;
