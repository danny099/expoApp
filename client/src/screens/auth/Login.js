import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import { Button, Image, Overlay, CheckBox } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { create, PREDEF_RES } from 'react-native-pixel-perfect';

import { emailValidator, passwordValidator } from '../../utils/Validator';
// import I18n from '../../utils/languages/languageUtils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GlobalStyles } from '../../globals/styles';
import { Constants } from '../../globals/constant';
import StyledButton from '../../components/StyledButton';

//svg
import BgSvg from '../../icons/bg';

const perfectSize = create(PREDEF_RES.iphoneX.dp);

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      isLoading: false,
      checked: false,
      visible: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePswChange = this.handlePswChange.bind(this);
  }

  handleClick() {
    this.props.navigation.navigate('Home');
  }

  handleEmailChange(text) {
    this.setState({
      email: text,
    });

    if (emailValidator(text)) {
      this.setState({
        emailError: '',
      });
    } else {
      this.setState({
        emailError: 'Please enter correct email type.',
      });
    }
  }

  handlePswChange(text) {
    this.setState({
      password: text,
    });

    if (passwordValidator(text)) {
      this.setState({
        passwordError: '',
      });
    } else {
      this.setState({
        passwordError: 'password must be more than 8 letters!',
      });
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='position'>
        <View style={GlobalStyles.container}>
          <View style={GlobalStyles.headerPart}>
            <Image
              source={require('../../assets/images/logo192.png')}
              style={{ width: perfectSize(100), height: perfectSize(100) }}
            />
            <BgSvg />
            {/* <Image
              source={require('../../assets/images/bg.png')}
              style={{ width: perfectSize(200), height: perfectSize(150) }}
            /> */}
          </View>

          <Text style={styles.headerText}>Hola, bienvenido de nuevo 🤩</Text>

          <Text style={{ fontSize: Constants.smallFont }}>
            ingresa tu correo electrónico y contraseña para iniciar sesión.
          </Text>

          <View style={styles.view}>
            <TextInput
              value={this.state.email}
              onChangeText={(text) => this.handleEmailChange(text)}
              error={this.state.emailError}
              mode='outlined'
              label={'Correo electronico'}
            />
          </View>

          <View style={styles.view}>
            <TextInput
              secureTextEntry={this.state.visible ? false : true}
              value={this.state.password}
              onChangeText={(text) => this.handlePswChange(text)}
              error={this.state.passwordError}
              mode='outlined'
              label={'Contraseña'}
              style={{ borderRadius: 30 }}
              right={
                <TextInput.Icon
                  name={() => (
                    <MaterialCommunityIcons
                      name={this.state.visible ? 'eye' : 'eye-off'}
                      size={perfectSize(30)}
                    />
                  )}
                  onPress={() => {
                    this.setState({ visible: !this.state.visible });
                  }}
                />
              }
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              // this.props.navigation.navigate('Signup');
            }}
          >
            <Text
              style={{
                color: 'black',
                fontSize: perfectSize(17),
                marginTop: perfectSize(20),
              }}
            >
              ¿Has olvidado tu contraseña? ️
            </Text>
          </TouchableOpacity>

          <View style={{ width: '100%', marginTop: perfectSize(40) }}>
            {/*<Button*/}
            {/*    icon={*/}
            {/*        <Text style={{color: 'white', fontSize: perfectSize(20)}}>*/}
            {/*            Continuar*/}
            {/*        </Text>*/}
            {/*    }*/}
            {/*    buttonStyle={GlobalStyles.btn}*/}
            {/*    type={'clear'}*/}
            {/*    onPress={() => {*/}
            {/*        this.handleClick();*/}
            {/*    }}*/}
            {/*/>*/}
            <StyledButton
              title={'Continuar'}
              onClick={() => {
                this.handleClick();
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              ...GlobalStyles.flexCenter,
              marginTop: Constants.marginTop50,
            }}
          >
            <Text
              style={{
                fontSize: Constants.smallFont,
              }}
            >
              ¿Nuevo aquí?
            </Text>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Signup');
              }}
            >
              <Text
                style={{
                  color: '#3C82FF',
                  fontSize: perfectSize(17),
                  marginLeft: perfectSize(20),
                }}
              >
                Registrate✌️
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    width: Constants.width100,
    marginTop: Constants.marginTop20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: Constants.bigFont,
    marginTop: Constants.marginTop10,
  },
});
