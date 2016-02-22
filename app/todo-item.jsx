import React from 'react';
 
export default class TodoItem extends React.Component {
  render() {
    return <div alt={this.props.text}>{this.props.title}</div>
  }
}
