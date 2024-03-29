// Import the necessary icon
import { FiHome } from 'react-icons/fi';
import { MdGroupAdd, MdReplay, MdAccountCircle, MdAccountBalanceWallet } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
// Your component
const MyComponent = (props) => {
    // Your component logic
    const history = useHistory();

    let resultTab = "";
    if (props.tabName === "Home") {
        resultTab = <FiHome size={30} className="mr-3tab-icon align-self-center" />
    } else if (props.tabName === "Invite") {
        resultTab = <MdGroupAdd size={30} className="mr-3tab-icon align-self-center" />
    } else if (props.tabName === "Recharge") {
        resultTab = <MdAccountBalanceWallet size={30} className="mr-3tab-icon align-self-center" />
    } else if (props.tabName === "My") {
        resultTab = <MdAccountCircle size={30} className="mr-3tab-icon align-self-center" />
    }
    return (
        <div className=' d-flex flex-column align-items-center text-center' onClick={() => history.push(`/${props.tabName}`)}>
            {resultTab}
            <span className=''>{props.tabName}</span>
        </div>
    );
};

export default MyComponent;
