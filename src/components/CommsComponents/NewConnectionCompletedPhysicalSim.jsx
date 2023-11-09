import { useEffect, useRef, useState } from "react";
import Signature from "./Signature";

function NewConnectionCompletedESim (props) {

    const mobileContent = useRef(null);
    const emailContent = useRef(null);

    const [plan, setPlan] = useState('');
    const [number, setNumber] = useState('');
    const [simNumber, setSimNumber] = useState('');


    const newNumberChange = event => {
        setNumber(event.target.value);
    }

    const planChange = event => {
        setPlan(event.target.value);
    }

    const simNumberChange = event => {
        setSimNumber(event.target.value);
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
        if(props.customerName === ''||props.agentName === ''||props.dotNumber === ''||props.dueDate === ''||plan === ''||number === ''||simNumber === ''){
            setFormFilled(true);
        }
        else{
            setFormFilled(false);
        }
    }, [props.customerName,props.agentName,props.dotNumber,props.dueDate,plan,number,simNumber])

    return(
        <div id="commsOutput">
            <div className="comms-extra-details">
                <label htmlFor="planName">Plan</label>
                <input name="planName" onChange={planChange}></input>
                <label htmlFor="newNumber">New Number</label>
                <input name="newNumber" onChange={newNumberChange}></input>
                <label htmlFor="simNumber">Sim Number</label>
                <input name="simNumber" onChange={simNumberChange}></input>
            </div>
            <div className="comms-header">
                <h2>Mtxt:</h2>
                <button onClick={selectMtxt} id="selectMtxtButton" disabled={formFilled}>Select Text</button>
            </div>
            <div className="comms-mobile-content">
                <p ref={mobileContent}>
                Kia ora {props.customerName}, your new One NZ {plan} is all set up and ready to use. Your new number is {number} - Sim number {simNumber}. 
                Download the My One NZ app now - your one stop shop for managing your plan and paying your bill. 
                Check it out at one.nz/using-self-service/ . Ngā mihi, {props.agentName} from One NZ.
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
                    Your new One NZ {plan} is all set up and ready to use {number} - {simNumber}. <br />
                    <br />
                    Download the My One NZ app now - your one stop shop for managing your plan and paying your bill. <br />
                    <br />
                    Check it out at one.nz/using-self-service/ <br />
                    <br />
                    Ngā mihi, <br />
                    <Signature agentName={props.agentName} />
                </p>
            </div>
        </div>
    );

}

export default NewConnectionCompletedESim