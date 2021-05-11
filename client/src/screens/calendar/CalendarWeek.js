import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";
import { create, PREDEF_RES } from 'react-native-pixel-perfect';
import moment from 'moment'





// components
import StyledTouch from '../../components/StyledTouch';

const perfectSize = create(PREDEF_RES.iphoneX.dp);

// for the list in the end
let eventDataArray = [
    {
        date: '2021-05-03',
        title: 'Titulo del trabajo',
        color: "#ff4a7f",
        id: 0
    },
    {
        date: '2021-05-04',
        title: 'Titulo del trabajo',
        color: "#4875e9",
        id: 1
    },
    {
        date: '2021-05-19',
        title: 'Titulo del trabajo',
        color: "#7adcef",
        id: 2
    },
    {
        date: '2021-05-08',
        title: 'Titulo del trabajo',
        color: "#7adcef",
        id: 3
    },
    {
        date: '2021-05-08',
        title: 'Titulo del trabajo',
        color: "#7adcef",
        id: 4
    },
    {
        date: '2021-05-09',
        title: 'Titulo del trabajo',
        color: "#7adcef",
        id: 5
    },
    {
        date: '2021-05-09',
        title: 'Titulo del trabajo',
        color: "#7adcef",
        id: 6
    },
    {
        date: '2021-05-09',
        title: 'Titulo del trabajo',
        color: "#7adcef",
        id: 7
    },
]

/**
 * Search date in the data with the selected date and the date of the array
 * @param {*} param0
 * @returns
 */
function FindDate({ date }) {
    let data = eventDataArray.filter(el => el.date == moment(date).format('YYYY-MM-DD'))
    if (data.length < 0) {
        return <Text style={{ color: '#77838f', fontSize: 16 }}>{moment(date).format('dddd, D')}</Text>
    } else return (
        data.map((date, i) => (
            <View key={i}>
                <View style={{
                    marginTop: 5,
                    marginBottom: 10,
                    borderLeftWidth: 6,
                    borderLeftColor: date.color,
                    borderBottomStyle: 'solid',
                    borderRadius: 8,
                    paddingLeft: 20,
                    height: 54,
                    width: 354
                }}>
                    <Text style={{ color: '#77838f', fontSize: 14, marginTop: 6 }}>{date.title}</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{`${moment(date.date).format('LT')} a ${moment(date.date).format('LT')}`}</Text>
                </View>
            </View>
        ))
    )
}

function DrawOval({ date, isPressed }) {
    let data = eventDataArray.filter(el => el.date == moment(date).format('YYYY-MM-DD'))
    if (data.length < 0) {
        return <Text style={{ color: '#77838f', fontSize: 16 }}>{moment(date).format('dddd, D')}</Text>
    } else {
        return (
            !isPressed && data.map((date, i) => (
                <View
                    key={i}
                    style={{
                        width: 4,
                        height: 4,
                        borderRadius: 100 / 2,
                        backgroundColor: date.color,

                    }}></View>
            ))
        )
    }
}


export default function CalendarWithoutEvents() {
    const navigation = useNavigation()
    const [selectedLanguage, setSelectedLanguage] = useState('Semanal');
    const [days, setDays] = useState([])
    const [selectedDay, setSelectedDay] = useState(null)
    const [isPressed, setIsPressed] = useState(null)

    useEffect(() => {
        const startOfWeek = moment().startOf('isoWeek');
        const endOfWeek = moment().endOf('isoWeek');

        let day = startOfWeek;
        let daysArr = []

        while (day <= endOfWeek) {
            daysArr.push(day.toDate())
            day = day.clone().add(1, 'd');
        }

        setDays(daysArr)
    }, [])

    const _selectDay = (day, i) => {
        setSelectedDay(day)
        setIsPressed(i)
    }

    return (
        // Container
        <View style={{
            width: '100%',
            height: '100%',
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
            <View>

                {/*  header */}
                <View View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', }
                }>
                    {/* <Calendar /> */}
                    {/* Month */}
                    <View style={{ marginTop: 10 }}>
                        {/* TODO: Actual month */}
                        <Text style={{ fontSize: 26, lineHeight: 26, fontWeight: 'bold' }}>Calendario</Text>
                    </View>
                    {/* Picker for mes / semanal */}
                    <View style={{ borderRadius: 8, borderWidth: 1, borderColor: '#e8eef4', width: 110, height: 50 }}>
                        <Picker
                            style={{ width: 110, height: 50, fontSize: 16, fontWeight: 'bold' }}
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }>
                            <Picker.Item label='Mes' value='Mes' />
                            <Picker.Item label='Semanal' value='Semanal' />
                        </Picker>
                    </View>
                </View>
                {/* Calendar Semanal */}
                <View>
                    {/* Dias de la semana */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {/* Show days */}
                        {
                            days.map((day, i) => <Text key={i} style={{ fontSize: 16, lineHeight: 24, color: '#7b8188', marginTop: 26 }}>{moment(day, 'YYYY/MM/DD').format('dddd').substring(0, 3)}</Text>)
                        }
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {/* Days in numbers */}
                        {
                            days.map((day, i) => (
                                <TouchableOpacity
                                    key={i}
                                    onPress={() => _selectDay(day, i)}
                                    style={i == isPressed ? { width: 39, backgroundColor: '#4875e9', height: 39, borderRadius: 10, marginTop: 8 } : { width: 39, height: 39, borderRadius: 10, marginTop: 8 }}
                                >

                                    <Text key={i} style={i == isPressed ? { fontSize: 16, lineHeight: 24, color: 'white', textAlign: 'center', marginTop: 8 } : { fontSize: 16, lineHeight: 24, color: '#7b8188', textAlign: 'center', marginTop: 8 }}>{moment(day).format('D')}</Text>
                                    {/* Oval */}
                                    <View style={{}}>
                                        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <DrawOval date={day} isPressed={i == isPressed} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }

                    </View>
                </View>
                {/* Events */}


                {
                    selectedDay && (
                        <View>
                            <Text style={{ color: '#77838f', fontSize: 16, marginTop: 60 }}>{moment(selectedDay).format('dddd D')}</Text>
                            <View style={{ marginTop: 10 }} >
                                <FindDate date={selectedDay} />
                            </View>
                        </View>
                    )
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
