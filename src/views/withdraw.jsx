import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Tab from '../components/tab';
import NavbarTab from '../components/navbarTab';
import { MdAccountBalanceWallet } from 'react-icons/md';

const Withdraw = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-primary text-white p-3 fixed-top w-100">
        <div className="row">
          <div className="col">
            <MdAccountBalanceWallet size={25} />
            <span className='ml-2 text-dark mt-3' style={{ fontSize: "18px", fontWeight: "bold" }}>Withdraw</span>
          </div>
          <div className="col text-right mt-1">
            <b>Help</b>
          </div>
        </div>
      </header>
      <main className='flex-grow-1 p-3 mt-5'>
        <div className="row mt-3">
          <div className="col text-center">
            <span><b><big>Balance</big></b></span>
            <br />
            <span className='text-dark' style={{ fontSize: "35px" }}><b>₹110.00</b></span>
          </div>
        </div>
        <div className='row'>
          <div className="col">
            <big><b>Amount</b></big>
            <br />
            <div className="row">
              <div className="col-2">
                <span style={{ fontSize: "50px" }}><b>₹</b></span>
              </div>
              <div className="col">
                <input type="text" className='form-control mt-3' style={{height:"50px", border:"none", borderBottomWidth:"1px", borderBottomStyle:"solid", fontSize:"40px", fontWeight:"bold", borderRadius:"none"}}/>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-3 pt-4">
          <div className="col bg-secondary text-white p-2 text-center mr-1" style={{fontWeight:"bold"}}> <h5 className='mt-1'>₹500</h5> </div>
          <div className="col bg-secondary text-white p-2 text-center mr-1" style={{fontWeight:"bold"}}> <h5 className='mt-1'>₹1000</h5> </div>
          <div className="col bg-secondary text-white p-2 text-center mr-1" style={{fontWeight:"bold"}}> <h5 className='mt-1'>₹1500</h5> </div>
        </div>
        <div className="row pr-3 pl-3">
          <div className="col bg-secondary text-white p-2 text-center mr-1" style={{fontWeight:"bold"}}> <h5 className='mt-1'>₹500</h5> </div>
          <div className="col bg-secondary text-white p-2 text-center mr-1" style={{fontWeight:"bold"}}> <h5 className='mt-1'>₹1000</h5> </div>
          <div className="col bg-secondary text-white p-2 text-center mr-1" style={{fontWeight:"bold"}}> <h5 className='mt-1'>₹1500</h5> </div>
        </div>
        <button className='btn btn-primary btn-block mt-2' style={{marginBottom:"50px"}}><b>Withdraw</b></button>
      </main>
      <footer className="bg-primary text-white text-center p-3 fixed-bottom w-100">
        <div className="row text-dark" style={{ fontWeight: "bold" }}>
          <div className="col">
            <NavbarTab tabName="Home"></NavbarTab>
          </div>
          <div className="col">
            <NavbarTab tabName="Invite"></NavbarTab>
          </div>
          <div className="col">
            <NavbarTab tabName="Recharge"></NavbarTab>
          </div>
          <div className="col">
            <NavbarTab tabName="My"></NavbarTab>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Withdraw;
