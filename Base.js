'use strict';
import React, {
    Component,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';

var Launchpad = require('./Launchpad');
var Example = require('./Example');

class Base extends Component {

    renderScene(route, nav) {
        var Component;
        switch (route.name) {
            case 'launchpad':
                Component = (
                        <Launchpad navigator={nav}/>
                );
                break;
            case 'example':
                Component = (
                    <Example navigator={nav}/>
                );
                break;
            default:
                Component = (
                    <Example navigator={nav}/>
                );
                break;
        }
        return Component
    }

    render() {
        return (
            <Navigator
                ref={'nav'}
                style={{flex:1, backgroundColor:'#ccc'}}
                initialRoute={{name: 'launchpad'}}
                /*initialRoute={{name: 'example'}} */
                configureScene={(route) => {
              if (route.sceneConfig) {
                return route.sceneConfig;
              }
              return Navigator.SceneConfigs.FloatFromRight;
            }}
                renderScene={this.renderScene}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
});

module.exports = Base;