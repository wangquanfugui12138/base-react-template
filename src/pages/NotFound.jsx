import React from 'react'

class NotFound extends React.Component {
    render() {
        return(
            <div style={{position: 'absolute',width: '100%',height: '100%',top: 0,background:'#fff'}}>
                <div style={{color:'#000',fontSize:'32px',fontWeight:600,marginTop:100,textAlign:'center'}}>404 Not Found</div>
            </div>
        )
    }

}
export default NotFound