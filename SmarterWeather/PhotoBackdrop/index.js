'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image,
  CameraRoll,
  ImagePickerIOS
} = React;
var styles = require('./style.js');

var PhotoBackdrop = React.createClass({
  //      photoSource: require('image!flowers')

  getInitialState() {
    return {
      photoSource: null
    }
  },
  componentDidMount() {
    // CameraRoll.getPhotos(
    //   {first: 8},
    //   (data) => {
    //     this.setState({
    //       photoSource: {uri: data.edges[7].node.image.uri}
    //     })},
    //   (error) => {
    //     console.warn(error);
    //   });

    ImagePickerIOS.openSelectDialog(
      {},
      (data) => {
        this.setState({
          photoSource: {uri: data}
        });
      },
      () => {
        console.log('User canceled the action');
      });
  },
  render() {
    return (
      <Image
        style={styles.backdrop}
        source={ this.state.photoSource }
        resizeMode='cover'>
        {this.props.children}
      </Image>
      );
  }
});

module.exports = PhotoBackdrop;