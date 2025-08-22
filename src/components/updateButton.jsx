import React from "react";

 function UpdateButton({ onUpdate }) {
  return (
    <button
      onClick={onUpdate}
      
    >
      Fetch New Dog
    </button>
  );
}

export default UpdateButton