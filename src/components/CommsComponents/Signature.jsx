import oneNZLogo from '../../oneNZLogo.png'

function Signature (props) {

    return(
        <div id='signature'>
            <table id='signatureTable'>
                <tr id='signatureTop'>
                <td id='signatureLogo' className='signatures-top'>
                    <img id='SignatureOneNZLogo' src={oneNZLogo} alt="One New Zealand Logo" width="100" height="120" />
                </td>
                <td id='signatureDetails' className='signatures-top'>
                    <div>
                        <h3>{props.agentName}</h3>
                        <h3 id='SignatureDepartment'>Online Shop</h3>
                        <p>onlineshop@one.nz</p>
                    </div>
                </td>
                </tr>
                <tr id='signatureBottom'>
                    <td colSpan={2}>
                        <p id='signatureAddress'>
                            One New Zealand Group Limited, <br/>
                            Smales Farm, Cnr Northcote & Taharoto Roads, <br/>
                            Private Bag 92143, Auckland 1142, New Zealand <br/>
                        </p>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Signature