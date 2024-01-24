import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Tab from '../components/tab';
import NavbarTab from '../components/navbarTab';
import { MdAccountCircle } from 'react-icons/md';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const My = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <header className="bg-primary text-white p-3 fixed-top w-100">
                <div className="row">
                    <div className="col">
                        <MdAccountCircle className="text-white" style={{ height: "30px", width: "30px" }} />
                        <span className='ml-2 text-dark mt-2' style={{ fontSize: "20px", fontWeight: "bold" }}>Account Details</span>
                    </div>
                </div>
            </header>
            <main className='flex-grow-1 p-3 mt-5'>
                <div className="row p-2 m-1 mt-2 rounded" style={{ background: "azure" }}>
                    <div className="col-2 borde p-0">
                        <MdAccountCircle className="text-dark" style={{ height: "50px", width: "50px" }} />
                    </div>
                    <div className="col">
                        <span><big><b>7378744047</b></big></span>
                        <br />
                        <span className='text-dark' style={{ fontSize: "15px" }}>ID: 2112322</span>
                        <button className='btn mt-2 btn-outline-dark form-control btn-block'>Change Password</button>
                    </div>
                </div>
                <div className="row m-2 mt-3" style={{fontWeight:"bold"}}>
                    <div className="row " >
                        <div className="col-8">Financial Details</div>
                        <div className="col text-right">></div>
                        <hr className='mt-3'/>
                    </div>
                    <div className="row " >
                        <div className="col-8">Download App</div>
                        <div className="col text-right">></div>
                        <hr className="mt-3" />
                    </div>
                    <div className="row" >
                        <div className="col-8">Follow us</div>
                        <div className="col text-right">></div>
                        <hr className="mt-3" />
                    </div>
                    <div className="row" >
                        <div className="col-8">Support</div>
                        <div className="col text-right">></div>
                        <hr className="mt-3" />
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <Link>Sign out</Link>
                        </div>
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

export default My;
