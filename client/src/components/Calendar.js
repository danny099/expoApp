import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { Agenda, Calendar, LocaleConfig } from 'react-native-calendars';
import { Picker } from '@react-native-picker/picker';

import StyledTouchPressed from './StyledTouchPressed';
import StyledTouch from './StyledTouch';

// Styles
import { GlobalStyles } from '../globals/styles';
import { Constants } from '../globals/constant';

// SVG

import Ilust_14 from '../icons/ilust-14'




LocaleConfig.locales['en'] = {
    formatAccessibilityLabel: "dddd d 'of' MMMM 'of' yyyy",
    monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    monthNamesShort: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
    dayNames: ['Sunday', 'Lun', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['S', 'D', 'L', 'M', 'Mi', 'J', 'V']
};


export default function CalendarComponent() {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [months, setMonths] = useState([
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ])
    const [monthsNumber, setMonthsNumber] = useState(1)
    const [monthSelected, setMonthSelected] = useState('Enero')

    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    // For the component calendar
    let eventData = {
        '2021-05-17': {
            dots: [
                { key: 'vacation', color: '#7adcef', selectedDotColor: 'red' },
                { key: 'massage', color: '#ff4a7f', selectedDotColor: 'green' }
            ]
        },
        '2021-05-21': {
            dots: [
                { key: 'vacation', color: '#4875e9', selectedDotColor: 'red' },
                { key: 'massage', color: '#7adcef', selectedDotColor: 'green' }
            ]
        },
        '2021-05-22': {
            dots: [
                { key: 'vacation', color: '#4875e9', selectedDotColor: 'red' },
            ]
        },
        '2021-05-23': {
            dots: [
                { key: 'vacation', color: '#4875e9', selectedDotColor: 'red' },
            ]
        },
        '2021-05-24': {
            dots: [
                { key: 'vacation', color: '#4875e9', selectedDotColor: 'red' },
            ]
        },
        '2021-05-25': {
            dots: [
                { key: 'vacation', color: '#4875e9', selectedDotColor: 'red' },
            ]
        },
        '2021-05-26': {
            dots: [
                { key: 'vacation', color: '#7adcef', selectedDotColor: 'red' },
                { key: 'massage', color: '#ff4a7f', selectedDotColor: 'green' }
            ]
        },
    };

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
        },
    ]


    const renderItem = ({ item }) => (
        <View style={{}} >
            <Text style={{ color: '#77838f', fontSize: 16 }}>{new Date(item.date.replace(/-+/g, '/')).toLocaleDateString('es-MX', options)}</Text>
            <View style={{
                marginTop: 20,
                marginBottom: 20,
                borderLeftWidth: 6,
                borderLeftColor: '#7adcef',
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
        <View>
            {/*  header */}
            <View View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', }
            }>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 26, lineHeight: 26, fontWeight: 'bold' }}>Calendario</Text>
                </View>
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
            </View >
            {/* Second Header */}
            <View style={{ marginTop: 20 }}>
                <ScrollView horizontal={true}>
                    <View style={{ flexDirection: 'row' }}>
                        {months && months.length > 0 && months.map((month) => (
                            <View style={{}}>
                                <View style={monthSelected == month ? {
                                    display: "flex", marginRight: Constants.marginTop10

                                } : { display: "none" }}>
                                    <StyledTouchPressed title={month} />

                                </View>
                                <View style={monthSelected != month ? {
                                    display: "flex", marginRight: Constants.marginTop10

                                } : { display: "none" }}>
                                    <StyledTouch title={month} onClick={() => {
                                        setMonthSelected(month);
                                        setMonthsNumber(months.indexOf(months) + 1)
                                    }} />
                                </View>

                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View >
            {/* Calendar */}
            <View style={{

            }}>
                <Calendar
                    // Initially visible month. Default = Date()
                    // current={`2021-05-1`}
                    // // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    // minDate={'2012-05-10'}
                    // // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    // maxDate={'2012-05-30'}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(day) => { console.log('selected day', day) }}
                    // Handler which gets executed on day long press. Default = undefined
                    onDayLongPress={(day) => { console.log('selected day', day) }}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'yyyy MM'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={(month) => { console.log('month changed', month) }}
                    // Hide month navigation arrows. Default = false
                    hideArrows={true}
                    // Replace default arrows with custom ones (direction can be 'left' or 'right')
                    renderArrow={(direction) => (<Arrow />)}
                    // Do not show days of other months in month page. Default = false
                    // hideExtraDays={true}
                    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                    // day from another month that is visible in calendar page. Default = false
                    // disableMonthChange={true}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={1}
                    // Hide day names. Default = false
                    // hideDayNames={true}
                    // Show week numbers to the left. Default = false
                    // showWeekNumbers={true}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    // onPressArrowLeft={subtractMonth => subtractMonth()}
                    // // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                    // onPressArrowRight={addMonth => addMonth()}
                    // Disable left arrow. Default = false
                    // disableArrowLeft={true}
                    // // Disable right arrow. Default = false
                    // disableArrowRight={true}
                    // // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                    // disableAllTouchEventsForDisabledDays={true}
                    // Replace default month and year title with custom one. the function receive a date as parameter.
                    renderHeader={(date) => {/*Return JSX*/ }}
                    // Enable the option to swipe between months. Default = false
                    enableSwipeMonths={true}
                    // markedDates={events.map(item => {
                    //     date: item.date,
                    //     MultiDotMarking: {{dots:}}
                    // })}
                    markedDates={
                        eventData ? eventData : null
                    }
                    markingType={'multi-dot'}
                />
            </View >
            {/* Events */}
            {/* TODO: Arreglar el scroll */}
            <View style={{

            }}>
                <FlatList
                    data={eventDataArray}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    }
});