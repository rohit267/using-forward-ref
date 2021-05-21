import React, { useState, forwardRef } from "react";

const Child = forwardRef((props, ref) => {
  // USING FORWARD REF
  const [state, setState] = useState({
    value: ""
  });

  ref.current = state; // ASSIGN THE REF.CURRENT to the CHILD's STATE

  function textChangeHandler(e) {
    // console.log(ref);
    setState((s) => ({ ...s, value: e.target.value })); // UPDATE THE STATE ON CHANGE
  }

  return (
    <div>
      <input
        type="text"
        name="text"
        value={state.value}
        onChange={textChangeHandler}
      />
    </div>
  );
});

export default Child;
