import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement => object in js => on rendering in dom converts into HTML ;

const heading = React.createElement("h1", {id:"heading"}, "hello world");
console.log(heading);

// creating same element using jsx ;

const element = <h1 id='heading'>hello ji</h1> ;  // is it valid javascript ? js engine does not understand this code
console.log(element);                            //  it is transpiled before it goes to js engine using "parcel -"babel"

const root = ReactDOM.createRoot(document.getElementById("root") ) ;
root.render(element);