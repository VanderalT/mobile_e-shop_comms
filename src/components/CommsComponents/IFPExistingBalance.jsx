import { useEffect, useRef, useState } from "react";
import Signature from "./Signature";

function IFPExistingBalance(props) {

    const mobileContent = useRef(null)
    const emailContent = useRef(null)

    const [pendingAmmount, setPendingAmmount] = useState('');

    const pendingAmmountChange = event => {
        setPendingAmmount(event.target.value);
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
        if(props.customerName === ''||props.agentName === ''||props.dotNumber === ''||props.dueDate === ''||pendingAmmount === ''){
            setFormFilled(true);
        }
        else{
            setFormFilled(false);
        }
    }, [props.customerName,props.agentName,props.dotNumber,props.dueDate,pendingAmmount])

    return (
        <div id="commsOutput">
            <div className="comms-extra-details">
                <label htmlFor="pendingAmmount">Pending amount</label>
                <input name="pendingAmmount" type="number" onChange={pendingAmmountChange}></input>
            </div>
            <div className="comms-header">
                <h2>Mtxt:</h2>
                <button onClick={selectMtxt} disabled={formFilled}>Select Text</button>
            </div>
            <div className="comms-mobile-content">
                <p ref={mobileContent}>
                    Kia ora {props.customerName}, we are trying to process your mobile order however you still have an existing InterestFree Payment Device you are paying off.
                    We'll send you an email shortly confirming the details needed. Please make sure to respond with the required information by {props.dueDate}. Ngā mihi, {props.agentName} at One NZ.
                </p>
            </div>
            <div className="comms-header">
                <h2>Email:</h2>
                <button onClick={selectEmail} disabled={formFilled}>Select Email</button>
            </div>
            <div className="comms-email-content">
                <p ref={emailContent}>
                    Kia ora {props.customerName},<br />
                    <br />
                    It's {props.agentName} here from One NZ. We're working on your online order {props.dotNumber} but need a bit more info from you first.<br />
                    <br />
                    Currently you still have an existing Interest Free Payment Device you are paying off, with a remaining amount of ${pendingAmmount}<br />
                    <br />
                    Please respond to this email confirming if you are happy for this amount to be billed in full to your next invoice or if you wish to cancel your mobile order.<br />
                    <br />
                    Please provide the required information by {props.dueDate}.<br />
                    <br />
                    Ngā mihi,<br />
                    <br/>
                    <Signature agentName={props.agentName} />
                </p>
            </div>
        </div>
    );

}

export default IFPExistingBalance