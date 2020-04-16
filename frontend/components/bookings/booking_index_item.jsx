import React from 'react';

const bookingIndexItem = ({ booking }) => {
    if (Object.keys(booking).length === 0) return <div>fetching data...</div>
    
    return (
        <li className="bookings-index-item">
            hello
        </li>
    )
}

export default bookingIndexItem;