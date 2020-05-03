import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SplashGreeting extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = {
            active: false
        };
        this.toggleClass = this.toggleClass.bind(this);
        this.linkToReservations = this.linkToReservations.bind(this);
    }
    
    componentDidUpdate() {
        if (!this.props.currentUser && this.state.active) {
            this.state.active = false;
        };
    }

    toggleClass() {
        const currentState = this.state.active
        this.setState( { active: !currentState } )
    }

    linkToReservations() {
        this.props.history.push(`/users/${this.props.currentUser.id}/bookings`)
    }
 
    render() {
        const { logout, currentUser, openModal } = this.props

        const sessionLinks = () => (
            <nav className="login-signup">
                <div className="nav">
                    <a href="https://github.com/hjungj21o/hoopsbnb" target="_blank" className="github">Github</a>
                    <button className="form-button" onClick={() => openModal('signup')}>Sign up</button>
                    <button className="form-button" onClick={() => openModal('login')}>Log in</button>
                </div>
            </nav>
        );

        const personalGreeting = () => (
            <div className="header-dropdown">
                <a href="https://github.com/hjungj21o/hoopsbnb" target="_blank" className="github">Github</a>
                <button className="header-name" onClick={this.toggleClass} onBlur={this.toggleClass} >
                    {currentUser.first_name}
                    &nbsp;
                    <i className="fas fa-user-circle" />
                </button>
                <ul className={this.state.active ? "dropdown-menu-on" : "dropdown-menu-off"} >
                    <li className="dropdown-first" onMouseDown={this.linkToReservations}>Reservations</li>
                    <hr/>
                    <li className="dropdown-second" onMouseDown={logout}>Logout</li>
                </ul>
            </div>
        );
        const whichUser = currentUser ? personalGreeting() : sessionLinks();

        return (
            <>
            <nav className="fixed-nav-bar">
                <div className="nav-left">
                        <Link to="/" className="logo"><img src={"https://hoopsbnb-seed.s3.amazonaws.com/logo.png"} alt="logo" /></Link>
                </div>
                <div className="nav-right">
                    {whichUser}
                </div>
            </nav>
            
            </>
        );
    }
}

export default withRouter(SplashGreeting);
