import type { Videos_videos$key } from './__generated__/Videos_videos.graphql';

import React from 'react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import HorizonalScrollview from 'HorizonalScrollview';
import VideoCard from './VideoCard';

type Props = {
    videos: Videos_videos$key,
}

function Videos(props: Props) {
    const videos = useFragment(
        graphql`
            fragment Videos_videos on Video
            @relay(plural: true) {
                ...VideoCard_video
            }
        `,
        props.videos,
    );

    return (
        <HorizonalScrollview
            align="start"
            padding={2}
            spacing={4}
            w="100%"
        >
            {videos.map((video, index) => <VideoCard key={`video_${index}`} video={video}/>)}
        </HorizonalScrollview>
    );
}

export default Videos;
