import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    ActivityIndicator,
    ScrollView,
    FlatList,
} from 'react-native';
import { Button } from 'react-native-elements';
import { create, PREDEF_RES } from 'react-native-pixel-perfect';

import { GlobalStyles } from '../../globals/styles';
import { Constants } from '../../globals/constant';
import StyledTouch from '../../components/StyledTouch';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

// navigation
import { useNavigation } from "@react-navigation/native";

const perfectSize = create(PREDEF_RES.iphoneX.dp);

export default function PendingShifts() {
    const navigation = useNavigation()

    const [value, setData] = useState([
        {
            title: 'Guardia de seguridad',
            price: 16,
            address: 'Santiago Centro · Región Metropolitana',
            date: '15 de enero',
            time: '09:00 a 17:00 hrs',
            status: false
        },
        {
            title: 'Guardia de seguridad',
            price: 18,
            address: 'Remoto',
            date: '15 de enero',
            time: '09:00 a 17:00 hrs',
            status: false
        },
        {
            title: 'Guardia de seguridad',
            price: 20,
            address: 'Santiago Centro · Región Metropolitana',
            date: '15 de enero · 19 enero',
            time: '09:00 a 17:00 hrs',
            status: false
        },
        {
            title: 'Guardia de seguridad',
            price: 20,
            address: 'Santiago Centro · Región Metropolitana',
            date: '15 de enero · 15 enero',
            time: '09:00 a 17:00 hrs',
            status: false
        },
        {
            title: 'Guardia de seguridad',
            price: 20,
            address: 'Santiago Centro · Región Metropolitana',
            date: '15 de enero · 15 enero',
            time: '09:00 a 17:00 hrs',
            status: false
        },
    ])

    const [months, setMonths] = useState([
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ])

    const [monthSelected, setMonthSelected] = useState("Enero")




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
                <View
                    style={{
                        ...GlobalStyles.flexBetween,
                        ...GlobalStyles.row,
                        width: Constants.width100,
                        marginTop: 30,
                        marginBottom: 27,
                    }}
                >
                    <Text style={styles.headerText}>Turnos pendientes</Text>

                </View>
                <Text style={{ fontSize: Constants.smallFont, marginBottom: perfectSize(20) }}>Aquí puedes ver el estado y confirmar asistencia a los turnos que te aprobaron.</Text>


                <View style={{
                    width: '100%',
                    marginTop: 20,
                    borderBottomColor: '#f5f6f8',
                    borderBottomWidth: 7,
                    alignSelf: "flex-end",
                    marginBottom: 20

                }}></View>


                <ScrollView style={{ height: perfectSize(400) }}>
                    {value && value.length > 0 && value.map((value, i) => (
                        <View style={{ marginTop: Constants.marginTop10 }}>
                            <Text>
                                {value.date}
                            </Text>
                            <View
                                style={styles.containerCards}

                            >

                                <View style={styles.row}>
                                    <Text style={{ fontSize: Constants.betweenFont }}>{value.title}</Text>

                                </View>

                                <View style={styles.address}>
                                    {
                                        value.address !== 'Remoto' ?
                                            <SimpleLineIcons
                                                name={'location-pin'}
                                                size={perfectSize(20)}
                                                color={'blue'}
                                            />
                                            :
                                            <SimpleLineIcons
                                                name={'home'}
                                                size={perfectSize(20)}
                                                color={'blue'}
                                            />
                                    }

                                    <Text style={{ marginLeft: perfectSize(10) }}>{value.address}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', ...GlobalStyles.flexBetween, marginTop: perfectSize(10) }}>

                                    <View style={{ flexDirection: 'row' }}>
                                        <SimpleLineIcons
                                            name={'calendar'}
                                            size={perfectSize(20)}
                                            color={'blue'}
                                        />
                                        <Text style={{ marginLeft: perfectSize(10) }}>{value.date}</Text>
                                    </View>
                                    <View style={styles.time}>
                                        <Text>{value.time}</Text>
                                    </View>
                                </View>

                                <View style={{
                                    width: '100%',
                                    marginTop: 20,
                                    borderBottomColor: '#f5f6f8',
                                    borderBottomWidth: 7,
                                    alignSelf: "flex-end",
                                    marginBottom: 20

                                }}></View>

                                <View style={{
                                    ...GlobalStyles.flexBetween,
                                    ...GlobalStyles.row,
                                    width: Constants.width100,
                                }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>

                                        <View style={{ marginLeft: perfectSize(20) }}>
                                            <Text style={{ color: Constants.blueColor }} >No podré asistir</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={value.status == false ? {
                                        display: "flex", marginLeft: perfectSize(50)

                                    } : { display: "none" }}

                                    >

                                        <Button
                                            icon={
                                                <Text style={{ color: 'white', fontSize: perfectSize(20) }}>
                                                    Confirmar
                                                </Text>
                                            }
                                            buttonStyle={{

                                                width: '80%',
                                                backgroundColor: '#3C82FF',
                                                borderRadius: perfectSize(10)
                                            }}
                                            type={'clear'}
                                            onPress={() => {

                                                // const newArr = [...value.status];
                                                // newArr[i] = !newArr[i];
                                                // setMenu(newArr);
                                                navigation.navigate('ConfirmTurn')

                                            }}

                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}

                </ScrollView>

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
