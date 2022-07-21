import '..//App.css';

function CarTrims() {
    return(
        <select className='box vehicleInput' name="carTrims" id="carTrims">
            <option value="" disabled selected>Trim</option>
            <option value="Trim 1">Trim 1</option>
            <option value="Trim 2">Trim 2</option>
        </select>
    )
}

export default CarTrims;