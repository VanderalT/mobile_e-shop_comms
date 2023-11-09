import { useEffect, useRef, useState } from "react";
import Signature from "./Signature";

function PendingBillArrears(props) {

    const mobileContent = useRef(null)
    const emailContent = useRef(null)

    const [billingAccount, setbillingAccount] = useState('');
    const [pendingAmmount, setPendingAmmount] = useState('');
    const [customerRow, setRow] = useState('');

    const billingAccountChange = event => {
        setbillingAccount(event.target.value);
    }

    const pendingAmmountChange = event => {
        setPendingAmmount(event.target.value);
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
        if (props.customerName === '' || props.agentName === '' || props.dotNumber === '' || props.dueDate === '' || billingAccount === '' || pendingAmmount === '') {
            setFormFilled(true);
        }
        else {
            setFormFilled(false);
        }
    }, [props.customerName, props.agentName, props.dotNumber, props.dueDate, billingAccount, pendingAmmount])

    return (
        <div id="commsOutput">
            <div className="comms-extra-details">
                <label htmlFor="billingAccount">Billing Account</label>
                <input type="number" name="billingAccount" onChange={billingAccountChange}></input>
                <label htmlFor="pendingAmmount">Pending amount</label>
                <input type="number" name="pendingAmmount" onChange={pendingAmmountChange}></input>
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
                    your account {billingAccount} is overdue by ${pendingAmmount}.
                    You can pay at One.nz/pay, a One NZ store, the My One NZ app, or by calling 777 from your mobile.
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
                    We have your mobile order {props.dotNumber} but can't progress it yet because your account {billingAccount} is written off by ${pendingAmmount}.<br />
                    <br />
                    You can pay at One.nz/pay, a One NZ store, the My One NZ app, or by calling 777 from your mobile. <br />
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

export default PendingBillArrears