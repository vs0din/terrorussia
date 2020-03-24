import React, { useState } from 'react';
import html2canvas from "html2canvas";

const TakeSnapshotButton = (props) => {

  const makeScreenshot = async () => {
    await setVisible('none');
    html2canvas(document.getElementById(props.targetID), {
      allowTaint: false,
      logging: true,
      useCORS: true
    }).then(function (canvas) {

      window.open().document.write('<img src="' + canvas.toDataURL() + '" />');
    });
  };

  const [visible, setVisible] = useState(true || props.visible);

  return (
    <span>
    <div style={{display: visible}} onClick={makeScreenshot}>
      {props.children}
    </div>
    </span>
    )

}

export default TakeSnapshotButton;