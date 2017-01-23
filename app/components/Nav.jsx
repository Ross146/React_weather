var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
        <div>
            <h2>Navigation</h2>
            <IndexLink activeStyle={{fontWeight: 'bold'}} activeClassName="active" to="/">Get Weather</IndexLink>
            <Link activeStyle={{fontWeight: 'bold'}} activeClassName="active" to="/about">About</Link>
            <Link activeStyle={{fontWeight: 'bold'}} activeClassName="active" to="/examples">Examples</Link>
        </div>
    );
};

module.exports = Nav;