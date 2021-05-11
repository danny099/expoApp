import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    KeyboardAvoidingView,
    ActivityIndicator,
} from 'react-native';
import {create, PREDEF_RES} from 'react-native-pixel-perfect';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {GlobalStyles} from '../globals/styles';
import {Constants} from '../globals/constant';

const perfectSize = create(PREDEF_RES.iphoneX.dp);

export default class StyledFlatList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };

        this.renderedItem = this.renderedItem.bind(this);
    }

    componentDidMount() {
        this.setState({
            data: this.props.data,
        });
    }

    renderedItem(value) {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => {
                    // this.props.onClick();
                    this.props.navigation.navigate('Details', {data: value})
                }}
            >
                <View style={styles.row}>
                    <Text style={{fontSize: Constants.betweenFont}}>{value.title}</Text>
                    <View style={styles.price}>
                        <Text style={{color: 'white'}}>
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

                    <Text style={{marginLeft: perfectSize(10)}}>{value.address}</Text>
                </View>

                <View style={{flexDirection: 'row', ...GlobalStyles.flexBetween, marginTop: perfectSize(10)}}>
                    <View style={{flexDirection: 'row'}}>
                        <SimpleLineIcons
                            name={'calendar'}
                            size={perfectSize(20)}
                            color={'blue'}
                        />
                        <Text style={{marginLeft: perfectSize(10)}}>{value.date}</Text>
                    </View>
                    <View style={styles.time}>
                        <Text>{value.time}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={{height: '100%'}}>
                {
                    this.state.data.length !== 0 ?
                        <FlatList
                            data={this.state.data}
                            renderItem={({item}) =>
                                this.renderedItem(item)
                            }
                            keyExtractor={(item, index) => index}
                            // ItemSeparatorComponent={() => {return (<Divider style={{backgroundColor : '#999', marginVertical : 20 }}/>)}}
                            ListFooterComponent={() => {
                                return (
                                    <View style={{height: 20}}/>
                                );
                            }}
                        />
                        :
                        <View style={{...GlobalStyles.flexCenter, padding: 30}}>
                            <Text style={{fontSize: Constants.betweenFont}}>
                                Por ahora no tenemos turnos disponibles para ti, pero no te preocupes, pronto te
                                avisaremos.
                            </Text>
                        </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    row: {
        ...GlobalStyles.flexBetween,
        flexDirection: 'row',
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
    contentContainer: {
        // paddingVertical: perfectSize(200),
        // marginBottom: perfectSize(200),
        backgroundColor: 'pink',
        // paddingVertical: 200
    },
});
