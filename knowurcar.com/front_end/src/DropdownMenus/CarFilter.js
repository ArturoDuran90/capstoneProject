import '..//AppController.css';
import React from 'react';
import { useEffect, useState } from 'react';

// Have a state variable for each option
// Year/Make/Model/Trim
// When the Make Changes... Do a fetch to the API. when we get results, generate the optoions for Model
// When the user selected a model... Do another fetch to get the trims

// carYear, carMake, carModel, carTrim
function CarFilter(props) {

    const [year, setYear] = useState();

    const [make, setMake] = useState();
    const [makeSelect, setMakeSelect] = useState('');

    const [model, setModel] = useState();
    const [modelSelect, setModelSelect] = useState('');

    const [trim, setTrim] = useState();
    const [vehTrimSelect, setTrimSelect] = useState('');

    // const [carImages, setCarImages] = useState([]);

    const completeVehicle = `/${year}/${makeSelect}/${modelSelect}/${vehTrimSelect}`;
    const completeVehicle2 = completeVehicle.replace(/ /g, '-');

    // var apiKeyStats = 'gQuXRTw6a2SLMdd8NxYhv9bABrjAGxD7';

    // const completeVehURL = `https://apis.solarialabs.com/shine/v1/vehicle-stats/specs?make=${makeSelect}&model=${modelSelect}&year=${year}&full-data=true&apikey=${apiKeyStats}`;
    // var carImagesURL = `https://api.carsxe.com/images?key=e8kazl88v_mbh876r64_w6ouszltm&year=${year}&make=${makeSelect}&model=${modelSelect}&trim=${vehTrimSelect}&format=json`;

    // var carImagesURL = `https://api.carsxe.com/images?key=e8kazl88v_mbh876r64_w6ouszltm&year=2021&make=kia&model=k5&trim=gt-line&format=json`;

    var makesURL = `https://vehapi.com/api/v1/car-lists/get/car/makes/${year}`;

    var modelsURL = `https://vehapi.com/api/v1/car-lists/get/car/models/${year}/${makeSelect}`;
    
    // var modelsURL = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${make}/modelyear/${year}?format=json`;

    var apiKey = '0NEBVTUCJUVxiMmj8eQjvjFH7VxCuvwp55IgqT3G';

    var trimsURL= `https://vehapi.com/api/v1/car-lists/get/car/trims/${year}/${makeSelect}/${modelSelect}`;

    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("X-Requested-With", "XMLHttpRequest");
        myHeaders.append("Authorization", `Bearer ${apiKey}`)

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        authorization: `Bearer ${apiKey}`,
    };

    // var myHeaders2 = new Headers();
    //     // myHeaders2.append("Content-Type", "application/json");
    //     // myHeaders2.append("X-Requested-With", "XMLHttpRequest");
    //     myHeaders2.append('Access-Control-Allow-Methods', 'GET', 'OPTIONS');
    //     myHeaders2.append("Access-Control-Allow-Origin", "*" )

    // var requestOptions2 = {
    //     mode: 'no-cors',
    //     origin: "http://localhost:3000",
    //     method: 'GET',
    //     headers: myHeaders2,
    // };

    const handleSelectYear=(e)=>{
        setYear(e.target.value);
        console.log("Year: " + (e.target.value));
    }

    const handleSelectMake=(e)=>{
        setMakeSelect(e.target.value);
        console.log("Make: " + (e.target.value));
    }

    const handleSelectModel=(e)=>{
        setModelSelect(e.target.value);
        console.log("Model: " + (e.target.value));
    }

    const handleSelectTrim=(e)=>{
        setTrimSelect(e.target.value);
        console.log("Trim: " + (e.target.value));
    }

    useEffect(() => {
        fetch(makesURL, requestOptions)
        .then(r => r.json(0))
        .then(data => setMake(data))
        .catch(e => console.log(e));
    },[year]);

    useEffect(() => {
        fetch(modelsURL, requestOptions)
        .then(r => r.json(0))
        .then(data => setModel(data))
        .catch(e => console.log(e));
    },[makeSelect]);

    useEffect(()=>{
        fetch(trimsURL, requestOptions)
        .then(r => r.json(0))
        .then(data => setTrim(data))
        .catch(e => console.log(e));
    },[modelSelect]);

    useEffect(()=>{
        // fetch(carImagesURL, requestOptions2)
        // .then(r => r.json(0))
        // .then(data => setCarImages(data))
        // .catch(e => console.log(e))
        console.log("Vehicle Selected: " + completeVehicle2)
        // console.log("Vehicle Selected: " + carImages)
        props.onChange(completeVehicle2)
        // carYear.onChange(year);
        // carMake.onChange(makeSelect);
        // carModel.onChange(modelSelect);
        // carTrim.onChange(vehTrimSelect);
    },[vehTrimSelect]);

    return(
        <>
        {/* Car Years */}
        <select className='box vehicleInput' name="carYears" id="carYears" onChange={handleSelectYear}>
            <option value="Year" disabled selected>Year</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
        </select>

        {/* Car Makes */}
        <select className='box vehicleInput' name="carMakes" id="carMakes" onChange={handleSelectMake}>
            <option value="Make" disabled selected>Make</option>

            {make?.map(makes => (
                <option key={makes.make} value={makes.make}>
                    {makes.make}
                </option>
            ))}
        </select> 

        {/* Car Models */}
        <select className='box vehicleInput' name="carModels" id="carModels" onChange={handleSelectModel}>
            <option value="Model" disabled selected>Model</option>

            {model?.map(models => (
                <option key={models.model} value={models.model}>
                    {models.model}
                </option>
            ))}
        </select>
        
        {/* Car Trims */}
        <select className='box vehicleInput' name="carTrims" id="carTrims" onChange={handleSelectTrim}>
            <option value="Trim" disabled selected>Trim</option>
            {trim?.map(trims => (
                <option key={trims.trim} value={trims.trim}>
                    {trims.trim}
                </option>
            ))}
        </select>

        {/* <div>
            {
            carImages.images?.map((car, index) => (
                <div className='box' id='car1'> 
                    { car.thumbnailLink != 'N/A'?       
                        <div>
                            <a>
                                <img className="imgCar" src={car.thumbnailLink} alt='Vehicle Poster'/>
                            </a>
                        </div> : ''
                    }
                </div>
            ))
            }
        </div> */}
        </>
    )    
}

export default CarFilter;