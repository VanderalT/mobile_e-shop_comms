import { useEffect, useRef, useState } from "react";
import Signature from "./Signature";

function ExistingAccountConfirmation(props) {

    const mobileExistingAccContent = useRef(null)
    const emailExistingAccContent = useRef(null)

    const [existingAccount, setExistingAccountNumber] = useState('');

    const existingAccountChange = event => {
        setExistingAccountNumber(event.target.value);
    }

    const selectMtxt = () => {
        var mobileRange = document.createRange();
        mobileRange.selectNode(mobileExistingAccContent.current);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(mobileRange);
    }

    const selectEmail = () => {
        var emailRange = document.createRange();
        emailRange.selectNode(emailExistingAccContent.current);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(emailRange);
    }

    //Disables select button until all form is filled
    const [formFilled, setFormFilled] = useState('');

    useEffect(() => {
        if(props.customerName === ''||props.agentName === ''||props.dotNumber === ''||props.dueDate === ''||existingAccount === ''){
            setFormFilled(true);
        }
        else{
            setFormFilled(false);
        }
    }, [props.customerName,props.agentName,props.dotNumber,props.dueDate,existingAccount])

    return (
        <div id="commsOutput">
            <div className="comms-extra-details">
                <label htmlFor="existingAccount">Existing Account</label>
                <input name="existingAccount" onChange={existingAccountChange}></input>
            </div>
            <div className="comms-header">
                <h2>Mtxt:</h2>
                <button onClick={selectMtxt} disabled={formFilled}>Select Text</button>
            </div>
            <div className="comms-mobile-content">
                <p ref={mobileExistingAccContent}>
                    Hi {props.customerName}, it's {props.agentName} here from One NZ. We're working on your online order but need a bit more info from you first.
                    Give us a call on 0800 837 867 by {props.dueDate} &#40;Mon - Fri 8:00am to 6:00pm&#41; so we can get it sorted for you, or alternatively respond to the
                    email sent by Online Shop. Your reference number is {props.dotNumber}. Thanks {props.agentName} from One NZ.
                </p>
            </div>
            <div className="comms-header">
                <h2>Email:</h2>
                <button onClick={selectEmail} disabled={formFilled}>Select Email</button>
            </div>
            <div className="comms-email-content">
                <p ref={emailExistingAccContent}>
                    Hi {props.customerName},<br />
                    <br />
                    It's {props.agentName} here from One NZ.<br />
                    <br />
                    We're working on your online order but need a bit more info from you first.<br />
                    <br />
                    It seems that you have an existing billing account: {existingAccount}.<br />
                    <br />
                    Please advise whether you wish for us to connect on the current <br />
                    <br />
                    You can do so by giving us a call on 0800 837 867 by {props.dueDate} &#40;Mon - Fri 8:00am to 6:00pm&#41; so we can get it sorted for you, or alternatively respond to this
                    email with the details.<br />
                    <br />
                    Your reference number is {props.dotNumber}.<br />
                    <br />
                    Nga Mihi,<br />
                    <br/>
                    <Signature agentName={props.agentName} />
                </p>
            </div>
        </div>
    )
}

export default ExistingAccountConfirmation