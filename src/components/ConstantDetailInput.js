function ConstantDetails ({ setAgentName , setSevenDaysDate }) {

  const agentChange = event => {
    setAgentName(event.target.value);
  };

  const daysChange = () => {
    var date = document.querySelector('#sevenDaysDate');
    var dateValue = date.value;
    var dateYear = dateValue.substring(0,4);
    var dateMonth = dateValue.substring(5,7);
    var dateDay = dateValue.substring(8,10);
    var dateReFormatted = dateDay + "/" + dateMonth + "/" + dateYear;
    console.log(dateReFormatted);
    setSevenDaysDate(dateReFormatted);
  }

  return (
    <div id="constantDetails">
      <div className="form-detail">
        <label htmlFor="agent_name">Agent First Name</label>
        <input type="text" name="agent_name" onChange={agentChange} ></input>
      </div>
      <div className="form-detail">
        <label htmlFor="date_seven_days">7 Days Date</label>
        <input type="date" name="date_seven_days" id="sevenDaysDate" onChange={daysChange}></input>
      </div>
    </div>
  )
}

export default ConstantDetails;