import React from "react";

class HoopersDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            hoopers: 1
        };

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleDropdownBlur = this.toggleDropdownBlur.bind(this);
        this.increaseHoopers = this.increaseHoopers.bind(this);
        this.decreaseHoopers = this.decreaseHoopers.bind(this);
    }

    toggleDropdown(e) {
        e.preventDefault();
        this.setState({ open: true });
    }

    toggleDropdownBlur(e) {
        if (this.state.open === true) {
            if (e.relatedTarget === null || (e.relatedTarget.className != "hoopersnavbarDiv" && e.relatedTarget.className != "hoopersChange")) {
                this.setState({ open: !this.state.open });
            }
        }
    }

    increaseHoopers() {
        this.setState({ hoopers: this.state.hoopers + 1 });
        this.props.numHoopers(this.state.hoopers + 1);
    }

    decreaseHoopers() {
        if (this.state.hoopers > 0) {
            this.setState({ hoopers: this.state.hoopers - 1 });
            this.props.numHoopers(this.state.hoopers - 1);
        }
    }


    render() {
        let icon = <i className="fas fa-chevron-down"></i>;
        if (this.state.open) {
            icon = <i className="fas fa-chevron-up"></i>;
        }
        let minusDisabled = "minusDisabled";
        if (this.state.hoopers > 1) {
            minusDisabled = "minusAbled";
        }

        let hooperNum;
        if (this.state.hoopers === 1) {
            hooperNum = "1 Hooper";
        }
        else if (this.state.hoopers > 1) {
            hooperNum = `${this.state.hoopers} Hoopers`
        }

        return (
            <div className="hoopersnavbarDiv" onBlur={this.toggleDropdownBlur} onClick={this.toggleDropdown} tabIndex="0">
                <button className="hoopersSelect" onClick={(e) => e.preventDefault()}>{hooperNum}</button>
                <div className={this.props.arrowType}>{icon}</div>
                {this.state.open && (
                    <ul className="hoopersUl" >
                        <li> 
                            <div>Hoopers</div>
                            <div className="plusminus">
                                <button className="hoopersChange" id={minusDisabled} onClick={this.decreaseHoopers}>-</button>
                                <p> {this.state.hoopers}+ </p>
                                <button className="hoopersChange" onClick={this.increaseHoopers}>+</button>
                            </div>
                        </li>
                    </ul>
                )}
            </div>
        );
    }
}

export default HoopersDropdown;