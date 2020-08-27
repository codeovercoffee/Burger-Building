import React from "react";
import Aux from "./Aux";

function layout(props) {
  return (
    <Aux>
      <div>Toolbar , SideDrawer, Backdrop</div>
      <main className="Content">{props.children}</main>
    </Aux>
  );
}

export default layout;
