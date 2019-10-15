import React, {PureComponent} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { ListItem } from 'react-native-elements'

const UsersListItem = (props) => {
    const {rowData, navigateToDetailScreen} = props;
    const item = rowData.item;
    return (
        <ListItem
            title={item.firstname}
            subtitle={item.address}
            bottomDivider
            onPress={() => navigateToDetailScreen(item)}

        />
    );
}
export default UsersListItem;
