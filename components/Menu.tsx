import React = require('react');

export default function Menu(props) {
  return (
    <div>
      {props.showMenu && (
        <div>
          <h1>Hello</h1>
          <h2>World</h2>
        </div>
      )}
    </div>
  );
}
