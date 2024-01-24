import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Tab from '../components/tab';
import NavbarTab from '../components/navbarTab';
import { MdEmojiEvents, MdCheck } from 'react-icons/md';

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
            <main className='flex-grow-1 p-3 mt-5'>
                
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
