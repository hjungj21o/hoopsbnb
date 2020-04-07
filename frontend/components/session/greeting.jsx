// import React from 'react';
// import { Link } from 'react-router-dom';

// debugger;
// class Greeting extends React.Component {
//     sessionLinks() {
//         <nav className="login-signup">
//             <Link to="/login">Login</Link>
//       &nbsp;or&nbsp;
//             <Link to="/signup">Sign up!</Link>
//         </nav>
//     }

//     greetings() {
//         <div>
//             <h2>Welcome back, {this.props.currentUser.name}</h2>
//             <button onClick={this.props.logout}>Log Out</button>
//         </div>
//     }

//     render() {
//         debugger;
//         const whichUser = this.props.currentUser ? this.greetings() : this.sessionLinks()

//         return (
//             <div>
//                 {whichUser}
//             </div>
//         )
//     }
// }

// export default Greeting;

import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ( { logout, currentUser} ) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            
            <Link to="/signup">Sign up!</Link>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );
    debugger;

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
