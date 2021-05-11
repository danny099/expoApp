import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput as ReactNativeInput,
    ScrollView,
} from 'react-native';
import { Button } from 'react-native-elements';
import { create, PREDEF_RES } from 'react-native-pixel-perfect';
import moment from 'moment'

import { GlobalStyles } from '../../globals/styles';
import { Constants } from '../../globals/constant';
import StyledTouch from '../../components/StyledTouch';
import StyledTouchPressed from '../../components/StyledTouchPressed';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { TextInput } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DateTimePicker from '@react-native-community/datetimepicker';




// navigation
import { useNavigation } from "@react-navigation/native";

const perfectSize = create(PREDEF_RES.iphoneX.dp);

export default function RegisterHours() {
    const [value, setData] = useState([
        {
            title: 'Guardia de seguridad',
            pay: '100.000',
            date: '15 de enero',
        },
    ])

    const [formData, setFormData] = useState({
        timeStart: null,
        time: new Date(),
        time2: new Date(),
        timeEnd: null,
        isTimePickerVisible: false,
        isTimePickerVisibleEnd: false,
    });

    const _showTime = () => {
        setFormData({
            ...formData,
            isTimePickerVisible: !formData.isTimePickerVisible,
        });
    };

    const _onChangeTimePicker = (event, selectedTIme) => {
        const currentTime = selectedTIme;
        console.log(moment(currentTime).format('LT'))
        setFormData({
            ...formData,
            timeStart: `${moment(currentTime).format('LT')}`,
            isTimePickerVisible: false,
        });
    }

    const _showTimeEnd = () => {
        setFormData({
            ...formData,
            isTimePickerVisibleEnd: !formData.isTimePickerVisibleEnd,
        });
    };

    const _onChangeTimePickerEnd = (event, selectedTIme) => {
        const currentTime = selectedTIme;
        console.log(moment(currentTime).format('LT'))
        setFormData({
            ...formData,
            timeEnd: `${moment(currentTime).format('LT')}`,
            isTimePickerVisibleEnd: false,
        });
    }


    const navigation = useNavigation();



    return (
        <View style={styles.container}>

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
                <Text style={{ marginTop: 20, fontSize: 22, lineHeight: 24, fontWeight: 'bold', alignSelf: 'flex-start' }}>Registro de horas</Text>
                <Text style={{ fontSize: 16, marginTop: 5 }}>Aquí podrás ver las horas trabajadas, puedes editar y actualizar tus horas si es necesario.</Text>
                <View style={{
                    width: '100%',
                    marginTop: 20,
                    borderBottomColor: '#f5f6f8',
                    borderBottomWidth: 7,
                    alignSelf: "flex-end",
                    marginBottom: 20

                }}></View>


                <ScrollView style={{ height: '100%' }}>
                    {value && value.length > 0 && value.map((value) => (
                        <View style={{ marginTop: Constants.marginTop10 }}>
                            <View
                                style={styles.containerCards}

                            >

                                <View style={{ flexDirection: 'row', ...GlobalStyles.flexBetween, marginTop: perfectSize(10), marginLeft: 10, marginEnd: 10 }}>

                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 19, lineHeight: 24, fontWeight: 'bold' }}>{value.title}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <SimpleLineIcons
                                            name={'calendar'}
                                            size={perfectSize(20)}
                                            color={'blue'}
                                        />
                                        <Text style={{ marginLeft: perfectSize(10) }}>{value.date}</Text>
                                    </View>
                                </View>

                                <View style={{
                                    ...GlobalStyles.flexBetween,
                                    ...GlobalStyles.row,
                                    width: Constants.width100,
                                    marginTop: 20,
                                }}>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 12, color: '#303030' }} >Horario de inicio</Text>
                                        <TextInput
                                            value={formData.timeStart}
                                            onChangeText={(text) => handlePhoneChange(text)}
                                            mode='outlined'
                                            editable={false}
                                            right={
                                                <TextInput.Icon
                                                    name={() => (
                                                        <MaterialCommunityIcons
                                                            name={'pencil'}
                                                            color={'#4875e9'}
                                                            size={perfectSize(30)}
                                                        />
                                                    )}
                                                    onPress={() => _showTime()}
                                                />
                                            }
                                            style={{
                                                width: 150,
                                                backgroundColor: '#f5f5f5',
                                                borderRadius: perfectSize(10)
                                            }}
                                        />
                                        {/* Date picker */}
                                        {formData.isTimePickerVisible && (
                                            <DateTimePicker
                                                testID='dateTimePicker'
                                                value={formData.time}
                                                mode='time'
                                                is24Hour={true}
                                                display='default'
                                                onChange={_onChangeTimePicker}
                                            />

                                        )}
                                    </View>
                                    <View style={{ marginLeft: perfectSize(0) }}>

                                        <View style={{ marginLeft: 10 }}>
                                            <Text style={{ fontSize: 12, color: '#303030' }} >Horario final</Text>
                                            <TextInput
                                                value={formData.timeEnd}
                                                onChangeText={(text) => handlePhoneChange(text)}
                                                mode='outlined'
                                                editable={false}
                                                right={
                                                    <TextInput.Icon
                                                        name={() => (
                                                            <MaterialCommunityIcons
                                                                name={'pencil'}
                                                                color={'#4875e9'}
                                                                size={perfectSize(30)}
                                                            />
                                                        )}
                                                        onPress={() => _showTimeEnd()}
                                                    />
                                                }
                                                style={{
                                                    width: 150,
                                                    backgroundColor: '#f5f5f5',
                                                    borderRadius: perfectSize(10)
                                                }}
                                            />
                                            {/* Date picker */}
                                            {formData.isTimePickerVisibleEnd && (
                                                <DateTimePicker
                                                    testID='dateTimePicker'
                                                    value={formData.time2}
                                                    mode='time'
                                                    is24Hour={true}
                                                    display='default'
                                                    onChange={_onChangeTimePickerEnd}
                                                />

                                            )}
                                        </View>

                                    </View>
                                </View>

                                <View style={{
                                    width: '100%',
                                    marginTop: 20,
                                    borderBottomColor: '#f5f6f8',
                                    borderBottomWidth: 5,
                                    alignSelf: "flex-end",
                                    marginBottom: 20

                                }}></View>

                                <View style={{
                                    ...GlobalStyles.flexBetween,
                                    ...GlobalStyles.row,
                                    width: Constants.width100,
                                }}>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 12, color: '#303030' }} >Total a pagar</Text>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }} >$ {value.pay}</Text>
                                    </View>
                                    <View style={{ marginLeft: perfectSize(100) }}>

                                        <Button
                                            icon={
                                                <Text style={{ color: '#4875e9', fontSize: perfectSize(16), fontWeight: 'bold' }}>
                                                    Actualizar
                                                </Text>
                                            }
                                            buttonStyle={{

                                                width: '80%',
                                                backgroundColor: '#f0f4ff',
                                                borderRadius: perfectSize(10)
                                            }}
                                            type={'clear'}
                                            onPress={() => console.log('actualizar')}

                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}

                </ScrollView>

            </View>


        </View>

    );
}




const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    containerCards: {
        width: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        paddingHorizontal: perfectSize(10),
        paddingVertical: perfectSize(20),
        marginTop: Constants.marginTop10,
        shadowColor: 'red',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        // elevation: 1
        // boxShadow:
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
        fontSize: Constants.mediumFont,
        marginTop: Constants.marginTop10,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: Constants.smallFont,
        marginTop: Constants.marginTop10,
    },
    blueCircle: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: '#f0f4ff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 3,
        color: '#4875e9',
    },
    grayCircle: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: '#EDEDED',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 3,
        color: '#4875e9',
    },
    row: {
        flexDirection: 'row',
        ...GlobalStyles.flexBetween
    },
    price: {
        backgroundColor: 'black',
        paddingHorizontal: perfectSize(15),
        paddingVertical: perfectSize(8),
        borderRadius: 10,
    },
    address: {
        flexDirection: 'row', alignItems: 'center',
    },
    time: {
        paddingVertical: perfectSize(5),
        paddingHorizontal: perfectSize(10),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#eeeeee',
    },
});