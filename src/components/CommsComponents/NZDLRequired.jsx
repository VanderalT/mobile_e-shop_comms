import { useEffect, useRef, useState } from "react";
import Signature from "./Signature";

function NZDLRequired (props) {

    const mobileContent = useRef(null);
    const emailContent = useRef(null);


    const selectMtxt = () => {
        var mobileRange = document.createRange();
        mobileRange.selectNode(mobileContent.current);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(mobileRange);
    }

    const selectEmail = () => {
        var emailRange = document.createRange();
        emailRange.selectNode(emailContent.current);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(emailRange);
    }

    //Disables select button until all form is filled
    const [formFilled, setFormFilled] = useState('');

    useEffect(() => {
        if(props.customerName === ''||props.agentName === ''||props.dotNumber === ''||props.dueDate === ''){
            setFormFilled(true);
        }
        else{
            setFormFilled(false);
        }
    }, [props.customerName,props.agentName,props.dotNumber,props.dueDate])

    return(
        <div id="commsOutput">
            <div className="comms-header">
                <h2>Mtxt:</h2>
                <button onClick={selectMtxt} id="selectMtxtButton" disabled={formFilled}>Select Text</button>
            </div>
            <div className="comms-mobile-content">
                <p ref={mobileContent}>
                Kia Ora {props.customerName}, it's {props.agentName} from One NZ,
                We are trying to process your mobile order {props.dotNumber} however we need more information to be able to continue.
                To proceed with your order we need to see a copy of the front and back of your NZ Drivers License. 
                We'll send you an email shortly, please respond to the email the required details attached by {props.dueDate}.
                Nga Mihi, {props.agentName} from One NZ.
                </p>
            </div>
            <div className="comms-header">
                <h2>Email:</h2>
                <button onClick={selectEmail} disabled={formFilled}>Select Email</button>
            </div>
            <div className="comms-email-content">
                <p ref={emailContent}>
                    Kia Ora {props.customerName}, <br />
                    <br />
                    It's {props.agentName} from One NZ, <br />
                    <br />
                    We are trying to process your mobile order {props.dotNumber} however we need more information to be able to continue. <br />
                    <br />
                    To proceed with your order we need to see a copy of the front and back of your NZ Drivers License. <br />
                    <br />
                    Please respond to this email with the required details attached by {props.dueDate}. <br />
                    <br />
                    Nga Mihi, <br />
                    <Signature agentName={props.agentName} />
                </p>
            </div>
        </div>
    );

}

export default NZDLRequired