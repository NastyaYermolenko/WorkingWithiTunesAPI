import React, { Component } from 'react';
import $ from "jquery";

class TableRow extends Component {
    constructor() {
        super();
        this.state = {class: "glyphicon-plus"};
    }
    static changeGlyphicon(){
        let $closed = $('tr[aria-expanded=false]>td>h1>span');
        let $opened = $('tr[aria-expanded=true]>td>h1>span');
        $closed.removeClass();
        $opened.removeClass();
        $closed.addClass('glyphicon glyphicon-plus');
        $opened.addClass('glyphicon glyphicon-minus');
    }
    render() {
        return (

            <tr  data-toggle="collapse" data-target={"#control"+this.props.id}
                 aria-expanded="false" aria-controls={"control"+this.props.id}
                onClick={this.changeGlyphicon.bind(this)} ref="Tr">
                <td><img src={this.props.collection_image} alt="collection_image"/></td>
                <td className="align-middle">{this.props.artistName}</td>
                <td className="align-middle">{this.props.trackName}</td>
                <td className="align-middle">{this.props.collectionName}</td>
                <td className="align-middle">{this.props.genre}</td>
                <td className="view-details align-middle text-right">
                    <h1><span className="glyphicon glyphicon-plus" ref="Span"></span></h1></td>
            </tr>
                );
    }
}

export default TableRow;