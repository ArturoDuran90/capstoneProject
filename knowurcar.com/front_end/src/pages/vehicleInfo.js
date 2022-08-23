import React from 'react';
import LightsTable from '../LightsTable/LightsTable';
import ImageSlider from '../Slideshow/ImageSlider';
import VehicleInfoEx from '../VehiclesFav/VehicleInfoEx';
import { SliderData } from '../Slideshow/SliderData';
import '../AppController.css';
import '../Slideshow/slideshowCSS.css';

const vehicleInfo = () => {
	
return (
	<>
	<div className='box'>
	<hr/>
		<h1>Name of Vehicle</h1>
		<div id='insideContainer2'>

      <div id='vehicleFavContainer2' className='box'>
				<div id='vehicleSelectInfo' className='box'>
				<div className='box'>
					<ImageSlider slides={SliderData} />
				</div>
				<hr/>
				<div className='box'>
					<p><label>Need more help?</label>Auto Shops around you</p>
				</div>
				<span className='box'>
					<img id="googleIMG" src="http://localhost:4001/images/googleMapImg.png" alt="Google Maps Img Example"/>
				</span>
    		</div>

				<div id='vehicleSelectInfo2'className='box'>
        	<VehicleInfoEx/>
					<img src="http://localhost:4001/PdfImg.png" alt='PdfLogo'/>
				</div>
			</div>
			<div id="lightLink"></div>
		</div>	
	</div>
	<br/>
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

export default vehicleInfo;
