    import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    ActivityIndicator,
    ScrollView, FlatList,
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
import Notification from '../../components/Notification';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const perfectSize = create(PREDEF_RES.iphoneX.dp);

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            screenVisible: false,
            data: [],
            seguridad: true,
            cocina: false,
            contaduria: false,
            notification1: false,
        };

        this.emptyScreen = this.emptyScreen.bind(this);
        this.screen = this.screen.bind(this);
        this.clickFiltros = this.clickFiltros.bind(this);
        this.getData = this.getData.bind(this);
        this.seguridadClick = this.seguridadClick.bind(this);
        this.cocinaClick = this.cocinaClick.bind(this);
        this.contaduriaClick = this.contaduriaClick.bind(this);
        this.renderedItem = this.renderedItem.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ screenVisible: true });
        }, 1000);

        this.getData();

        setTimeout(() => {
            this.setState({ notification1: true })
        }, 5000);
    }

    getData() {
        this.setState({
            data: {
                seguridad: [
                    {
                        title: 'Guardia de seguridad',
                        price: 16,
                        address: 'Santiago Centro · Región Metropolitana',
                        date: '15 de abril · 15 mayo',
                        time: '09:00 a 17:00 hrs',
                    },
                    {
                        title: 'Guardia de seguridad',
                        price: 18,
                        address: 'Remoto',
                        date: '15 de abril · 15 mayo',
                        time: '09:00 a 17:00 hrs',
                    },
                    {
                        title: 'Guardia de seguridad',
                        price: 20,
                        address: 'Santiago Centro · Región Metropolitana',
                        date: '15 de abril · 15 mayo',
                        time: '09:00 a 17:00 hrs',
                    },
                    {
                        title: 'Guardia de seguridad',
                        price: 20,
                        address: 'Santiago Centro · Región Metropolitana',
                        date: '15 de abril · 15 mayo',
                        time: '09:00 a 17:00 hrs',
                    },
                    {
                        title: 'Guardia de seguridad',
                        price: 20,
                        address: 'Santiago Centro · Región Metropolitana',
                        date: '15 de abril · 15 mayo',
                        time: '09:00 a 17:00 hrs',
                    },
                ],
                cocina: [
                    {
                        title: 'Guardia de seguridad',
                        price: 16,
                        address: 'Santiago Centro · Región Metropolitana',
                        date: '15 de abril · 15 mayo',
                        time: '09:00 a 17:00 hrs',
                    },
                    {
                        title: 'Guardia de seguridad',
                        price: 18,
                        address: 'Remoto',
                        date: '15 de abril · 15 mayo',
                        time: '09:00 a 17:00 hrs',
                    },
                    {
                        title: 'Guardia de seguridad',
                        price: 20,
                        address: 'Santiago Centro · Región Metropolitana',
                        date: '15 de abril · 15 mayo',
                        time: '09:00 a 17:00 hrs',
                    },
                ],
                contaduria: [],
            },
        });
    }

    seguridadClick() {
        this.setState({
            seguridad: true,
            cocina: false,
            contaduria: false,
        });
    }

    cocinaClick() {
        this.setState({
            seguridad: false,
            cocina: true,
            contaduria: false,
        });
    }

    contaduriaClick() {
        this.setState({
            seguridad: false,
            cocina: false,
            contaduria: true,
        });
    }

    emptyScreen() {
        return (
            <View style={{ ...GlobalStyles.flexCenter, padding: perfectSize(30), marginTop: '40%' }}>
                <Text style={{ fontSize: Constants.bigFont, fontWeight: 'bold' }}>
                    Hola Felipe 👋
                </Text>
                <Text style={{ fontSize: Constants.smallFont, marginTop: Constants.marginTop20 }}>
                    Por ahora no tenemos turnos disponibles para ti, pero no te preocupes, pronto te avisaremos.
                </Text>
            </View>
        );
    }

    clickFiltros() {
        this.props.navigation.navigate('Filtro');
    }

    renderedItem(value) {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => {
                    this.props.navigation.navigate('Details', { data: value })
                }}
            >
                <View style={styles.row}>
                    <Text style={{ fontSize: Constants.betweenFont }}>{value.title}</Text>
                    <View style={styles.price}>
                        <Text style={{ color: 'white' }}>
                            ${value.price}/hr
                        </Text>
                    </View>
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
            </TouchableOpacity>
        );
    }

    flatList = (data) => {
        return (
            <View style={{ height: '100%' }}>
                {
                    data.length !== 0 ?
                        <FlatList
                            data={data}
                            renderItem={({ item }) =>
                                this.renderedItem(item)
                            }
                            keyExtractor={(item, index) => index}
                            // ItemSeparatorComponent={() => {return (<Divider style={{backgroundColor : '#999', marginVertical : 20 }}/>)}}
                            ListFooterComponent={() => {
                                return (
                                    <View style={{ height: 20 }} />
                                );
                            }}
                        />
                        :
                        <View style={{ ...GlobalStyles.flexCenter, padding: 30 }}>
                            <Text style={{ fontSize: Constants.betweenFont }}>
                                Por ahora no tenemos turnos disponibles para ti, pero no te preocupes, pronto te
                                avisaremos.
                            </Text>
                        </View>
                }
            </View>
        );
    }

    screen() {
        return (
            <View style={{ marginTop: Constants.marginTop20 }}>
                <Text style={{ fontSize: Constants.mediumFont, fontWeight: 'bold' }}>
                    Hola Felipe,
                </Text>
                {
                    !this.state.notification1 &&
                    <Text style={{ fontSize: Constants.smallFont }}>
                        Ve los turnos que tenemos para tí.
                    </Text>
                }

                {
                    this.state.notification1 &&
                    <Notification
                        title={'Tus turnos'}
                        description={'Aquí podrás ver información de próximos turnos y turnos pendientes'}
                        onClick={() => { this.props.navigation.navigate('Turns') }}
                    />
                }

                {/*<Notification*/}
                {/*    title={'Tienes un turno aprobado 🥳'}*/}
                {/*    description={'Ingresa aquí y confirma tu asistencia.'}*/}
                {/*/>*/}
                {/*<Notification*/}
                {/*    title={'Recuerda hacer check-in 👀'}*/}
                {/*    description={'Ingresa aquí y realiza el check-in antes de empezar el trabajar.'}*/}
                {/*/>*/}

                <View
                    style={{
                        width: Constants.width100,
                        height: Constants.marginTop10,
                        backgroundColor: Constants.greyColor,
                        marginTop: Constants.marginTop10,
                    }}
                />

                <View style={{ flexDirection: 'row', ...GlobalStyles.flexBetween, marginTop: Constants.marginTop10 }}>
                    <Text style={{ fontSize: Constants.mediumFont, fontWeight: 'bold' }}>
                        Turnos disponibles
                    </Text>
                    <StyledTouch title={'+ Filtros'} onClick={() => {
                        this.clickFiltros();
                    }} />
                </View>

                <View style={{ ...GlobalStyles.flexAround, flexDirection: 'row', marginTop: Constants.marginTop20 }}>
                    <StyledTouch title={'Seguridad'} onClick={() => {
                        this.seguridadClick();
                    }} click={this.state.seguridad} />
                    <StyledTouch title={'Cocina'} onClick={() => {
                        this.cocinaClick();
                    }} click={this.state.cocina} />
                    <StyledTouch title={'Contaduria'} onClick={() => {
                        this.contaduriaClick();
                    }} click={this.state.contaduria} />
                </View>

                <View style={{ marginTop: Constants.marginTop20, height: this.state.notification1 ? perfectSize(350) : perfectSize(400) }}>
                    {
                        this.state.seguridad &&
                        this.flatList(this.state.data.seguridad)
                    }
                    {
                        this.state.cocina &&
                        this.flatList(this.state.data.cocina)
                    }
                    {
                        this.state.contaduria &&
                        this.flatList(this.state.data.contaduria)
                        // <StyledFlatList
                        //     data={this.state.data.contaduria}
                        //     onClick={() => {
                        //         this.props.navigation.navigate('Details', {data: this.state.data.contaduria})
                        //     }}
                        // />
                    }
                </View>
            </View>
        );
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='position'>
                <View style={GlobalStyles.container}>
                    <Header />
                    {
                        !this.state.screenVisible &&
                        this.emptyScreen()
                    }
                    {
                        this.state.screenVisible &&
                        this.screen()
                    }
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        ...GlobalStyles.flexBetween
    },
    container: {
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
