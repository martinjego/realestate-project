import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/sort-drawer';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listingActions from '../actions/listing_actions';

class SortDrawerContainer extends Component {
  _onClickSort(type) {
    this.props.listing_actions.updateSortType(type)
  }
  render() {
    const { sort_type } = this.props; 
    return (
      <View style={styles.container}>
        <Text>Sort by</Text>
        <TouchableOpacity 
          style={ (sort_type == 'unit') ? styles.selectedButton : styles.notSelectedButton  } 
          onPress={() => this._onClickSort('unit')}>
          <Text style={styles.buttonText}>Unit Type</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={ (sort_type == 'floor') ? styles.selectedButton : styles.notSelectedButton  } 
          onPress={() => this._onClickSort('floor')}>
          <Text style={styles.buttonText}>Floor Area</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={ (sort_type == 'sale') ? styles.selectedButton : styles.notSelectedButton  } 
          onPress={() => this._onClickSort('sale')}>
          <Text style={styles.buttonText}>Sale Price</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={ (sort_type == 'lease') ? styles.selectedButton : styles.notSelectedButton  } 
          onPress={() => this._onClickSort('lease')}>
          <Text style={styles.buttonText}>Lease Price</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={ (sort_type == 'favorite') ? styles.selectedButton : styles.notSelectedButton  } 
          onPress={() => this._onClickSort('favorite')}>
          <Text style={styles.buttonText}>Favorites</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    sort_type: state.listings.sortType
  } 
}

function mapDispatchToProps(dispatch) {
  return {
    listing_actions: bindActionCreators(listingActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortDrawerContainer);
