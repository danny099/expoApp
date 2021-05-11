import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { useNavigation } from "@react-navigation/native";


// Styles
import { GlobalStyles } from '../../globals/styles';
import { Constants } from '../../globals/constant';


//components
import StyledTouch from '../../components/StyledTouch';


export default function NotificacionesUsuario() {
    const navigation = useNavigation()

    return (

        <ScrollView vertical>
            <View style={styles.container}>
                {/* X */}
                <View style={{
                    ...GlobalStyles.flexBetween,
                    ...GlobalStyles.row,
                    width: Constants.width100,
                    marginTop: 30,
                }}>
                    <StyledTouch title={'<'} onClick={() => {
                        navigation.goBack();
                    }} />
                </View>
                {/* Notifications */}
                <View>
                    <Text style={{ marginTop: 20, fontSize: 25, fontWeight: 'bold', alignSelf: 'flex-start' }}>Notificaciones</Text>
                </View>

                {/* Item HOY */}
                <View style={{ marginTop: 20 }}>
                    <Text style={{ alignSelf: 'flex-start', fontSize: 16, fontWeight: 'bold' }}>Hoy</Text>
                    {/* Notification */}
                    <TouchableOpacity style={styles.input__container}>
                        <View style={styles.input__oval}>
                        </View>
                        <View style={{ fontSize: 14, flexShrink: 1, marginTop: 14 }}>
                            <Text>Tienes un turno aprobado 🥳</Text>
                            <Text style={{ color: '#717171', marginTop: 5 }}>09:20 am</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ marginTop: 20, color: '#d1d1d1', fontSize: 25, textAlign: 'right', marginRight: 20 }}>{'>'}</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Line */}
                    <View style={{
                        width: 298,
                        marginTop: 20,
                        borderBottomColor: '#ececec',
                        borderBottomWidth: 1,
                        alignSelf: "flex-end",
                        marginBottom: 31

                    }}></View>
                    {/* Notification */}
                    <TouchableOpacity style={styles.input__container}>
                        <View style={styles.input__oval}>
                        </View>
                        <View style={{ fontSize: 14, flexShrink: 1, marginTop: 14 }}>
                            <Text>Lorem ipsum dolor sit amet  </Text>
                            <Text style={{ color: '#717171', marginTop: 5 }}>08:46 am</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ marginTop: 20, color: '#d1d1d1', fontSize: 25, textAlign: 'right', marginRight: 20 }}>{'>'}</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Line */}
                    <View style={{
                        width: 298,
                        marginTop: 20,
                        borderBottomColor: '#ececec',
                        borderBottomWidth: 1,
                        alignSelf: "flex-end",
                        marginBottom: 31

                    }}></View>
                </View>


                {/* Item 10 abril */}
                <View style={{ marginTop: 20 }}>
                    <Text style={{ alignSelf: 'flex-start', fontSize: 16, fontWeight: 'bold' }}>10 de abril</Text>
                    {/* Notification */}
                    <TouchableOpacity style={styles.input__container}>
                        <View style={styles.input__oval}>
                        </View>
                        <View style={{ fontSize: 14, flexShrink: 1, marginTop: 14 }}>
                            <Text>Lorem ipsum dolor sit amet consectetur </Text>
                            <Text style={{ color: '#717171', marginTop: 5 }}>09:20 am</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ marginTop: 20, color: '#d1d1d1', fontSize: 25, textAlign: 'right', marginRight: 20 }}>{'>'}</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Line */}
                    <View style={{
                        width: 298,
                        marginTop: 20,
                        borderBottomColor: '#ececec',
                        borderBottomWidth: 1,
                        alignSelf: "flex-end",
                        marginBottom: 31

                    }}></View>
                </View>

                {/* Item 9 de abril */}
                <View style={{ marginTop: 20 }}>
                    <Text style={{ alignSelf: 'flex-start', fontSize: 16, fontWeight: 'bold' }}>9 de abril</Text>
                    {/* Notification */}
                    <TouchableOpacity style={styles.input__container}>
                        <View style={styles.input__oval}>
                        </View>
                        <View style={{ fontSize: 14, flexShrink: 1, marginTop: 14 }}>
                            <Text>Lorem ipsum dolor sit</Text>
                            <Text style={{ color: '#717171', marginTop: 5 }}>09:06 am</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ marginTop: 20, color: '#d1d1d1', fontSize: 25, textAlign: 'right', marginRight: 20 }}>{'>'}</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Line */}
                    <View style={{
                        width: 298,
                        marginTop: 20,
                        borderBottomColor: '#ececec',
                        borderBottomWidth: 1,
                        alignSelf: "flex-end",
                        marginBottom: 31

                    }}></View>
                    {/* Notification */}
                    <TouchableOpacity style={styles.input__container}>
                        <View style={styles.input__oval}>
                        </View>
                        <View style={{ fontSize: 14, flexShrink: 1, marginTop: 14 }}>
                            <Text>Lorem ipsum dolor sit amet consectetur </Text>
                            <Text style={{ color: '#717171', marginTop: 5 }}>09:06 am</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ marginTop: 20, color: '#d1d1d1', fontSize: 25, textAlign: 'right', marginRight: 20 }}>{'>'}</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Line */}
                    <View style={{
                        width: 298,
                        marginTop: 20,
                        borderBottomColor: '#ececec',
                        borderBottomWidth: 1,
                        alignSelf: "flex-end",
                        marginBottom: 31

                    }}></View>
                </View>

                {/* Item 8 de abril */}
                <View style={{ marginTop: 20 }}>
                    <Text style={{ alignSelf: 'flex-start', fontSize: 16, fontWeight: 'bold' }}>8 de abril</Text>
                    {/* Notification */}
                    <TouchableOpacity style={styles.input__container}>
                        <View style={styles.input__oval}>
                        </View>
                        <View style={{ fontSize: 14, flexShrink: 1, marginTop: 14 }}>
                            <Text>Lorem ipsum dolor sit</Text>
                            <Text style={{ color: '#717171', marginTop: 5 }}>09:06 am</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ marginTop: 20, color: '#d1d1d1', fontSize: 25, textAlign: 'right', marginRight: 20 }}>{'>'}</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Line */}
                    <View style={{
                        width: 298,
                        marginTop: 20,
                        borderBottomColor: '#ececec',
                        borderBottomWidth: 1,
                        alignSelf: "flex-end",
                        marginBottom: 31

                    }}></View>
                    {/* Notification */}
                    <TouchableOpacity style={styles.input__container}>
                        <View style={styles.input__oval}>
                        </View>
                        <View style={{ fontSize: 14, flexShrink: 1, marginTop: 14 }}>
                            <Text>Lorem ipsum dolor sit amet consectetur </Text>
                            <Text style={{ color: '#717171', marginTop: 5 }}>09:06 am</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ marginTop: 20, color: '#d1d1d1', fontSize: 25, textAlign: 'right', marginRight: 20 }}>{'>'}</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Line */}
                    <View style={{
                        width: 298,
                        marginTop: 20,
                        borderBottomColor: '#ececec',
                        borderBottomWidth: 1,
                        alignSelf: "flex-end",
                        marginBottom: 31

                    }}></View>
                </View>




            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        ...GlobalStyles.container,

    },
    goHomeTxt: {
        color: '#4875e9',
        marginTop: 30,
        fontSize: 16
    },
    input__container: {
        flexDirection: 'row',
        borderRadius: 20
    },
    input__oval: {
        width: 42,
        height: 42,
        borderRadius: 100 / 2,
        backgroundColor: "#d1d1d1",
        marginTop: 20,
        marginLeft: .1,
        marginRight: 15,
        borderColor: '#d1d1d1'
    }
})
