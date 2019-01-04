import React from 'react';
import tempBackgroundImage from '../static/webScreen.png'
import videoLink from '../static/videos/vid1.mp4';
//import '../styles/less/utility.less';
import '../styles/less/utility.less'
class CoverVideo extends React.Component {
  state = {
    videoUrl: ''
  };
  componentDidMount() {
    const video = document.getElementById('backgroundVideo');
    this.setState({
      videoUrl: videoLink
    });
    if(video.readyState === 0) {
      // console.log(navigator.connection.downlink)
    }
  }

  render() {

    return (
      <video loop autoPlay muted id="backgroundVideo" poster={tempBackgroundImage} >
        <source src={this.state.videoUrl} type="video/mp4"
        />
      </video>
    )
  }
}

export default CoverVideo;
