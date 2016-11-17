var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
require('jquery');
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
//require("script!./file.js");

ReactDOM.render(routes , document.getElementById('app'));
