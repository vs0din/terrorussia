import React from "react";
import Draggable from "react-draggable";
import html2canvas from "html2canvas";
import TakeSnapshotButton from "./TakeSnapshotButton";
import "./DearSanta.css";

export default class BetOnRusFuture extends React.Component {
  state = {
    penances: [
      { id: 1, name: "↯", image: './assets/1.png' },
      { id: 2, name: "↯", image: './assets/2.png' },
      { id: 3, name: "↯", image: './assets/3.png' },
      { id: 4, name: "↯", image: './assets/4.png' },
      { id: 5, name: "↯", image: './assets/5.png' },
      { id: 6, name: "↯", image: './assets/6.png' },
      { id: 7, name: "↯", image: './assets/7.png' },
      { id: 8, name: "↯", image: './assets/8.png' },
      { id: 9, name: "↯", image: './assets/9.png' },
      { id: 10, name: "↯", image: './assets/10.png' },
      { id: 11, name: "↯", image: './assets/11.png' }
    ],

    gameTime: "2018-08-09 22:53",
    toEditTeam: null,
    toEditPenance: null
  };

  generatePenances = penances => {
    return penances.map((val, idx) => {
      let image = val.image ? (
        <img alt={val.name} className="penance-image" src={val.image} />
      ) : (
          <img
            alt={val.name}
            className="penance-image"
            src="assets/1.png"
            style={{ width: "40px", height: "40px", backgroundColor: "#ffffff" }}
          />
        );

      return (
        <Draggable
          key={val.id}
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[3, 3]}
        >
          <div
            className="penance-cont handle"
            onContextMenu={e => {
              e.preventDefault();
              this.editPenance(idx);
            }}
          >
            {image}
            <span className="penance-name">{val.name}</span>
          </div>
        </Draggable>
      );
    });
  };

  render() {
   
    return (
      <div className="container">
        <div className="left background-map" id="screenshotArea">
          {/* <button onClick={() => this.makeScreenshot()}>Take Screenshot</button> */}
          <div style={{display:'block', marginTop: '220px'}}>
            <div style={{padding: '15px', marginLeft:'50px', lineHeight: '2rem', color: '#4b87f3', fontSize:'1.2rem', fontWeight: '600', backgroundColor: 'white', opacity:'0.8', width: '400px'}}>
            {/* IF targetId is omitted then screenshot will take the 'body' */}
              Dear Santa,<br/><br/>
              My name is &nbsp;
              <input placeholder="your name" style={{color: '#4b87f3', textAlign: 'center', fontSize:'22px', fontWeight: '600',width: '200px', border: 'none', borderBottom: '1px solid black'}}></input><br/>&nbsp;
              I'm waiting for long time to write you this letter. Mom says that i've been really good last &nbsp;
              <input placeholder="your age" style={{color: '#4b87f3', textAlign: 'center', fontSize:'22px', fontWeight: '600',width: '130px', border: 'none', borderBottom: '1px solid black'}}></input>
                &nbsp;years... I never asked you for anything. <br/>But now, I beg you to punish fucking Terrorussians.<br/>They deserve it!<br/><br/>PS>If you find this very troublesome, please at least make so that Huylo is dead.<br/><br/>
            </div>
            <TakeSnapshotButton targetID={"screenshotArea"} visible={true}>
              <div className="animated-box in blinking-text" >
                <h1>Take the Screenshot</h1>
                <p>of your wish list letter <br/>and then send it to Santa</p>
              </div>
            </TakeSnapshotButton>
            <div className="field-borders">{this.generatePenances(this.state.penances)}</div>
          </div>
        </div>

        <div className="right">
           <div className="field background-lineup">
              <p className='blinking-text' style={{fontWeight: 800, fontSize: 16, color: 'white', padding: 20}}>Place the icons on the map using drag drop, and then take a screenshot for the letter to Santa Claus:</p>
              <hr></hr>
              
          </div>
        </div>
      </div>
    );
  }
}
