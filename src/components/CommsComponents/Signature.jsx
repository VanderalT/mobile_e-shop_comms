import oneNZLogo from '../../oneNZLogo.png'

function Signature (props) {

    return(
        <div id='signature'>
            <br />
            <table class="MsoNormalTable" style={{width: '460.7pt', borderCollapse: 'collapse'}} border="0" cellspacing="0" cellpadding="0">
                <tbody>
                    <tr style={{height: '95.55pt',}}>

                        <td style={{width: '78.0pt', padding: '0cm 5.4pt 0cm 5.4pt',}} valign="top">
                            <p style={{lineHeight: '105%', margin: '0cm', fontSize: '11pt', fontFamily: 'Calibri, sans-serif',}}>
                                <a href="https://one.nz">
                                    <span style={{color: 'windowtext',}}>
                                        <img src={oneNZLogo} alt='One NZ Logo' width="74" height="90" border="0"></img>
                                    </span>
                                </a>
                            </p>
                        </td>

                        <td style={{width: '382.7pt', padding: '0cm 5.4pt 0cm 5.4pt',}} valign="top">
                            <p style={{lineHeight: '105%, margin: 0cm', fontSize: '11pt', fontFamily: 'Calibri, sans-serif',}}>
                                <strong>
                                    <span style={{fontSize: '16.0pt', lineHeight: '105%', fontFamily: 'Arial, sans-serif', color: '#00a45f',}}>
                                        {props.agentName}
                                    </span>
                                </strong>
                            </p>
                            <p style={{margin: '0cm', fontSize: '11pt', fontFamily: 'Calibri, sans-serif',}}>
                                <span style={{fontSize: '14.0pt', color: '#333333',}}>
                                    Online Shop
                                </span>
                            </p>
                        </td>
                        
                    </tr>

                    <tr style={{height: '43.1pt',}}>

                        <td style={{width: '460.7pt', padding: '0cm 5.4pt 0cm 5.4pt',}} colspan="2" valign="top">
                            <p style={{lineHeight: '105%', margin: '0cm', fontSize: '11pt', fontFamily: 'Calibri, sans-serif',}}>
                                <span style={{fontSize: '8.0pt', lineHeight: '105%', fontFamily: 'Arial, sans-serif', color: '#323232',}}>
                                    <a href={"https://one.nz/legal/policy/privacy"}>Privacy Policy</a><br/>
                                    One New Zealand Group Limited,<br/>
                                    Smales Farm, Cnr Northcote &amp; Taharoto Roads,<br />
                                    Private Bag 92143, Auckland 1142, New Zealand
                                </span>
                            </p>
                        </td>

                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Signature
