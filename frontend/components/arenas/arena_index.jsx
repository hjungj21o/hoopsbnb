import React from 'react';
import ArenaIndexItem from './arena_index_item';


class ArenaIndex extends React.Component {
    constructor(props) {
        super(props);
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
            <div className="arenas-search-result-container">
                <div className="arenas-search-title">
                    <h2>{this.props.arenas.length} Arenas to Ball </h2>
                </div>
                <div className="arenas-search-list">
                    <ul className="arenas-search-list-ul">
                        {ArenaLi}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ArenaIndex;