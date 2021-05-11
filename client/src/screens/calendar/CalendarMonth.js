import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";
import { create, PREDEF_RES } from 'react-native-pixel-perfect';




// components
import StyledTouch from '../../components/StyledTouch';
import StyledTouchPressed from '../../components/StyledTouchPressed';



// Styles
import { GlobalStyles } from '../../globals/styles';
import { Constants } from '../../globals/constant';
import Calendar from '../../components/Calendar';


const perfectSize = create(PREDEF_RES.iphoneX.dp);

export default function CalendarWithoutEvents() {
    const navigation = useNavigation()
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [months, setMonths] = useState([
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ])

    const [monthSelected, setMonthSelected] = useState("Enero")

    // for the list in the end
    let eventDataArray = [
        {
            date: '2021-05-17',
            title: 'Titulo del trabajo',
            color: "#7adcef",
            id: 0
        },
        {
            date: '2021-05-18',
            title: 'Titulo del trabajo',
            color: "#7adcef",
            id: 1
        },
        {
            date: '2021-05-19',
            title: 'Titulo del trabajo',
            color: "#7adcef",
            id: 2
        },
        {
            date: '2021-05-21',
            title: 'Titulo del trabajo',
            color: "#7adcef",
            id: 3
        },
        {
            date: '2021-05-22',
            title: 'Titulo del trabajo',
            color: "#7adcef",
            id: 4
        },
        {
            date: '2021-05-23',
            title: 'Titulo del trabajo',
            color: "#7adcef",
            id: 5
        }, {
            date: '2021-05-23',
            title: 'Titulo del trabajo',
            color: "#7adcef",
            id: 6
        },
        {
            date: '2021-05-23',
            title: 'Titulo del trabajo',
            color: "#7adcef",
            id: 7
        },
        {
            date: '2021-05-23',
            title: 'Titulo del trabajo',
            color: "#7adcef",
            id: 8
        },
        {
            date: '2021-05-23',
            title: 'Titulo del trabajo',
            color: "#7adcef",
            id: 9
        },
    ]

    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const renderItem = ({ item }) => (
        <View style={{}} >
            <Text style={{ color: '#77838f', fontSize: 16 }}>{new Date(item.date.replace(/-+/g, '/')).toLocaleDateString('es-MX', options)}</Text>
            <View style={{
                marginTop: 20,
                marginBottom: 20,
                borderLeftWidth: 6,
                borderLeftColor: item.color,
                borderBottomStyle: 'solid',
                borderRadius: 8,
                paddingLeft: 20,
                height: 54,
                width: 354
            }}>
                <Text style={{ color: '#77838f', fontSize: 14, marginTop: 6 }}>Titulo del trabajo</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>7:30pm a 5:00am</Text>
            </View>
        </View>
    )



    return (
        // Container
        <View style={{
            backgroundColor: '#fff',
            padding: 20,
        }}>
            {/* Header */}
            <View style={{
                justifyContent: 'flex-start',
                alignSelf: 'flex-start',
                flexDirection: 'row',
                marginTop: 30,
                marginLeft: 5,
                marginRight: 20
            }}>
                <View style={{
                    width: 50,
                }}>
                    <StyledTouch
                        title={'<'}
                        onClick={() => {
                            navigation.goBack();
                        }}
                    />
                </View>
                <View style={{ marginTop: 11, marginLeft: 47, flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                    <View style={{ flexDirection: 'row', marginRight: 24 }}>
                        <View style={{
                            width: 5,
                            height: 5,
                            borderRadius: 50,
                            backgroundColor: "#7adcef",
                            marginTop: 7,
                            marginRight: 5
                        }}></View>
                        <Text style={{ color: "#9e9e9e", fontSize: 13 }}>Remoto</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginRight: 24 }}>
                        <View style={{
                            width: 5,
                            height: 5,
                            borderRadius: 50,
                            backgroundColor: "#4875e9",
                            marginTop: 7,
                            marginRight: 5
                        }}></View>
                        <Text style={{ color: "#9e9e9e", fontSize: 13 }}>Largo plazo</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{
                            width: 5,
                            height: 5,
                            borderRadius: 50,
                            backgroundColor: "#ff4a7f",
                            marginTop: 7,
                            marginRight: 5
                        }}></View>
                        <Text style={{ color: "#9e9e9e", fontSize: 13 }}>Corto plazo</Text>
                    </View>
                </View>
            </View>
            <View >
                <Calendar />
                {/* <View>
                <FlatList
                    data={eventDataArray}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}

                />
            </View> */}
            </View>

        </View >
    )
}

const styles = StyleSheet.create({})
