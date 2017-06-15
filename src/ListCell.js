import React, { Component, PropTypes } from 'react';
import { View, Text, Image } from 'react-native';
import { List, ListItem } from 'native-base';
import styles from './Style';
import RowCell from './RowCell';

const array = ['Politics','Society','Movies', 'Sports', 'Dramas'];

export default class ListCell extends Component {

  static propTypes = {
    rowId: PropTypes.any,
    Data: PropTypes.any
  };

  render() {
    const { rowId, Data } = this.props;
    console.log('Row list ==> ', rowId);
    return(
      <View style={{ flex: 1}}>
        <View>
          <Text>{Data}</Text>
        </View>
        <List
          dataArray={array}
          style={{ marginTop: 5 }}
          enableEmptySections={true}
          scrollEnabled = {true}
          horizontal = {true}
          automaticallyAdjustContentInsets = {true}
          canCancelContentTouches = {true}
          renderRow={(rowData, sectionID, rowID) =>{
            return(
              <ListItem itemDivider>
                <RowCell cellId={rowId} rowId={rowID} DataRow={rowData}  />
              </ListItem>
            )}}
        />
      </View>
    );
  }
}
