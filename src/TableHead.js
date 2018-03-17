import React, { Component } from 'react';

class TableHead extends Component {
    render() {
        return (
            <thead>
            <tr>
                <th></th>
                <th>Artist</th>
                <th>Track</th>
                <th>Collection</th>
                <th>Genre</th>
                <th></th>
            </tr>
            </thead>
        );
    }
}

export default TableHead;