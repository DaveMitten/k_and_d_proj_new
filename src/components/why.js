import React, { Component } from 'react';

// import styled from 'styled-components'



class Why extends Component {
  render() {
    return (
      <div
        style={{
          margin: `10px 0px`,
          borderTop: `5px solid #000000`
        }}
      >
        <div
          style={{
            border: `5px dashed #000000`,
            margin: `50px`,
            padding: `30px`
          }}
        >
          <div
            style={{
              fontFamily: `Myriad Pro`,
              fontWeight: `900`,
              fontSize: `28px`,
              textAlign: `center`,
              marginBottom: `20px`
            }}
          >
            Title
          </div>
          <div
            style={{
              fontSize: `20px`,
              margin: `20px 40px`
            }}
          >
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself,
          </div>
          <div
            style={{
              fontSize: `20px`,
              margin: `20px 40px`
            }}
          >
            because it is pain, but because occasionally circumstances occur in
            which toil and pain can procure him some great pleasure. To take a
            trivial example, which of us ever undertakes laborious physical
            exercise, except to obtain some advantage from it? But who has any
            right to find fault with a man who chooses to enjoy a pleasure that
            has no annoying consequences, or one who avoids a pain that produces
            no resultant pleasure?"
          </div>
        </div>
      </div>
    );
  }
}


export default Why
