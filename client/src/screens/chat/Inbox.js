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

// navigation
import { useNavigation } from "@react-navigation/native";

const perfectSize = create(PREDEF_RES.iphoneX.dp);

export default function Inbox() {

    const [data, setData] = useState([
        {
            name: 'Daniela',
            date: '13:43',
            text: 'Lorem ipsum dolor.',
            notifications: 2,
        },
        {
            name: 'Alexis',
            date: 'abr 16',
            text: 'Lorem ipsum dolor.',
            notifications: 0,
        },
    ])
    const navigation = useNavigation();




    return (
        <ScrollView style={styles.container}>

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
                <Text style={styles.headerText}>Bandeja de entrada</Text>
                {data && data.length > 0 && data.map((data) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Chat')

                        }}
                        style={styles.touch}
                    >
                        <View style={{ flexDirection: 'row', ...GlobalStyles.flexBetween, margin: perfectSize(0) }}>
                            <Text style={styles.grayCircle}></Text>
                            <View style={{ flexDirection: 'column',  margin: perfectSize(0) }}>
                                <Text style={styles.buttonText}>{data.name}</Text>
                                {
                                    data.notifications > 0 ?
                                        <Text style={[styles.smallFont, {marginLeft: perfectSize(10), fontWeight:'bold'}]}>{data.text}</Text>
                                        :
                                        <Text style={[styles.smallFont, {marginLeft: perfectSize(10)}]}>{data.text}</Text>
                                }
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', ...GlobalStyles.flexBetween,  margin: perfectSize(0) }}>
                            <Text style={{fontSize:perfectSize(12), marginBottom:perfectSize(5)}}>{data.date}</Text>
                            {
                                data.notifications > 0 ?
                                    <Text style={styles.blueCircle}>{data.notifications}</Text>
                                :
                                    <Text ></Text>
                            }
                       </View>

                    </TouchableOpacity>
                ))}

            </View>


        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
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
    blueCircle: {
        width: 25,
        height: 25,
        borderRadius: 50,
        backgroundColor: '#4875e9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 3,
        color: '#ffffff',
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
});