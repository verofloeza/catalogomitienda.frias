import {
    StyleSheet,
    View
} from 'react-native';

import React from 'react';

function Card(props) {
    return (
        <View style={{...styles.inputContainer, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '50%',
        alignContent: 'center',
        padding: 10

    },
});

export default Card;