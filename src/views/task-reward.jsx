import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Tab from '../components/tab';
import NavbarTab from '../components/navbarTab';
import { MdCardGiftcard } from 'react-icons/md';

const TaskReward = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-primary text-white p-3 fixed-top w-100">
        <div className="row">
          <div className="col">
            <MdCardGiftcard size={30} />
            <span className='ml-2 text-dark mt-2' style={{ fontSize: "20px", fontWeight: "bold" }}>Task Reward</span>
          </div>
        </div>
      </header>
      <main className='flex-grow-1 p-3 mt-5'>
        <div className="row m-2 bg-white card text-dark p-2">
          <div className="row">
            <div className="col">
              Welcome
            </div>
            <div className='col text-right'>₹20</div>
          </div>
          <div className='bg-primary m-3 rounded' style={{ height: "10px", width:"80%"}}></div>
          <div className="row text-center">
            <div className="col">
              We will reward you with ₹20
            </div>
          </div>
          <button className='btn mt-2 btn-outline-success'>Reward</button>
        </div>
        <div className="row m-2 bg-white card text-dark p-2">
          <div className="row">
            <div className="col">
              First Recharge
            </div>
            <div className='col text-right'>₹10</div>
          </div>
          <div className='bg-primary m-3 rounded' style={{ height: "10px", width:"80%"}}></div>
          <div className="row text-center">
            <div className="col">
              This Reward is only can be claimed once you do your first recharge
            </div>
          </div>
          <button className='btn mt-2 btn-outline-success'>Reward</button>
        </div>
        <div className="row m-2 bg-white card text-dark p-2">
          <div className="row">
            <div className="col">
              Daily 100 Order
            </div>
            <div className='col text-right'>₹10</div>
          </div>
          <div className='bg-primary m-3 rounded' style={{ height: "10px", width:"80%"}}></div>
          <div className="row text-center">
            <div className="col">
              Complete daily 100 orders to get this Reward
            </div>
          </div>
          <button className='btn mt-2 btn-outline-success mb-5'>Reward</button>
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

export default TaskReward;
