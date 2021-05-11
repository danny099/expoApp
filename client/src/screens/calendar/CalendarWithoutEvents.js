import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
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
                <Calendar />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({})
