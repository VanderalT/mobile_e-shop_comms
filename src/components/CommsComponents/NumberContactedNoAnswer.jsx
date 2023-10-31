import { useEffect, useRef, useState } from "react";
import Signature from "./Signature";

function NumberContactedNoAnswer (props) {

    const mobileContent = useRef(null);
    const emailContent = useRef(null);

    const [contactNumber, setContactNumber] = useState('');

    const contactNumberChange = event => {
        setContactNumber(event.target.value);
    }

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
        if(props.customerName === ''||props.agentName === ''||props.dotNumber === ''||props.dueDate === ''||contactNumber === ''){
            setFormFilled(true);
        }
        else{
            setFormFilled(false);
        }
    }, [props.customerName,props.agentName,props.dotNumber,props.dueDate,contactNumber])

    return(
        <div id="commsOutput">
            <div className="comms-extra-details">
                <label htmlFor="contactNumber">Contact Number</label>
                <input name="contactNumber" type="number" onChange={contactNumberChange}></input>
            </div>
            <div className="comms-header">
                <h2>Mtxt:</h2>
                <button onClick={selectMtxt} id="selectMtxtButton" disabled={formFilled}>Select Text</button>
            </div>
            <div className="comms-mobile-content">
                <p ref={mobileContent}>
                    Kia Ora {props.customerName},
                    it's {props.agentName} from One NZ.
                    We tried calling your contact number {contactNumber} but we could not get in touch with you. 
                    We need to speak with you to ask some verification before we proceed your order. 
                    Please give us a call on 0800 837 867 before {props.dueDate} - Mon - Fri 8:00 AM to 6:00 PM - Just mention your ref number: {props.dotNumber}. 
                    Nga mihi, {props.agentName} from One NZ
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
                    It's {props.agentName} from One NZ. <br />
                    <br />
                    We tried calling your contact number {contactNumber} but we could not get in touch with you. <br />
                    <br />
                    We need to speak with you to ask some verification before we proceed your order. <br />
                    <br />
                    Please give us a call on 0800 837 867 before {props.dueDate} - Mon - Fri 8:00 AM to 6:00 PM - Just mention your ref number: {props.dotNumber}. <br />
                    <br />
                    Nga mihi,
                    <Signature agentName={props.agentName} />
                </p>
            </div>
        </div>
    );

}

export default NumberContactedNoAnswer