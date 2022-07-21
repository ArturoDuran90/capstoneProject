import '..//App.css';

function CarModels() {
    return(
        <select className='box vehicleInput' name="carModels" id="carModels">
            <option value="" disabled selected>Model</option>
            <option value="Model A">Model A</option>
            <option value="Model B">Model B</option>
        </select>
    )
}

export default CarModels;