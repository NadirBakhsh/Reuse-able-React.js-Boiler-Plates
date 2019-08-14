import React, { Component } from 'react';

class Icon extends Component {   
render() {
 const Classes = {
   Icon: {
     fontSize: this.props.fontSize,
     color: this.props.color,
     fontWeight: this.props.fontWeight,}
     }
    return (<i className={this.props.iconName} style={Classes.Icon}  ></i>);
 }
}

export default Icon;






