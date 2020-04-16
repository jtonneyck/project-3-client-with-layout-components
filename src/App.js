import React from 'react'
import {Route, Switch} from "react-router-dom";
import {Home, AddStudent, Students, About, Login, Signup, Profile}  from "./pages/index";
import ProtectedRoute from "./components/ProtectedRoute";
import Notifications from "./context/Notifications";
import Notification from "./components/Notification";
class App extends React.Component {
    constructor(){
      super()
      this.addNotification = this.addNotification.bind(this);
      this.removeOldestNotification = this.removeOldestNotification.bind(this);
    }

    state = {
      notifications: []
    }

    addNotification(notification){
      this.setState({
        notifications: [...this.state.notifications, notification]
      },()=> {
        setTimeout(this.removeOldestNotification, 2000)
      })
    }

    removeOldestNotification(){
      let notificationsCopy = [...this.state.notifications];
      notificationsCopy.shift();
      this.setState({
        notifications: notificationsCopy
      })
    }

    render(){

      return (
        <Notifications.Provider value={this.addNotification}>
          {this.state.notifications.map((notification)=> <Notification message={notification.message}/>)}
          <Switch>
            <Route exact path="/(|home)" component={Home}/>
            <Route path="/about" component={About}/>
            <ProtectedRoute path="/students" component={Students}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/profile" component={Profile}/>
            <ProtectedRoute path="/add-student" component={AddStudent}/>
          </Switch>
        </Notifications.Provider >
      )
    }

}

export default App

