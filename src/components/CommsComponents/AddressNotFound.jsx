import { useEffect, useRef, useState } from "react";
import Signature from "./Signature";

function AddressNotFoundComms (props) {

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
                    Kia ora {props.customerName}, it's {props.agentName} here from One NZ. We're working on your online order but need a bit more info from you first.
                    There seems to be a problem with the delivery address provided.
                    We'll be sending an email shortly confirming the details needed. Please respond with the required information by {props.dueDate}.
                    Your order number is {props.dotNumber}. Ngā mihi {props.agentName} from One NZ.
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
                    We're trying to process your mobile order: {props.dotNumber} however there is a problem with the delivery address provided.<br />
                    <br />
                    Please provide us with your current full delivery address, including postal code, in a response to this email.<br />
                    <br />
                    *Note: We do not send to PO Boxes*<br />
                    <br />
                    Please respond with the details required or give us a call on 0800 837 867 by {props.dueDate} &#40;Mon - Fri 8:00am to 6:00pm&#41; so we can get it sorted for you.<br />
                    <br />
                    Ngā mihi,<br />
                    <br />
                    <Signature agentName={props.agentName} />
                </p>
            </div>
        </div>
    );

}

export default AddressNotFoundComms