import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import { Button, Image } from 'react-native-elements';
import AppIntroSlider from 'react-native-app-intro-slider';
import { create, PREDEF_RES } from 'react-native-pixel-perfect';
import { GlobalStyles } from '../../globals/styles';
//icons
import group_291 from '../../icons/group-291';
import Bg from '../../icons/bg';
import IlustSvg from '../../icons/ilust-2';
import Ilust3Svg from '../../icons/ilust-3';

//utils

const perfectSize = create(PREDEF_RES.iphoneX.dp);

const slides = [
  {
    key: '1',
    title: 'Take control of your work',
    text:
      'Embrace the gig economy and apply only for the shifts thah fit in your schedule. Receive updates and log hours all from the convenience of your phone',
    image: null,
    svg: group_291,
  },
  {
    key: '2',
    title: 'Find new gigs',
    text:
      'The app will automatically notify you when new jobs are posted in your area. Apply in few taps.',
    image: null,
    svg: IlustSvg,
  },
  {
    key: '3',
    title: 'Quick and transparent rates',
    text: 'View for each shift or job available near you.',
    image: null,
    svg: Ilust3Svg,
  },
];

export default class Onboarding extends React.Component {
  constructor(props) {
    super(props);
  }

  onCompleteTour = () => {
    this.props.navigation.navigate('Register', {});
  };

  _renderItem = (props) => {
    return (
      <View>
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: perfectSize(-40),
          }}
        >
          {props.item.image ? (
            <Image
              source={props.item.image}
              style={{ width: perfectSize(300), height: perfectSize(300) }}
              resizeMethod='resize'
              resizeMode='contain'
            />
          ) : (
            <View style={{}}>
              <View>
                <Bg />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  bottom: 100,
                }}
              >
                <props.item.svg />
              </View>
            </View>
          )}
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: perfectSize(25),
              marginTop: perfectSize(30),
            }}
          >
            {props.item.title}
          </Text>
          <Text
            style={{
              color: '#707070',
              fontSize: perfectSize(17),
              marginTop: perfectSize(30),
            }}
          >
            {props.item.text}
          </Text>
        </View>
      </View>
    );
  };

  _renderNextButton = () => {
    return (
      <View
        style={{ marginRight: perfectSize(15), marginTop: perfectSize(10) }}
      >
        <Text style={{ fontSize: perfectSize(17) }}>Next</Text>
      </View>
    );
  };

  _renderSkipButton = () => {
    return (
      <View style={{ marginLeft: perfectSize(15), marginTop: perfectSize(10) }}>
        <Text style={{ fontSize: perfectSize(17) }}>Skip</Text>
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View
        style={{ marginRight: perfectSize(15), marginTop: perfectSize(10) }}
      >
        <Text style={{ fontSize: perfectSize(17) }}>Continuar</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={GlobalStyles.container}>
        <View style={{ flexGrow: 1 }}>
          <AppIntroSlider
            data={slides}
            renderItem={this._renderItem}
            // nextLabel="Next"
            // skipLabel={'Skip'}
            // doneLabel="Done"
            buttonStyle={styles.btnWrap}
            buttonTextStyle={styles.btnText}
            activeDotStyle={styles.activeDot}
            dotStyle={styles.dotStyle}
            onDone={this.onCompleteTour}
            onSkip={this.onSkipTour}
            // showSkipButton='true'
            // showNextButton='true'
            // renderNextButton={this._renderNextButton}
            // renderSkipButton={this._renderSkipButton}
            renderDoneButton={this._renderDoneButton}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnWrap: {
    backgroundColor: 'blue',
    borderRadius: perfectSize(5),
    marginBottom: perfectSize(10),
  },
  btnText: {
    textAlign: 'center',
    color: '#000',
    fontSize: perfectSize(18),
  },
  activeDot: {
    backgroundColor: '#FF3800',
    width: '5%',
  },
  dotStyle: {
    backgroundColor: '#d1d1d1',
  },
});
