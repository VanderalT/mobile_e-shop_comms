import ConstantDetails from "./components/ConstantDetailInput";
import CommsTypeInput from "./components/CommsTypeInput";
import { useState } from "react";
import CustomerDetails from "./components/CustomerDetailInput";
import CommsOutput from "./components/CommsOutput";
import './styles/styles.css';


function App() {

  const [agentName, setAgentName] = useState( '' );
  const [sevenDaysDate, setDate] = useState( '' );
  const [commsType, setCommsType] = useState( '' );
  const [customerName, setCustomerName] = useState( '' );
  const [customerDot, setCustomerDot] = useState( '' );

  function clearComms () {
    setCommsType('Empty');
  }


  return (
    <body>
      <div className="app">
        <header id="websiteHeader">
          <h1 id="websiteTitle">Online Shop Comms Tool</h1>
        </header>
        <div id="inputDetails">
          <ConstantDetails setAgentName={setAgentName} setSevenDaysDate={setDate} />
          <CustomerDetails setCustomerName={setCustomerName} setCustomerDot={setCustomerDot} clearComms={clearComms} />
        </div>
        <CommsTypeInput setCommsType={setCommsType} optionsState={commsType} />
        <CommsOutput commsType={commsType} agentName={agentName} dueDate={sevenDaysDate} customerName={customerName} dotNumber={customerDot}/>
      </div>
    </body>
  )
}

export default App;
