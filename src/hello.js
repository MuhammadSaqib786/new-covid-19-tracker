import React from 'react';
import './Hello.css'
function Hello({firstName}) {
return <p className="myname"> This is in another component hello from {firstName}</p>
}

export default Hello;
