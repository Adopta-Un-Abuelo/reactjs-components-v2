import { convertToRaw, RichUtils } from "draft-js";
import React, { useEffect } from "react";
import { useState } from "react";
//Button para el editir de texto 
export const ButtonEditor = (props:any)=> {
    const { editorState, onChange } = props;
    const [selected , setSelected] = useState(false)

    const controlClicked = () => {
      let newState = null
      setSelected(!selected)
      if(props.type.control==="inline"){
            newState = RichUtils.toggleInlineStyle(
            editorState,
            props.type.value,
        );
      } else if(props.type.control==="blockType")
        newState = RichUtils.toggleBlockType(
          editorState,
          props.type.value,
        );
        onChange(newState)
    };
      return (
      <div className="bold" style={{...props.style, background: selected ? "#EBECFF":" white"}} onClick={controlClicked}>{props.text}</div>
      );
  }

  export default ButtonEditor;