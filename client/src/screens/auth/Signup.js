import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  TextInput as ReactNativeInput,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { Image, Overlay, CheckBox } from 'react-native-elements';
import { TextInput, Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { create, PREDEF_RES } from 'react-native-pixel-perfect';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import AsyncStorage from '@react-native-community/async-storage';

import { emailValidator, passwordValidator } from '../../utils/Validator';
// import I18n from '../../utils/languages/languageUtils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GlobalStyles } from '../../globals/styles';
import { Constants } from '../../globals/constant';
import StyledButton from '../../components/StyledButton';

import StyledTouch from '../../components/StyledTouch';

const perfectSize = create(PREDEF_RES.iphoneX.dp);

const Signup = (props) => {
  const navigation = props.navigation;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    direction: '',
    emailError: '',
    nameError: '',
    phoneError: '',
    directionError: '',
    passwordError: '',
    isLoading: false,
    checked: false,
    visible: false,
    femaleChecked: true,
    maleChecked: false,
    isDatePickerVisible: false,
    date: new Date(),
    cumpleaños: null,
    image: null,
  });

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const close = () => {
    navigation.goBack();
  };

  const handlePhoneChange = (text) => {
    setFormData({
      ...formData,
      phone: text,
    });

    if (text === '') {
      setFormData({
        ...formData,
        nameError: 'Please enter phone number',
      });
    }
  };

  const handleNameChange = (text) => {
    setFormData({
      ...formData,
      name: text,
    });

    if (text === '') {
      setFormData({
        ...formData,
        nameError: 'Please enter full name',
      });
    }
  };

  const handlePswChange = (text) => {
    setFormData({
      ...formData,
      password: text,
    });

    if (passwordValidator(text)) {
      setFormData({
        ...formData,
        passwordError: '',
      });
    } else {
      setFormData({
        ...formData,
        passwordError: 'password must be more than 8 letters!',
      });
    }
  };

  const _showCalendar = () => {
    setFormData({
      ...formData,
      isDatePickerVisible: !formData.isDatePickerVisible,
    });
  };

  const _onChangeDatePicker = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setFormData({
      date: currentDate,
      cumpleaños: `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`,
    });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      uploadImage(result.uri)
        .then(() => {
          // Upload image to server
        })
        .catch((err) => {
          console.error(err);
          toastRef.current.show('Error al subir el avatar');
        });
    }
  };

  const uploadImage = async (uri) => {
    const res = await fetch(uri);
    const blob = await res.blob();
    // const ref = firebase.storage().ref().child(`avatar/${uid}`);
    // return ref.put(blob);
  };

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    alert(result.uri);
    console.log(result);
    //upload to server
  };

  return (
    <ScrollView centerContent={true} style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={GlobalStyles.container}>
          <View
            style={{
              ...GlobalStyles.flexBetween,
              ...GlobalStyles.row,
              width: Constants.width100,
              marginTop: 30,
              marginBottom: 10,
            }}
          >
            <StyledTouch
              title={'<'}
              onClick={() => {
                navigation.goBack();
              }}
            />
          </View>
          <Text style={styles.headerText}>
            ¡Hola! ✌️ ayudame con los siguientes datos
          </Text>

          <View style={styles.nombreApellido}>
            <TextInput
              value={formData.name}
              onChangeText={(text) => handleNameChange(text)}
              error={formData.nameError}
              mode='outlined'
              label={'Nombre y apellido'}
            />
          </View>

          <View style={styles.view}>
            <TextInput
              value={formData.phone}
              onChangeText={(text) => handlePhoneChange(text)}
              error={formData.phoneError}
              mode='outlined'
              label={'Teléfono'}
            />
          </View>

          <View style={styles.view}>
            <TextInput
              value={formData.cumpleaños}
              onChangeText={(text) => handlePhoneChange(text)}
              error={formData.phoneError}
              mode='outlined'
              label={formData.cumpleaños ? formData.cumpleaños : 'Cumpleaños'}
              editable={false}
              right={
                <TextInput.Icon
                  name={() => (
                    <MaterialCommunityIcons
                      name={'calendar'}
                      size={perfectSize(30)}
                    />
                  )}
                  onPress={() => _showCalendar()}
                />
              }
            />
          </View>

          {/* Date picker */}
          {formData.isDatePickerVisible && (
            <DateTimePicker
              testID='dateTimePicker'
              value={formData.date}
              mode='date'
              is24Hour={true}
              display='default'
              onChange={_onChangeDatePicker}
            />
          )}
          <View style={styles.view}>
            <TextInput
              value={formData.direction}
              onChangeText={(text) => handleNameChange(text)}
              error={formData.directionError}
              mode='outlined'
              label={'Direccion'}
            />
          </View>

          <View style={styles.view}>
            <Button
              icon='download'
              mode='outline'
              color='#4875e9'
              style={styles.testClass}
              onPress={() => pickImage()}
              contentStyle={{ flexDirection: 'row-reverse' }}
            >
              Agrega una foto
            </Button>
          </View>

          <View style={styles.view}>
            <Button
              icon='note-plus-outline'
              mode='outline'
              color='#4875e9'
              style={styles.testClass}
              onPress={() => pickDocument()}
              contentStyle={{ flexDirection: 'row-reverse' }}
            >
              Agrega tu CV
            </Button>
          </View>

          {/* <View style={styles.fileInputContainer}>
                    <MaterialCommunityIcons
                        name={'calendar'}
                        size={perfectSize(30)}
                        style={styles.fileInputIcon}
                    />

                </View> */}

          <View style={styles.generoContainer}>
            <Text style={{ fontSize: Constants.mediumFont }}>Genero</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              ...GlobalStyles.flexAround,
            }}
          >
            <CheckBox
              title={'Femenino'}
              checkedColor='#3C82FF'
              uncheckedColor={'#000'}
              iconType={'materialIcons'}
              checkedIcon={'radio-button-checked'}
              uncheckedIcon={'radio-button-unchecked'}
              checked={formData.femaleChecked}
              onPress={() =>
                setFormData({ femaleChecked: true, maleChecked: false })
              }
              containerStyle={{
                borderWidth: 0,
                marginLeft: perfectSize(-5),
                backgroundColor: 'white',
              }}
            />

            <CheckBox
              title={'Masculino'}
              checkedColor='#3C82FF'
              uncheckedColor={'#000'}
              iconType={'materialIcons'}
              checkedIcon={'radio-button-checked'}
              uncheckedIcon={'radio-button-unchecked'}
              checked={formData.maleChecked}
              onPress={() =>
                setFormData({ maleChecked: true, femaleChecked: false })
              }
              containerStyle={{
                borderWidth: 0,
                marginLeft: perfectSize(-5),
                backgroundColor: 'white',
              }}
            />
          </View>

          <View style={styles.continuarBtn}>
            {/*<Button*/}
            {/*    icon={*/}
            {/*        <Text style={{color: 'white', fontSize: perfectSize(20)}}>*/}
            {/*            Continuar*/}
            {/*        </Text>*/}
            {/*    }*/}
            {/*    buttonStyle={GlobalStyles.btn}*/}
            {/*    type={'clear'}*/}
            {/*    onPress={() => {*/}
            {/*        handleClick();*/}
            {/*    }}*/}
            {/*/>*/}
            <StyledButton
              title={'Continuar'}
              onClick={() => {
                navigation.navigate('Home');
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              ...GlobalStyles.flexCenter,
              marginTop: Constants.marginTop20,
            }}
          >
            {/* <Text
              style={{
                fontSize: Constants.smallFont,
              }}
            >
              ¿Ya tienes cuenta?
            </Text>

            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Login');
              }}
            >
              <Text
                style={{
                  color: '#3C82FF',
                  fontSize: perfectSize(17),
                  marginLeft: perfectSize(20),
                }}
              >
                Inicia sesión✌
              </Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  nombreApellido: {
    marginTop: Constants.marginTop30,
  },
  view: {
    width: Constants.width100,
    marginTop: Constants.marginTop15,
  },
  generoContainer: {
    marginTop: 22,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: Constants.bigFont,
    marginTop: Constants.marginTop10,
    marginBottom: 30,
  },
  fileInputContainer: {
    width: Constants.width100,
    marginTop: Constants.marginTop20,
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#4875e9',
    borderStyle: 'dotted',
    borderRadius: 10,
  },
  fileInputIcon: {
    padding: 5,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#424242',
  },
  testClass: {
    borderWidth: 2,
    borderColor: '#4875e9',
    borderStyle: 'dotted',
    borderRadius: 10,
    padding: 5,
  },
  continuarBtn: {
    marginTop: Constants.marginTop30,
  },
});

export default Signup;
