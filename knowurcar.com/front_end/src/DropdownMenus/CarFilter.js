import '..//AppController.css';
import React from 'react';
import { useEffect, useState } from 'react';

// Have a state variable for each option


// const [completeVehicle, setCompleteVehicle] = useState('');
// Year/Make/Model/Trim



// useEffect(() => {
//   getData();
// }, []);

// const getData = () => {
//   //var url = `https://randomuser.me/api/?results=500`;
//   var url = `http://localhost:4000/getRandom/500`
//   fetch(url)
//     .then(r => r.json(0))
//     .then(data => {
//       setPeople(data.results);
//       setFilteredPeople(data.results);
//     }).catch(e => console.log(e));
// }

// When the Make Changes... Do a fetch to the API. when we get results, generate the optoions for Model
// When the user selected a model... Do another fetch to get the trims



function CarFilter() {

    const [year, setYear] = useState();

    const [make, setMake] = useState();

    const [model, setModel] = useState();
    const [modelSelect, setModelSelect] = useState();

    const [vehTrim, setTrim] = useState();
    const [vehTrimSelect, setTrimSelect] = useState();

    const completeVehicle = year + make + modelSelect + vehTrimSelect;

    var modelsURL = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${make}/modelyear/${year}?format=json`;

    var apiKey = '0NEBVTUCJUVxiMmj8eQjvjFH7VxCuvwp55IgqT3G';

    var trimsURL= `https://vehapi.com/api/v1/car-lists/get/car/trims/${year}/${make}/${modelSelect}`;

    const handleSelectYear=(e)=>{
        setYear(e.target.value);
        console.log("Year: " + (e.target.value));
    }

    const handleSelectMake=(e)=>{
        setMake(e.target.value);
        console.log("Make: " + (e.target.value));
    }

    const handleSelectModel=(e)=>{
        setModelSelect(e.target.value);
        console.log("Model: " + (e.target.value));
    }

    const handleSelectTrim=(e)=>{
        setTrimSelect(e.target.value);
        console.log("Trim: " + (e.target.value));
        console.log(completeVehicle);
    }

    useEffect(() => {
        fetch(modelsURL)
            .then(r => r.json(0))
            .then(data => {
                setModel(data.Results);
            }).catch(e => console.log(e));
    
    },[make]);

    // useEffect(() => {
    //     fetch(trimsURL, requestOptions)
    //         .then(r => r.json(0))
    //         .then(data => {
    //             setTrim(data.Results);
    //         }).catch(e => console.log(e));
    
    // },[model]);

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

    useEffect(()=>{
        fetch(trimsURL, requestOptions)
            .then(r => r.json(0))
            .then(data => setTrim(data))
            .catch(e => console.log(e));
    },[modelSelect]);


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
            <option value="Abarth">Abarth</option>
            <option value="Acura">Acura</option>
            <option value="Alfa Romeo">Alfa Romeo</option>
            <option value="Aston Martin">Aston Martin</option>
            <option value="Audi">Audi</option>
            <option value="Bentley">Bentley</option>
            <option value="BMW">BMW</option>
            <option value="Buick">Buick</option>
            <option value="Cadillac">Cadillac</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Chrysler">Chrysler</option>
            <option value="Citroen">Citroen</option>
            <option value="Dacia">Dacia</option>
            <option value="Dodge">Dodge</option>
            <option value="Ferrari">Ferrari</option>
            <option value="Fiat">Fiat</option>
            <option value="Ford">Ford</option>
            <option value="GMC">GMC</option>
            <option value="Honda">Honda</option>
            <option value="Hummer">Hummer</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Infiniti">Infiniti</option>
            <option value="Isuzu">Isuzu</option>
            <option value="Jaguar">Jaguar</option>
            <option value="Jeep">Jeep</option>
            <option value="Kia">Kia</option>
            <option value="Lamborghini">Lamborghini</option>
            <option value="Lancia">Lancia</option>
            <option value="Land Rover">Land Rover</option>
            <option value="Lexus">Lexus</option>
            <option value="Lincoln">Lincoln</option>
            <option value="Lotus">Lotus</option>
            <option value="Maserati">Maserati</option>
            <option value="Mazda">Mazda</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Mercury">Mercury</option>
            <option value="Mini">Mini</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Nissan">Nissan</option>
            <option value="Opel">Opel</option>
            <option value="Peugeot">Peugeot</option>
            <option value="Pontiac">Pontiac</option>
            <option value="Porsche">Porsche</option>
            <option value="Ram">Ram</option>
            <option value="Renault">Renault</option>
            <option value="Saab">Saab</option>
            <option value="Saturn">Saturn</option>
            <option value="Scion">Scion</option>
            <option value="Seat">Seat</option>
            <option value="Skoda">Skoda</option>
            <option value="Smart">Smart</option>
            <option value="SsangYong">SsangYong</option>
            <option value="Subaru">Subaru</option>
            <option value="Suzuki">Suzuki</option>
            <option value="Toyota">Toyota</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Volvo">Volvo</option>
            <option value="Wiesmann">Wiesmann</option>
        </select> 

        {/* Car Models */}
        <select className='box vehicleInput' name="carModels" id="carModels" onChange={handleSelectModel}>
            <option value="Model" disabled selected>Model</option>

            {model?.map(models => (
                <option key={models.Model_ID} value={models.Model_Name}>
                    {models.Model_Name}
                </option>
            ))}
        </select>
        
        {/* Car Trims */}
        <select className='box vehicleInput' name="carTrims" id="carTrims" onChange={handleSelectTrim}>
            <option value="" disabled selected>Trim</option>
            {vehTrim?.map(trims => (
                <option key={trims.trim} value={trims.trim}>
                    {trims.trim}
                </option>
            ))}
        </select>
        </>
    )    
        // }
}

export default CarFilter;