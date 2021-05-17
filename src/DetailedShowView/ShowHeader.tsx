import type { ShowHeader_show$key } from './__generated__/ShowHeader_show.graphql';

import React from 'react';
import {
    HStack,
    Image,
    Text,
    VStack,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import GenreTag from 'GenreTag';
import ShowRatingCircle from './ShowRatingCircle';

import useShowAirDate from './useShowAirDate';

import { POSTER_PLACEHOLDER } from 'utils/constants';

type Props = {
    show: ShowHeader_show$key,
}

function ShowHeader(props: Props) {
    const show = useFragment(
        graphql`
            fragment ShowHeader_show on TVShow {
                ...ShowRatingCircle_show
                name
                poster(size: W342)
                episodeRunTime
                ...useShowAirDate_show
                genres {
                    ...GenreTag_genre
                }
                networks {
                    name
                }
            }
        `,
        props.show,
    );

    const poster = show.poster ?? POSTER_PLACEHOLDER;
    const airDate = useShowAirDate(show);
    const airDateYear = airDate?.getFullYear();
    const episodeRunTime = show.episodeRunTime.length > 0 ?
        show.episodeRunTime.reduce((acc, it) => acc + it, 0) / show.episodeRunTime.length :
        null;

    return (
        <HStack align="flex-end" spacing={4}>
            <Image
                borderRadius="lg"
                borderWidth="1px"
                maxW="200"
                minW="100"
                objectFit="cover"
                overflow="hidden"
                shadow="xl"
                src={poster}
            />
            <VStack align="baseline" spacing={2}>
                <VStack align="baseline" spacing={0}>
                    <ShowRatingCircle show={show} />
                    <Text fontSize="3xl" fontWeight="bold">
                        {show.name}
                    </Text>
                    <HStack divider={<Text fontSize="xl" fontWeight="light" padding={1}>·</Text>}>
                        {
                            airDateYear != null && <Text fontSize="md" fontWeight="light">
                                {airDateYear}
                            </Text>
                        }
                        {
                            episodeRunTime != null && <Text fontSize="md" fontWeight="light">
                                {episodeRunTime.toFixed(0)} min
                            </Text>
                        }
                        {
                            show.networks.length > 0 && <Text fontSize="md" fontWeight="light">
                                {show.networks[0].name}
                            </Text>
                        }
                    </HStack>
                </VStack>
                <Wrap spacing={2}>
                    {
                        show.genres.map((genre, index) => {
                            return <WrapItem key={`genre_${index}`}><GenreTag data={genre} /></WrapItem>;
                        })
                    }
                </Wrap>
            </VStack>
        </HStack>
    );
}

export default ShowHeader;
