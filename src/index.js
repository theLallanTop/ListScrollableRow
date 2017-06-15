import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import { List, ListItem, Col, Row } from 'native-base';
import Cell from './ListCell';
import styles from './Style';

const array = ['RECOMMENDED','POLITICS','SOCIETY','ENTERTENMENT', 'MOVIES', 'SPORTS'];

export default class Setting extends Component {

  renderHeader = () => {
  return(
      <View style={{ backgroundColor: '#192', alignItems: 'center', justifyContent: 'center', marginTop: 20, flex: 0.3}}>
        <Text style={{ fontSize: 22 }}>List</Text>
      </View>
    )
  };

  render() {
    return(
      <View style={{ flex: 1 }}>
      <List
        dataArray={array}
        renderHeader={this.renderHeader.bind(this)}
        style={{ marginTop: 0 }}
        renderRow={(rowData, sectionID, rowID) =>{
              return(
                 <ListItem itemDivider>
                     <Cell rowId={rowID} Data={rowData} />
                 </ListItem>
         )}}
      />
      </View>
    );
  }
}
