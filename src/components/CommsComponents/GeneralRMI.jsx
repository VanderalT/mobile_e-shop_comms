import { useEffect, useRef, useState } from "react";
import Signature from "./Signature";

function GeneralRMI (props) {

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
                    Kia ora {props.customerName}, it's {props.agentName} here from One NZ. 
                    We're working on your online order but need a bit more info from you first. 
                    Please give us a call on 0800 837 867 by {props.dueDate} (Mon - Fri 8:00AM to 6:00PM) so we can get it sorted for you. 
                    Just mention your ref number: {props.dotNumber}. 
                    Nga Mihi, {props.agentName} from One NZ
                </p>
            </div>
            <div className="comms-header">
                <h2>Email:</h2>
                <button onClick={selectEmail} disabled={formFilled}>Select Email</button>
            </div>
            <div className="comms-email-content">
                <p ref={emailContent}>
                    Kia ora {props.customerName}, <br />
                    <br />
                    It's {props.agentName} here from One NZ. <br />
                    <br />
                    We're working on your online order but need a bit more info from you first. <br />
                    <br />
                    Please give us a call on 0800 837 867 by {props.dueDate} (Mon - Fri 8:00AM to 6:00PM) so we can get it sorted for you. <br />
                    <br /> 
                    Just mention your ref number: {props.dotNumber}. <br />
                    <br />
                    Nga Mihi,
                    <Signature agentName={props.agentName} />
                </p>
            </div>
        </div>
    );

}

export default GeneralRMI