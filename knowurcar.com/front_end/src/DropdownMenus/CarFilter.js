import '..//AppController.css';
import { useEffect, useState } from 'react';

// Have a state variable for each option
const [year, setYear] = useState('');
const [make, setMake] = useState('');
const [model, setModel] = useState('');
const [trim, setTrim] = useState('');

const [completeVehicle, setCompleteVehicle] = useState('');
// Year/Make/Model/Trim

useEffect(() => {
  console.log(`Year: ${yearInput} Make: ${makeInput} Model: ${modelInput} Trim: ${trimInput}`)

  var vehicleYear = people.filter((person) => {
    return person.firstName.toLowerCase().includes(yearInput.toLowerCase()) || 
      person.lastName.toLowerCase().includes(yearInput.toLowerCase())}
  );

  var vehicleMake = vehicleYear.filter((person) => {
    return person.username.toLowerCase().includes(makeInput.toLowerCase())}
  );

  var vehicleModel = vehicleMake.filter((person) => {
    return person.gender.toLowerCase().includes(modelInput.toLowerCase())}
  );

  var vehicleTrim = vehicleModel.filter((person) => {
    return person.age.toString().includes(trimInput.toLowerCase())}
  );
  
  setCompleteVehicle(vehicleTrim);

}, [yearInput, makeInput, modelInput, trimInput]);

// When the Make Changes... Do a fetch to the API. when we get results, generate the optoions for Model
// When the user selected a model... Do another fetch to get the trims

function CarFilter() {

    return(
        <>
        {/* Car Years */}
        <select className='box vehicleInput' name="carMakes" id="carMakes" onChange={setYear(value)}>
            {/* <option value="" disabled selected>Year</option> */}
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
            <option value="2022">2022</option>
        </select>

        {/* Car Makes */}
        <select className='box vehicleInput' name="carMakes" id="carMakes" onChange={setMake(value)}>
            {/* <option disabled selected>Make</option> */}
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
        <select className='box vehicleInput' name="carModels" id="carModels" onChange={setModel(value)}>
            {/* <option value="" disabled selected>Model</option> */}
            <option value="Model A">Model A</option>
            <option value="Model B">Model B</option>
        </select>
        
        {/* Car Trims */}
        <select className='box vehicleInput' name="carTrims" id="carTrims" onChange={setTrim(value)}>
            {/* <option value="" disabled selected>Trim</option> */}
            <option value="Trim 1">Trim 1</option>
            <option value="Trim 2">Trim 2</option>
        </select>
        </>
    )    
}

export default CarFilter;