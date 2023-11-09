import { useEffect, useRef, useState } from "react";
import Signature from "./Signature";

function CancelledIFPOrder (props) {

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
                    We haven't heard back from you about the additional info we needed for your mobile order {props.dotNumber}. 
                    Unfortunately, this means we've had to cancel it. 
                    Please call us on 0800 800 021 if you'd like to place a new order. 
                    Your $99 Deposit will be refunded within 15 days into your account. 
                    Ngā mihi, {props.agentName} from One NZ.
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
                    We haven't heard back from you about the additional info we needed for your mobile order {props.dotNumber}. <br />
                    <br />
                    Unfortunately, this means we've had to cancel it.  <br />
                    <br />
                    Please call us on 0800 800 021 if you'd like to place a new order. <br />
                    <br />
                    Your $99 Deposit will be refunded within 15 days into your account. <br />
                    <br />
                    Ngā mihi,
                    <Signature agentName={props.agentName} />
                </p>
            </div>
        </div>
    );

}

export default CancelledIFPOrder