'use strict';
import React, {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

class Launchpad extends Component {

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={ () => this.props.navigator.push({name: 'example'}) }>
                    <Text style={{ backgroundColor: '#fff',}}>goto example</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

module.exports = Launchpad;