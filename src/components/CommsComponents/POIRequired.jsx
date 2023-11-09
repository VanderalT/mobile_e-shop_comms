import { useEffect, useRef, useState } from "react";
import Signature from "./Signature";

function POIBSRequired(props) {

    const mobileContent = useRef(null)
    const emailContent = useRef(null)

    const [firstMonth, setFirstMonth] = useState('');
    const [secondMonth, setSecondMonth] = useState('');

    const firstMonthChange = event => {
        setFirstMonth(event.target.value);
    }

    const secondMonthChange = event => {
        setSecondMonth(event.target.value);
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
        if(props.customerName === ''||props.agentName === ''||props.dotNumber === ''||props.dueDate === ''||firstMonth === ''||secondMonth === ''){
            setFormFilled(true);
        }
        else{
            setFormFilled(false);
        }
    }, [props.customerName,props.agentName,props.dotNumber,props.dueDate,firstMonth,secondMonth])

    return (
        <div id="commsOutput">
            <div className="comms-extra-details">
                <label htmlFor="secondMonth">Two Months Ago</label>
                <input name="secondMonth" onChange={secondMonthChange}></input>
                <label htmlFor="firstMonth">One Month Ago</label>
                <input name="firstMonth" onChange={firstMonthChange}></input>
            </div>
            <div className="comms-header">
                <h2>Mtxt:</h2>
                <button onClick={selectMtxt} disabled={formFilled}>Select Text</button>
            </div>
            <div className="comms-mobile-content">
                <p ref={mobileContent}>
                    Kia ora {props.customerName}, we are trying to process your mobile order however we need more information to be able to continue.
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
                    Please email one of the following documents in a response to this email and to credit.review@one.nz with your order number to proceed<br />
                    <br />
                    We need to see last two months {secondMonth} and {firstMonth} 2023 &#40;with any additional document for the current month, if any&#41;:<br />
                    <br />
                    1. Proof of income &#40; e.g Payslip &#41;<br />
                    2. Bank statement<br />
                    <br />
                    *Copies must be readable and contain all 4 corners of the page*<br />
                    <br />
                    Please provide the required information by {props.dueDate} and we will go ahead and resume your order<br />
                    <br />
                    Ngā mihi,<br />
                    <br />
                    <Signature agentName={props.agentName} />
                </p>
            </div>
        </div>
    );

}

export default POIBSRequired