import React from 'react';
import { PlayButton, Progress, Icons } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';

const { SoundCloudLogoSVG } = Icons;

const MusicPlayer = withCustomAudio(props => {
  const { streamUrl, trackTitle } = props;

  return (
      <div>
        <PlayButton {...this.props} />
        <p>{trackTitle}</p>
        <VolumeControl {...this.props} />
        <Timer />
        <Progress {...this.props} />
      </div>
  );
});

export default MusicPlayer;
