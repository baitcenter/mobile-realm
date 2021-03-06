import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {observer, Provider} from 'mobx-react/native';
import Routes from '../../container/Routes';
// import getAllStores  from '../mobx'
import configSchema from "../realm/configure";
import {stores} from '../../stores/view'

type Props = {};
export default class ReactApp extends Component<Props> {
    constructor() {
        super();
        configSchema()
    }

    render() {
        console.disableYellowBox = true
        return (
            <Provider {...stores}>
                <Routes/>
            </Provider>
        )
    }
}
