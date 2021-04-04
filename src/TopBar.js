import React from "react";

function TopBar(props) {
  return (
    <div class="top">
      <p>Total Words: {props.contents.split(" ").length}</p>
    </div>
  );
}

export default TopBar;
