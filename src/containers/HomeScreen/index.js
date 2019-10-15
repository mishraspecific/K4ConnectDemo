import React, {Component } from 'react';
import {
    View,
    FlatList,
    StyleSheet
} from 'react-native';
import getUsers from '../../store/actions/getUsers'
import ActivityLoader from '../../component/ActivityLoader';
import { connect } from 'react-redux';
import UsersListItem from '../../component/UserListItem'
class HomeScreen extends Component {
    
    componentDidMount() {
       this.fetchUserData()
    }

    fetchUserData = () => {
        try {
            this.props.getUsers(); 
        } catch (error) {
          console.error(error);
        }
    };

    renderItem = (item) =>{
        return (
            <UsersListItem
                rowData= {item}
                navigateToDetailScreen= {this.navigateToDetailScreen}
            />
        );
    }

    navigateToDetailScreen = user => {
        this.props.navigation.navigate('DetailScreen', user);
    };

    _keyExtractor = (item, index) => `${item.guid}`;
     ;

    drawFlatList = ({loading, data}) => {
        return !loading ? (
            <FlatList
                extraData={this.state}
                data={
                    data? data
                        : []
                }
                renderItem={this.renderItem}
                keyExtractor={this._keyExtractor}
                contentContainerStyle={{ marginHorizontal: 5, marginTop: 15 }}
                horizontal={false}
                removeClippedSubviews
            />
        ) : (
            <ActivityLoader />
        );
    };
    render() {
        return (
            <View style={styles.container}>
                { this.drawFlatList(this.props.users)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {flex: 1},
});

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(getUsers()),
});

export default connect(
    store => ({
        users: store.users,
    }),
    mapDispatchToProps
)(HomeScreen);
