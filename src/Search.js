import React, {Component} from 'react';
import axios from "axios/dist/axios";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import TableRowInfo from "./TableRowInfo";
import $ from "jquery/dist/jquery";

class Search extends Component {

    constructor() {
        super();
        this.state = {result: []};
    }


    fetchArtist(event) {
        event.preventDefault();
        let query = $("#searchInput").val();
        axios.get('https://itunes.apple.com/search?term=' + query + '&limit=10')
            .then((response) => {
                let data = response.data.results;
                let result = [];
                for (let i = 0; i < data.length; i++) {
                    result.push(<TableRow artistName={data[i].artistName} trackName={data[i].trackName}
                                          collectionName={data[i].collectionName}
                                          genre={data[i].primaryGenreName}
                                          collection_image={data[i].artworkUrl100}
                                          id={i} key={data[i].trackId}/>);
                    result.push(<TableRowInfo id={i} artistName={data[i].artistName} trackName={data[i].trackName}
                                              collectionName={data[i].collectionName} trackCount={data[i].trackCount}
                                              trackPrice={data[i].trackPrice} currency={data[i].currency}
                                              time={data[i].trackTimeMillis} collectionPrice={data[i].collectionPrice}
                                              key={data[i].trackId + "0"}/>);
                }

                this.setState({result: result});

            })
            .catch(function (error) {
                console.log(error);
            });
        return false
    }

    render() {
        return (
            <div>
                <form className="input-group mb-3 col-md-6 mx-auto" onSubmit={this.fetchArtist.bind(this)}>
                    <input type="text" className="form-control" placeholder="Search" id="searchInput"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit">
                            <span className="glyphicon glyphicon-search"></span>
                        </button>
                    </div>
                </form>
                <div className="content">
                    <table className="table table-striped table-borderless">
                        <TableHead/>
                        <tbody id="accordion">
                        {this.state.result}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Search;