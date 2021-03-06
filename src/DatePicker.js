import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:"1996-03-20"}
    
  }

  render(){
    return (
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        androidMode="spinner"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="1900-01-01"
        maxDate="2020-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}