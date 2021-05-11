import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';

import Login from './auth/Login';
import Signup from './auth/Signup';
import Intro from './intro';
import Home from './home';
import Menu from './menu';
import Filtro from './home/Filtro';
import Details from './home/Details';
import Welcome from './welcome';
import Register from './auth/Skip';
//Account
import Profile from './account/Profile';
import Tus_Documentos from './account/Tus_Documentos';
//Turns
import Turns from './turns';
import ConfirmTurn from './turns/ConfirmTurn';
import Genial from './turns/Genial';
import CheckIn from './turns/CheckIn';
import CheckOut from './turns/CheckOut';
import WaitingTurn from './turns/WaitingTurn';
import UpcomingShifts from './turns/UpcomingShifts';
import PendingShifts from './turns/PendingShifts';

//Notifications
import Notificaciones from './notifications/Notificaciones'
import NotificacionesUsuario from './notifications/NotificacionesUsuario'
//Chat
import Inbox from './chat/Inbox'
import Chat from './chat/Chat'

//Hours
import RegisterHours from './hours/RegisterHours'

//Calendar
import CalendarWithoutEvents from '../screens/calendar/CalendarWithoutEvents'
import CalendarMonth from '../screens/calendar/CalendarMonth'
import CalendarWeek from '../screens/calendar/CalendarWeek'

//  registro de documentos
import RegisterDocuments from '../screens/registerDocuments/registerDocuments'
import TypeOfWorkOne from '../screens/registerDocuments/typeOfWorkOne'
import Listo from '../screens/registerDocuments/Listo'

const Stack = createStackNavigator();

export default class MainApp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator mode='card' headerMode='none'>
                        <Stack.Screen name='Main' component={Intro} />
                        <Stack.Screen name='Register' component={Register} />
                        <Stack.Screen name='Login' component={Login} />
                        <Stack.Screen name='Signup' component={Signup} />
                        <Stack.Screen name='Home' component={Home} />
                        <Stack.Screen name='Filtro' component={Filtro} />
                        <Stack.Screen name='Details' component={Details} />
                        <Stack.Screen name='Welcome' component={Welcome} />
                        <Stack.Screen name='Menu' component={Menu} />
                        <Stack.Screen name='Profile' component={Profile} />
                        <Stack.Screen name='Tus_Documentos' component={Tus_Documentos} />
                        <Stack.Screen name='Turns' component={Turns} />
                        <Stack.Screen name='ConfirmTurn' component={ConfirmTurn} />
                        <Stack.Screen name='Genial' component={Genial} />
                        {/* Notifications */}
                        <Stack.Screen name='Notificaciones' component={Notificaciones} />
                        <Stack.Screen name='NotificacionesUsuario' component={NotificacionesUsuario} />
                        {/* Turns */}
                        <Stack.Screen name='CheckIn' component={CheckIn} />
                        <Stack.Screen name='CheckOut' component={CheckOut} />
                        <Stack.Screen name='WaitingTurn' component={WaitingTurn} />
                        <Stack.Screen name='UpcomingShifts' component={UpcomingShifts} />
                        <Stack.Screen name='PendingShifts' component={PendingShifts} />
                        {/* Chat */}
                        <Stack.Screen name='Inbox' component={Inbox} />
                        <Stack.Screen name='Chat' component={Chat} />
                        {/* Calendar */}
                        <Stack.Screen name='CalendarWithoutEvents' component={CalendarWithoutEvents} />
                        <Stack.Screen name='CalendarMonth' component={CalendarMonth} />
                        <Stack.Screen name='CalendarWeek' component={CalendarWeek} />
                        {/* Register */}
                        <Stack.Screen name='RegisterHours' component={RegisterHours} />
                        {/* Registro de documentos */}
                        <Stack.Screen name='RegisterDocuments' component={RegisterDocuments} />
                        <Stack.Screen name='TypeOfWorkOne' component={TypeOfWorkOne} />
                        <Stack.Screen name='Listo' component={Listo} />


                        {/*<Stack.Screen name='Ques_first' component={Ques_first}/>*/}
                        {/*<Stack.Screen name='TakePicture' component={TakePicture}/>*/}
                        {/*<Stack.Screen name='Result' component={Result}/>*/}
                        {/*<Stack.Screen name='Home' component={Home}/>*/}
                        {/*<Stack.Screen name='LanguageSelect' component={LanguageSelect}/>*/}
                        {/*<Stack.Screen name='Algorithm_chart' component={Algorithm_chart}/>*/}
                        {/*<Stack.Screen name='StyledFlatList' component={StyledFlatList}/>*/}
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        );
    }
}
