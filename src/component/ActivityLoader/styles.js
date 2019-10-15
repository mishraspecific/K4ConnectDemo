import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width * 0.95,
        justifyContent: 'center',
        borderRadius: 10,
        margin: 10,
        height: 100,
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10
    }
})