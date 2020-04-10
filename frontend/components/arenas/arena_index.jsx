import React from 'react';
import ArenaIndexItem from './arena_index_item';


class ArenaIndex extends React.Component {
    constructor(props) {
        super(props);
        debugger;
    }
    componentDidMount() {
        this.props.fetchArenas();
    }

    render() {
        if (!this.props.arenas) return <div>loading..</div>
        const ArenaLi = this.props.arenas.map((arena, i) => {
            return <ArenaIndexItem 
                key={ `${i}` } 
                arena={ arena } 
            />
        })
        return (
            <div>
                <div>
                    <h4>{this.props.arenas.length} Arenas to Ball </h4>
                </div>
                <div className="placeholder">
                    <ul>
                        {ArenaLi}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ArenaIndex;