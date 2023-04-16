<<<<<<< HEAD
import React, { Component } from 'react';
import { StyleSheet, Text, Pressable, View, Dimensions, Image, Animated, PanResponder, ImageBackground } from 'react-native';
import { Conv } from '../../Components/Conv';
import global from '../../Components/global';
import { Pets } from '../../Components/Pets';
import { Petss } from '../../Components/Petss';
import { globalStyles } from '../../Components/styles';
import bg from '../../assets/bg.png';

const SCREEN_HEIGHT = 500;
const SCREEN_WIDTH = Dimensions.get('window').width;

const Pests = [
  { id: "1", uri: require('../../assets/1.jpg') },
  { id: "2", uri: require('../../assets/2.jpg') },
  { id: "3", uri: require('../../assets/3.jpg') },
  { id: "4", uri: require('../../assets/4.jpg') },
  { id: "5", uri: require('../../assets/5.jpg') },
  { id: "6", uri: require('../../assets/6.jpg') },
  { id: "7", uri: require('../../assets/7.jpg') },
  { id: "8", uri: require('../../assets/8.jpg') },
  { id: "9", uri: require('../../assets/9.jpg') },
  { id: "10", uri: require('../../assets/10.jpg') },
  { id: "11", uri: require('../../assets/11.jpg') },
  { id: "12", uri: require('../../assets/12.jpg') },
];

const Desc = [
  { id: "1", type: "Shih Tzu" },
  { id: "2", type: "Puspin" },
  { id: "3", type: "Aspin" },
  { id: "4", type: "Puspin" },
  { id: "5", type: "Dogshit" },
  { id: "6", type: "Puspin" },
  { id: "7", type: "Aspin" },
  { id: "8", type: "Puspin" },
  { id: "9", type: "Pontoy" },
  { id: "10", type: "Puspin" },
  { id: "11", type: "Chawi" },
  { id: "12", type: "Puspin" },
];

class HomePage extends Component {
  constructor() {
    super();

    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: global.state,
    };

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp',
    });

    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate,
        },
        ...this.position.getTranslateTransform(),
      ],
    };

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    });
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp',
    });

    this.nextCardOpacity = this.position.x.interpolate
}
}

=======
import React from 'react'
import Headeded from '../components/Headeded'
import '../styles/homepage.css'

const Homepage = () => {
  return (
    <div>
      <Headeded/>
      <div className='homecontainer'></div>
    </div>
  )
}

export default Homepage
>>>>>>> origin/Ednilan
