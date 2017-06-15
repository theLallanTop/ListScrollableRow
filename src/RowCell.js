import React, { Component, PropTypes } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Icon } from 'native-base';
import styles from './Style';

export default class RowCell extends Component {

  static propTypes = {
    rowId: PropTypes.any,
    cellId: PropTypes.any,
    DataRow: PropTypes.any
  };

  onPressStoriesButton = ( cellId, id) => {
    console.log('console ==>>', cellId, id);
  };

  onPressAddButton = (id, cellId) => {

  };

  render(){
    const { rowId, cellId, DataRow } = this.props;
    return(
      <View style={[styles.container, {width: 120}]}>
       <View style={{ borderWidth: 0.5, borderRadius: 3.5, borderColor: 'gray' }}>
        <View style={{ height: 80, backgroundColor: 'red' }} />
         <TouchableOpacity
           style={{ margin: 10 }}
           onPress={this.onPressStoriesButton.bind(this,cellId,rowId)}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'red', fontSize: 18 }}>{DataRow}</Text>
              </View>
         </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
           <TouchableOpacity
             style={{ alignItems: 'center',backgroundColor: '#000000', justifyContent: 'center', width: 40, borderRadius: 5,  }}
             onPress={this.onPressAddButton.bind(this,cellId,rowId)}>
              <Text style={{ fontSize: 20, color:'#FF2145'}}>+</Text>
           </TouchableOpacity>
        </View>
      </View>
    );
  }
}
