import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    ActivityIndicator,
    ScrollView,
} from 'react-native';
import { Image, Overlay, CheckBox } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { create, PREDEF_RES } from 'react-native-pixel-perfect';
// import AsyncStorage from '@react-native-community/async-storage';

import { emailValidator, passwordValidator } from '../../utils/Validator';
// import I18n from '../../utils/languages/languageUtils';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { GlobalStyles } from '../../globals/styles';
import { Constants } from '../../globals/constant';
import Header from '../../components/Header';
import StyledButton from '../../components/StyledButton';
import StyledTouch from '../../components/StyledTouch';
import StyledFlatList from '../../components/StyledFlatList';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// navigation
import { useNavigation } from "@react-navigation/native";

const perfectSize = create(PREDEF_RES.iphoneX.dp);

export default function Chat() {

    const navigation = useNavigation();




    return (

        <View style={styles.containerChat}>
          <View
              style={{
                  ...GlobalStyles.flexBetween,
                  ...GlobalStyles.row,
                  width: Constants.width100,
                  marginTop: 30,
                  marginBottom: 0,
              }}
          >
              <View style={{ flexDirection: 'row', ...GlobalStyles.flexBetween, margin: perfectSize(20) }}>
                <StyledTouch
                    title={'<'}
                    onClick={() => {
                        navigation.goBack();
                    }}
                />
                <Text style={[styles.grayCircle, {marginLeft:perfectSize(30)}]}></Text>
                <View style={{ flexDirection: 'column',  margin: perfectSize(0) }}>
                    <Text style={styles.buttonText}>Daniela</Text>
                    <Text style={[styles.smallFont, {marginLeft: perfectSize(10), color:'#bcbcbc'}]}>Nombre de la empresa</Text>
                </View>
              </View>
          </View>

          <View style={{
                width: '100%',
                marginTop: 5,
                borderBottomColor: '#f5f6f8',
                borderBottomWidth: 7,
                alignSelf: "flex-end",
                marginBottom: 20

            }}></View>

          <ScrollView style={{ height: '100%' }} ref={ref => {this.scrollView = ref}}
    onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}>
            <View>
              <TouchableOpacity style={styles.person1}>
                  <View style={{ fontSize: 16, flexShrink: 1, padding: 20, color: '#1e263c', lineHeight: 22 }}>
                      <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices</Text>
                  </View>
              </TouchableOpacity>
              <Text style={{ fontSize: 12, flexShrink: 1, marginTop: 10, marginLeft: 20, color: '#afb3bc' }}>13 : 45 PM</Text>
            </View>
            <View style={{ alignItems: 'flex-end'}}>
              <TouchableOpacity style={styles.person2}>
                  <View style={{ fontSize: 16, flexShrink: 1, padding: 20, color: '#ffffff', lineHeight: 22 }}>
                      <Text style={{color: '#ffffff' }}>Lorem ipsum dolor </Text>
                  </View>
              </TouchableOpacity>
              <Text style={{ fontSize: 12, flexShrink: 1, marginTop: 10, marginEnd: 20, color: '#afb3bc' }}>13 : 45 PM</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.person1}>
                  <View style={{ fontSize: 16, flexShrink: 1, padding: 20, color: '#1e263c', lineHeight: 22 }}>
                      <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices</Text>
                  </View>
              </TouchableOpacity>
              <Text style={{ fontSize: 12, flexShrink: 1, marginTop: 10, marginLeft: 20, color: '#afb3bc' }}>13 : 45 PM</Text>
            </View>
            <View style={{ alignItems: 'flex-end'}}>
              <TouchableOpacity style={styles.person2}>
                  <View style={{ fontSize: 16, flexShrink: 1, padding: 20, color: '#ffffff', lineHeight: 22 }}>
                      <Text style={{color: '#ffffff' }}>Lorem ipsum dolor </Text>
                  </View>
              </TouchableOpacity>
              <Text style={{ fontSize: 12, flexShrink: 1, marginTop: 10, marginEnd: 20, color: '#afb3bc' }}>13 : 45 PM</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.person1}>
                  <View style={{ fontSize: 16, flexShrink: 1, padding: 20, color: '#1e263c', lineHeight: 22 }}>
                      <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices</Text>
                  </View>
              </TouchableOpacity>
              <Text style={{ fontSize: 12, flexShrink: 1, marginTop: 10, marginLeft: 20, color: '#afb3bc' }}>13 : 45 PM</Text>
            </View>
            <View style={{ alignItems: 'flex-end'}}>
              <TouchableOpacity style={styles.person2}>
                  <View style={{ fontSize: 16, flexShrink: 1, padding: 20, color: '#ffffff', lineHeight: 22 }}>
                      <Text style={{color: '#ffffff' }}>Lorem ipsum dolor </Text>
                  </View>
              </TouchableOpacity>
              <Text style={{ fontSize: 12, flexShrink: 1, marginTop: 10, marginEnd: 20, color: '#afb3bc' }}>13 : 45 PM</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.person1}>
                  <View style={{ fontSize: 16, flexShrink: 1, padding: 20, color: '#1e263c', lineHeight: 22 }}>
                      <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices</Text>
                  </View>
              </TouchableOpacity>
              <Text style={{ fontSize: 12, flexShrink: 1, marginTop: 10, marginLeft: 20, color: '#afb3bc' }}>13 : 45 PM</Text>
            </View>
            <View style={{ alignItems: 'flex-end'}}>
              <TouchableOpacity style={styles.person2}>
                  <View style={{ fontSize: 16, flexShrink: 1, padding: 20, color: '#ffffff', lineHeight: 22 }}>
                      <Text style={{color: '#ffffff' }}>Lorem ipsum dolor </Text>
                  </View>
              </TouchableOpacity>
              <Text style={{ fontSize: 12, flexShrink: 1, marginTop: 10, marginEnd: 20, color: '#afb3bc' }}>13 : 45 PM</Text>
            </View>


          </ScrollView>


          <View style={{ justifyContent: 'flex-end'}}>
              <TextInput
              label={'Escribe un mensaje'}
              style={{ backgroundColor: '#fafafa' }}
              right={
                <TextInput.Icon
                  name={() => (
                    <MaterialCommunityIcons
                      name={'send'}
                      size={perfectSize(30)}
                    />
                  )}
                  onPress={() => {
                    console.log('enviar mensaje')
                  }}
                />
              }
            />
          </View>
      </View>

    );
}

const styles = StyleSheet.create({
    containerChat: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    floatRight: {
        alignItems: 'flex-end',
    },
    panel1: {
        padding: perfectSize(20),
    },
    touch: {
        paddingHorizontal: perfectSize(20),
        paddingVertical: perfectSize(15),
        borderColor: '#e8eef4',
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Constants.marginTop10,
        fontWeight: 'bold',
    },
    icon: {
        margin: 20,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: Constants.bigFont,
        marginTop: Constants.marginTop10,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: Constants.smallFont,
        marginLeft: perfectSize(10),

    },
    grayCircle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#EDEDED',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 3,
        color: '#4875e9',
    },
    person1: {
      maxWidth: 240,
      height: 'auto',
      backgroundColor: "#f0f4ff",
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 20,
      marginLeft: 20
    },
    person2: {
      maxWidth: 240,
      height: 'auto',
      backgroundColor: "#6478b0",
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 20,
      marginRight: 20
    },
});