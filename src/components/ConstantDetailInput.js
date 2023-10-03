function ConstantDetails ({ setAgentName , setSevenDaysDate }) {

  const agentChange = event => {
    setAgentName(event.target.value);
  };

  const daysChange = event => {
    setSevenDaysDate(event.target.value);
  }

  return (
    <div id="constantDetails">
      <div className="form-detail">
        <label htmlFor="agent_name">Agent First Name</label>
        <input type="text" name="agent_name" onChange={agentChange} ></input>
      </div>
      <div className="form-detail">
        <label htmlFor="date_seven_days">7 Days Date</label>
        <input type="date" name="date_seven_days" onChange={daysChange}></input>
      </div>
    </div>
  )
}

export default ConstantDetails;