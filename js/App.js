import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from './Video';
import { Menu } from './Menu';

//'https://content.codecademy.com/courses/React/react_video-fast.mp4'
const VIDEOS = {
  fast: 'js/react_video-fast.mp4',
  slow: 'js/react_video-slow.mp4',
  cute: 'js/react_video-cute.mp4',
  eek: 'js/react_video-eek.mp4'
};

class App extends React.Component {
  constructor(props) {
    super(props);
  this.chooseVideo=this.chooseVideo.bind(this);
    this.state = { src: VIDEOS.fast };
  }
  chooseVideo(videoType){
this.setState({
  src:VIDEOS[videoType]
})
    
  }
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo} />
        <Video src={this.state.src} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);