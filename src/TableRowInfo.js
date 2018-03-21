import React, {Component} from 'react';

class TableRowInfo extends Component {
    msToTime(s) {
        let pad = (n, z = 2) => ('00' + n).slice(-z);
        return pad((s % 3.6e6) / 6e4 | 0) + ':' + pad((s % 6e4) / 1000 | 0);
    }

    render() {
        return (
            <tr key={this.props.id} id={"control" + this.props.id} className="collapse" data-parent="#accordion">

                <td></td>
                <td colSpan="4">
                    <div className="container row">
                        <h2 className="col-12">{this.props.artistName} - {this.props.trackName} <span
                            className="glyphicon glyphicon-music" ref="Span"></span></h2>
                        <div className="col-md-6">
                            <b>Collection:</b> {this.props.collectionName} <br/>
                            <b>Track count:</b> {this.props.trackCount} <br/>
                            <b>Price:</b> {this.props.collectionPrice} {this.props.currency}
                        </div>
                        <div className="col-md-6">
                            <b>Track duration:</b> {this.msToTime(this.props.time)} min <br/>
                            <b>Track price:</b> {this.props.trackPrice} {this.props.currency}
                        </div>

                    </div>
                </td>
                <td></td>
            </tr>

        );
    }
}

export default TableRowInfo;