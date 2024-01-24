import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Tab from '../components/tab';
import NavbarTab from '../components/navbarTab';
import { MdEmojiEvents, MdCheck } from 'react-icons/md';
import { Link } from 'react-router-dom'
const MobileLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-primary text-white p-3 fixed-top w-100">
        <div className="row">
          <div className="col">
            <svg viewBox="0 0 1024 1024" className="" style={{ height: "30px", width: "30px" }}>
              <path
                d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"
                className=""
              >
              </path>
            </svg>
            <span className='ml-2 text-dark mt-2' style={{ fontSize: "20px", fontWeight: "bold" }}>Home</span>
          </div>
        </div>
      </header>
      <main className="flex-grow-1 p-3 mt-5">
        {/* Balance container */}
        <div className="row homeBalance p-2">
          <div className="col">
            <span className='text-secondary'><b>Balance</b></span>
            <br />
            <span className='text-dark' style={{ fontSize: "20px" }}><b>₹1000.00</b></span>
            <br />
            <span className='text-secondary' style={{ fontSize: "15px" }}><small><b>ID:1234567</b></small></span>
          </div>
          <div className="col text-center">
            <Link to={'/login'}></Link><button className='btn btn-outline-primary mb-1'>Recharge</button></Link>
            <br />
            <button className='btn btn-success'>Withdraw</button>
          </div>
        </div>
        {/*Reward and check in*/}
        <div className="row ml- p-2 pl-4" style={{ fontSize: "15px" }}>
          <div className="col text-success">
            <MdEmojiEvents size={20} className="mr- align-self-center" /><b>Task Reward</b>
          </div>
          <div className="col text-danger text-center">
            <MdCheck size={20} className="mr- align-self-center" /><b>Check In</b>
          </div>
        </div>
        {/*banner*/}
        <div className='row mt-1 mb-1'>
          <div className="col-12 p-4 mb-1 shadow bg-white rounded border-0">
            <b>Task Reward</b>
          </div>
        </div>
        {/*Parity Tabs*/}
        <div className="row p-2">
          <div className="col-6 p-4 mb-1 overflow-auto  shadow bg-light rounded border-0 text-center">
            <div className='mb-1'>
              <span className="rounded-circle bg-danger text-white text-center p-2" style={{ width: "40px", height: "40px" }}>
                <b>3</b>
              </span>
              <span className="rounded-circle bg-success text-white text-center p-2" style={{ width: "25px", height: "25px" }}>
                <b>4</b>
              </span>
              <br />
              <span className="rounded-circle bg-primary text-white text-center p-2" style={{ width: "40px", height: "40px" }}>
                <b>5</b>
              </span>
            </div>
            <b>30 Sec</b>
          </div>
          <div className="col-6 p-4 mb-1 shadow bg-light rounded border-0 text-center">
            <div className='mb-1'>
              <span className="rounded-circle bg-danger text-white text-center p-2" style={{ width: "40px", height: "40px" }}>
                <b>7</b>
              </span>
              <span className="rounded-circle bg-success text-white text-center p-2" style={{ width: "25px", height: "25px" }}>
                <b>8</b>
              </span>
              <br />
              <span className="rounded-circle bg-primary text-white text-center p-2" style={{ width: "40px", height: "40px" }}>
                <b>0</b>
              </span>
            </div>
            <b>1 Min</b>
          </div>
          <div className="col-6 p-4 mb-5 shadow bg-light rounded border-0 text-center">
            <div className='mb-1'>
              <span className="rounded-circle bg-danger text-white text-center p-2" style={{ width: "40px", height: "40px" }}>
                <b>1</b>
              </span>
              <span className="rounded-circle bg-success text-white text-center p-2" style={{ width: "25px", height: "25px" }}>
                <b>2</b>
              </span>
              <br />
              <span className="rounded-circle bg-primary text-white text-center p-2" style={{ width: "40px", height: "40px" }}>
                <b>0</b>
              </span>
            </div>
            <b>3 Min</b>
          </div>
          <div className="col-6 p-4 mb-5 shadow bg-light rounded border-0 text-center">
            <div className='mb-1'>
              <span className="rounded-circle bg-danger text-white text-center p-2" style={{ width: "40px", height: "40px" }}>
                <b>9</b>
              </span>
              <span className="rounded-circle bg-success text-white text-center p-2" style={{ width: "25px", height: "25px" }}>
                <b>6</b>
              </span>
              <br />
              <span className="rounded-circle bg-primary text-white text-center p-2" style={{ width: "40px", height: "40px" }}>
                <b>5</b>
              </span>
            </div>
            <b>5 Min</b>
          </div>
        </div>
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

export default MobileLayout;
