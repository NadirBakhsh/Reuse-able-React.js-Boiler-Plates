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

/*
This Components Create for use Icons

1.Config Method:
================
Copy this url
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.1/css/all.css">

And Past in Following Drictry
Pucblic/index.html

Note: This url Old Version if you want to new version link From Fontasesome offceial Website.
2: Import And use
-----------------
* Import Icon From './components/Icon' Where You Want to use it.
* use it in Rander lik this  <Icon />

3. Props
---------
iconName={'fab fa-accusoft'}
fontSize={50}
color={'blue'}
fontWeight={100}

Final Component Look Like this

<Icon 
iconName={'fab fa-accusoft'}
fontSize={50}
color={'blue'}
fontWeight={100}}
/>



*/





