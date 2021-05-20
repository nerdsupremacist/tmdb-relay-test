import type { VideoCard_video$key } from './__generated__/VideoCard_video.graphql';

import React from 'react';
import YouTube from 'react-youtube';
import {
    Image,
    LinkBox,
    Modal,
    ModalContent,
    ModalOverlay,
    Text,
    useDisclosure,
    VStack,
} from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
    video: VideoCard_video$key,
}

function VideoCard(props: Props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const video = useFragment(
        graphql`
            fragment VideoCard_video on Video {
                thumbnail

                name
                type
                
                site
                key
            }
        `,
        props.video,
    );

    if (video.site !== 'YouTube' || video.thumbnail == null) {
        return null;
    }

    return (
        <LinkBox onClick={onOpen}>
            <VStack align="start">
                <Image
                    borderRadius="lg"
                    h="170px"
                    maxW="300px"
                    minW="300px"
                    shadow="xl"
                    src={video.thumbnail}
                />
                <VStack align="start" spacing="0px" w="300px">
                    <Text fontSize="md" fontWeight="semibold">
                        {video.name}
                    </Text>
                    <Text fontSize="sm" fontWeight="light">
                        {video.type}
                    </Text>
                </VStack>
            </VStack>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent
                    aria-expanded="true"
                    maxW="600px"
                    overflow="hidden"
                    role="combobox"
                    rounded="lg"
                    shadow="lg"
                    top="4vh"
                >
                    <YouTube
                        opts={{
                            playerVars: {
                                autoplay: 1,
                                modestbranding: 1,
                            },
                            width: '600px',
                        }}
                        videoId={video.key}
                    />
                </ModalContent>
            </Modal>
        </LinkBox>
    );
}

export default VideoCard;
