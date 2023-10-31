import { useEffect, useRef, useState } from "react";
import Signature from "./Signature";

function IFPCreditCheckPlanOnly (props) {

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
                Kia Ora {props.customerName}, your order {props.dotNumber} for an Interest Free device has been cancelled as you have not met the credit check criteria. 
                The good news, however, is that you can still sign up to a mobile plan with us, and/or buy a device outright at one.nz/pay-monthly/or by calling 0800 533 001. 
                To discuss your credit status, please get in touch with the Credit Bureau (Illion) on 0800 362 222. 
                Thanks, {props.customerName} from One NZ.
                </p>
            </div>
            <div className="comms-header">
                <h2>Email:</h2>
                <button onClick={selectEmail} disabled={formFilled}>Select Email</button>
            </div>
            <div className="comms-email-content">
                <p ref={emailContent}>
                    Kia Ora {props.customerName},<br /> 
                    <br />
                    Your order, {props.dotNumber}, for an Interest Free device has been cancelled as you have not met the credit check criteria. <br /> 
                    <br />
                    The good news, however, is that you can still sign up to a mobile plan with us, and/or buy a device outright at one.nz/pay-monthly/or by calling 0800 533 001. <br />
                    <br />
                    To discuss your credit status, please get in touch with the Credit Bureau (Illion) on 0800 362 222. <br />
                    <br />
                    Thanks, {props.customerName} from One NZ. <br />
                    <Signature agentName={props.agentName} />
                </p>
            </div>
        </div>
    );

}

export default IFPCreditCheckPlanOnly