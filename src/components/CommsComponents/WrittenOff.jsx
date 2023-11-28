import { useEffect, useRef, useState } from "react";
import Signature from "./Signature";

function WrittenOff(props) {

    const mobileContent = useRef(null)
    const emailContent = useRef(null)

    const [billingAccount, setbillingAccount] = useState('');
    const [writtenOffAmmount, setWrittenOffAmmount] = useState('');
    const [debtAgency, setDebtAgency] = useState('');
    const [agencyContact, setAgencyContact] = useState('');
    const [customerRow, setRow] = useState('');

    const billingAccountChange = event => {
        setbillingAccount(event.target.value);
    }

    const writtenOffAmmountChange = event => {
        setWrittenOffAmmount(event.target.value);
    }

    const debtAgencyChange = event => {
        setDebtAgency(event.target.value)
    }

    const agencyContactChange = event => {
        setAgencyContact(event.target.value)
    }

    const customerRowChange = event => {
        setRow(event.target.value)
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
        if (props.customerName === '' || props.agentName === '' || props.dotNumber === '' || props.dueDate === '' || billingAccount === '' || writtenOffAmmount === '' || debtAgency === '' || agencyContact === '' || customerRow === '') {
            setFormFilled(true);
        }
        else {
            setFormFilled(false);
        }
    }, [props.customerName, props.agentName, props.dotNumber, props.dueDate, billingAccount, writtenOffAmmount, debtAgency, agencyContact, customerRow])

    return (
        <div id="commsOutput">
            <div className="comms-extra-details">
                <label htmlFor="billingAccount">Billing Account</label>
                <input type="number" name="billingAccount" onChange={billingAccountChange}></input>
                <label htmlFor="writtenOff">Written Off amount</label>
                <input type="number" name="writtenOff" onChange={writtenOffAmmountChange}></input>
                <label htmlFor="debtAgency" >Debt Agency</label>
                <input name="debtAgency" onChange={debtAgencyChange}></input>
                <label htmlFor="debtAgencyContact">Agency Contact Number</label>
                <input name="debtAgencyContact" onChange={agencyContactChange}></input>
                <label htmlFor="customer_row_id">Row-ID</label>
                <input type="text" value={customerRow} onChange={customerRowChange}></input>
            </div>
            <div className="comms-header">
                <h2>Mtxt:</h2>
                <button onClick={selectMtxt} disabled={formFilled}>Select Text</button>
            </div>
            <div className="comms-mobile-content">
                <p ref={mobileContent}>
                    Kia ora {props.customerName}, it's {props.agentName} here from One NZ. We have your mobile order {props.dotNumber} but can't progress it yet because
                    your account {billingAccount} is written off by ${writtenOffAmmount}.
                    You can pay by contacting the debt agency {debtAgency} on {agencyContact}.
                    Once you've paid, please email credit.review@one.nz with your proof of payment attached and put the reference number Row-ID {customerRow} in the email subject
                    so we can move forward with your order.
                    Ngā mihi {props.agentName} from One NZ.
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
                    It's {props.agentName} here from One NZ.<br />
                    <br />
                    We have your mobile order {props.dotNumber} but can't progress it yet because your account {billingAccount} is written off by ${writtenOffAmmount}.<br />
                    <br />
                    You can pay by contacting the debt agency {debtAgency} on {agencyContact}.<br />
                    <br />
                    Once you've paid, please email credit.review@one.nz with your proof of payment attached and put the reference number Row-ID {customerRow} in the email subject
                    so we can move forward with your order.<br />
                    <br />
                    Ngā mihi,<br />
                    <br />
                    <Signature agentName={props.agentName} />
                </p>
            </div>
        </div>
    )
}

export default WrittenOff