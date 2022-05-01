import React, { Component } from 'react'

export default class StyledDate extends Component {
  render() {
    const dateTime = new Date(this.props.date);
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1;
    const date = dateTime.getDate();

    return (
      <time dateTime={`${year}-${month}-${date}`}>
        {`${year}/${month}/${date}`}
      </time>
    )
  }
}
