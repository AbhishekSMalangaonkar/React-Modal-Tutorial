import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
        </button>
        </div>
        <div className="title">
          <h1>Your Stake NFT</h1>
        </div>
        <div className="body">
          <p>Your Staked NFTs !</p>
        </div>
        <div className="footer">
          
          <button>Stake NFTs</button>
        </div>
        
      </div><br>
      </br>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
           
          </button>
        </div>
        <div className="title">
          <h1>Your UnStake NFT</h1>
        </div>
        <div className="body">
          <p>Your UnStaked NFTs !</p>
        </div>
        <div className="footer">
          
          <button>UnStake NFTs</button>
        </div>
        
      </div><br>
      </br>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
      
          </button>
        </div>
        <div className="title">
          <h1>Your Claim Rewards</h1>
        </div>
        <div className="body">
          <p>Claim Your Rewards !</p>
        </div>
        <div className="footer">
         
          <button>Claim</button>
        </div>
        <br></br>
        </div>
        <div className="container">
          
        </div>
    </div>
    
  );
}

export default Modal;
