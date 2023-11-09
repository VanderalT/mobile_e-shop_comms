import { useEffect, useRef, useState } from "react";
import Signature from "./Signature";

function AlternateIdentificationRequired(props) {

    const [formFilled, setFormFilled] = useState('');

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

    useEffect(() => {
        if(props.customerName === ''||props.agentName === ''||props.dotNumber === ''||props.dueDate === ''){
            setFormFilled(true);
        }
        else{
            setFormFilled(false);
        }
    }, [props.customerName,props.agentName,props.dotNumber,props.dueDate])


    return (

        <div id="commsOutput">
            <div className="comms-header">
                <h2>Mtxt:</h2>
                <button onClick={selectMtxt} disabled={formFilled}>Select Text</button>
            </div>
            <div className="comms-mobile-content">
                <p ref={mobileContent}>
                    Kia ora {props.customerName}, it's {props.agentName} here from One NZ. We're working on your online order {props.dotNumber} but need a bit more info from you first.
                    It seems that you have given incorrect details. Please respond to the email we have sent from Online Shop with one of the following forms of identification:
                    1. A Valid NZ Passport 2. A Valid New Zealand Drivers License 3. Valid International Passport and Visa. *Copies must be readable and contain all 4 corners of the page*
                    Please respond by {props.dueDate}.
                    Ngā mihi, {props.agentName} from One NZ.
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
                    It seems that you have given incorrect details. Please respond to the email we have sent from Online Shop with one of the following forms of identification:<br />
                    <br />
                    1. A Valid NZ Passport<br />
                    2. A Valid New Zealand Drivers License<br />
                    3. Valid International Passport and Visa.<br />
                    <br />
                    *Copies must be readable and contain all 4 corners of the page*<br />
                    <br />
                    Please provide the required information by {props.dueDate} and once the requested information has been received, we will go ahead and resume your order.<br />
                    <br />
                    Ngā mihi,<br />
                    <br/>
                    <Signature agentName={props.agentName} />
                </p>
            </div>
        </div>
    );

}

export default AlternateIdentificationRequired