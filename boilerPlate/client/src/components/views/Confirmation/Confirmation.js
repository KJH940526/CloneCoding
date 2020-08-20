// import React, { useState, useEffect } from "react";
// import axios from 'axios'
// import { withRouter} from 'react-router-dom'

// function Confirmation(props) {

//   useEffect(() => {
//     axios.get('/api/users/getConfirmation')
//     .then(response => console.log("confirmation",response))
//   },[]);



//   return (
//     <div style={{
//       display: 'flex', justifyContent: 'center', alignItems:'center'
//       ,width: '100%', height: '100vh'
//     }}>      
//     <p>confirmation</p>
//     </div>
//   )
// }

// export default withRouter(Confirmation)

import React, { useState, useEffect } from "react";
import axios from 'axios'
import { withRouter} from 'react-router-dom'

function Confirmation(props) {

  useEffect(() => {
    const getConfirmation = ()=>{
      axios.get(`/api/users/getConfirmation`);
    };
    getConfirmation()
  },[]);

  const onLanding = () => {
    props.history.push("/")
}

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems:'center'
      ,width: '100%', height: '100vh'
    }}>      
    <p>confirmation</p><br/>
    <button onClick={onLanding}>홈으로</button>
    </div>
  )
}

export default withRouter(Confirmation)
