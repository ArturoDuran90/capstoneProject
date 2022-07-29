import React from 'react';
import LightsTable from '../LightsTable/LightsTable';

const Contact = () => {
return (
	<>
	<div>
		<h1>Vehicle Info goes here</h1>
	</div>
	<hr/>
  <br/>
  <div id='lightsDiv' className='box'>
  	<div id='innerMenu1' className='box'>KnowUrLights</div>
  	</div>
    <LightsTable /> 
    <footer>
      Website by Arturo Duran &copy;
    </footer>
    <br/>
	</>
);
};

export default Contact;
