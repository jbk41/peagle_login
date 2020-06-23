import React from 'react';


const defaultValue =  {
    userID: 'jbkr1',
    firstName: 'justin',
    lastName: 'kim',
    email: 'jbk41@duke.adu',
    doB: '12/12/1912',
    org: 'Duke'
}

const context = React.createContext(defaultValue);
console.log(context);

export class UserProfileInfo extends React.Component {
  state = {
      userID: 'jbkr1',
      firstName: 'justin',
      lastName: 'kim',
      email: 'jbk41@duke.adu',
      doB: '12/12/1912',
      org: 'Duke'
  }

  onProfileUpdate = (profile) => {
    this.setState({
        userID: profile.userID,
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        doB: profile.doB,
        org: profile.org
     });


  };

  render() {
    return (
      <context.Provider
        value={{ ...this.state, onProfileUpdate: this.onProfileUpdate }}
      >
        {this.props.children}
      </context.Provider>
    );
  }
}

export default context;
