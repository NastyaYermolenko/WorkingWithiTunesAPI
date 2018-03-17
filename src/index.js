import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/jquery/dist/jquery"
import "../node_modules/popper.js/dist/popper"
import "../node_modules/bootstrap/dist/js/bootstrap";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from "jquery";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


$("td").click(function(){
    alert("1111");
    $(this).find("span.glyphicon").toggleClass("glyphicon-minus");
});