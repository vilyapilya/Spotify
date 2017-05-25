import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { PlayButton,
  PauseButton,
  ProgressBar, SoundOnButton, SoundOffButton,
  NextButton } from 'react-player-controls';

class Player extends Component {
  constructor(props){
    super(props);
    this.preVolume = 0.0;
    this.state = {playing: false};
    this.playHandler = this.playHandler.bind(this);
    this.pauseHandler = this.pauseHandler.bind(this);
    this.mute = this.mute.bind(this);
    this.unmute = this.mute.bind(this);

  }
  playHandler(){
    this.setState({playing: true, volume: 0.6});
  }
  pauseHandler(){
    this.setState({playing: false});
  }
  mute(){
    thisVolume = this.state.volume;
    this.setState({volume: 0.0});
  }
  unmute(){
    this.setState({volume: prevVolume});
  }

  render () {
    if(!this.props.currentUser){
      return null;
    }
    if(this.props.books > 0){
      let ar = [];
      this.props.book.forEach((b) => {
        ar.push(b.audioFile_url);
      })
      console.log(ar);
    }
    let audio_url = this.props.book.audioFile_url;
    return (
    <div>
        <ReactPlayer
        url={audio_url}
        className="Player"
        height="65px"
        width="100%"
        playing={this.state.playing}
        onEnded={() => this.setState({ playing: true, url: next_url})}
        />
      <PauseButton onClick={this.pauseHandler}/>
      <PlayButton isEnabled={true} onClick={this.playHandler} />
      <NextButton isEnabled={this.state.isEnabled} onClick={() => alert('Go to next')}/>
      <ProgressBar></ProgressBar>
    </div>
    )
  }
}
export default Player;
