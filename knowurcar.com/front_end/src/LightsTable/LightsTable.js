import './lightsCSS.css';

function LightsTable() {
    return(
        <div className="table-container" role="table" aria-label="Destinations">
            <div className="flex-table row " role="rowgroup">
                <div className="flex-row first vertLn horzLn"  role="cell">
                    <img className="imgLight" src="http://localhost:4001/LightsImg/ABS-light.png" alt="lightImg"/>
                </div>
                <div className="flex-row second horzLn" role="cell"><label>Anti-lock Braking System (ABS) Warning Light</label><br/>
                When you brake hard, like on slick roads, the ABS pulses the brakes to prevent your wheels from locking up. 
                If the ABS warning light is illuminated, it means that something is wrong with the system.</div>
                <div className="flex-row first2 vertLn2 horzLn"  role="cell">
                    <img className="imgLight" src="http://localhost:4001/LightsImg/airbag-indicator.png" alt="lightImg"/>
                </div>
                <div className="flex-row second horzLn" role="cell"><label>Airbag Indicator Light</label><br/>
                The airbag warning light signals that something is wrong with one of your airbags or the entire 
                airbag system.</div>
            </div>
            <div className="flex-table row" role="rowgroup">
                <div className="flex-row first vertLn horzLn"  role="cell">
                    <img className="imgLight" src="http://localhost:4001/LightsImg/battery-alert.png" alt="lightImg"/>
                </div>
                <div className="flex-row second horzLn" role="cell"><label>Battery Alert Light</label><br/>
                This light signifies a problem with the vehicle’s charging system. Possible culprits include a 
                loose or damaged battery cable, a bad alternator, or another electrical fault. You may notice your 
                clock light fading or your headlights dimming. Or, in some cases, your car may not start at all.</div>
                <div className="flex-row first2 vertLn2 horzLn"  role="cell">
                    <img className="imgLight" src="http://localhost:4001/LightsImg/brake-warning.png" alt="lightImg"/>
                </div>
                <div className="flex-row second horzLn" role="cell"><label>Brake Warning Light</label><br/>
                If you see this symbol on your dashboard or the word “BRAKE” in red, then either the parking 
                brake is engaged or there’s a problem with your braking system.</div>
            </div>
            <div className="flex-table row" role="rowgroup">
                <div className="flex-row first vertLn horzLn"  role="cell">
                    <img className="imgLight" src="http://localhost:4001/LightsImg/check-engine.png" alt="lightImg"/>
                </div>
                <div className="flex-row second horzLn" role="cell"><label>Engine Warning Light (Check Engine Light)</label><br/>
                Your check engine light may appear for a variety of reasons. 
                Sometimes it is triggered by an open, loose or cracked gas cap, which causes fuel to evaporate. 
                But sometimes it indicates a serious issue, like low oil pressure or overheating! 
                (NOTE: Some car dashboards will display the words “CHECK ENGINE” instead of this symbol.)</div>
                <div className="flex-row first2 vertLn2 horzLn"  role="cell">
                    <img className="imgLight" src="http://localhost:4001/LightsImg/engine-temperature.png" alt="lightImg"/>
                </div>
                <div className="flex-row second horzLn" role="cell"><label>Engine Temperature Warning Light</label><br/>
                If you see this symbol pop up, it means that your engine 
                is overheating. This most likely has to do with your coolant (also called antifreeze), but it can happen 
                for a variety of reasons.</div>
            </div>
            <div className="flex-table row" role="rowgroup">
                <div className="flex-row first vertLn horzLn"  role="cell">
                    <img className="imgLight" src="http://localhost:4001/LightsImg/fog-lamp.png" alt="lightImg"/>
                </div>
                <div className="flex-row second horzLn" role="cell"><label>Fog Lamp Indicator Light</label><br/>
                This symbol shows that your fog lights are on.</div>
                
                <div className="flex-row first2 vertLn2 horzLn"  role="cell">
                    <img className="imgLight" src="http://localhost:4001/LightsImg/lane-departure.png" alt="lightImg"/>
                </div>
                <div className="flex-row second horzLn" role="cell"><label>Lane Departure Warning Light</label><br/>
                Most cars produced today come with a lane departure 
                warning safety feature. It activates this light on your dashboard and makes a beeping noise when it detects 
                that your vehicle is drifting out of your lane.</div>
            </div>
            <div className="flex-table row" role="rowgroup">
                <div className="flex-row first vertLn horzLn"  role="cell">
                    <img className="imgLight" src="http://localhost:4001/LightsImg/low-fuel.png" alt="lightImg"/>
                </div>
                <div className="flex-row second horzLn" role="cell"><label>Low Fuel Indicator Light</label><br/>
                You’re likely familiar with this dashboard light 
                (maybe a little too familiar!). It simply means your vehicle is running low on fuel.</div>
                <div className="flex-row first2 vertLn2 horzLn"  role="cell">
                    <img className="imgLight" src="http://localhost:4001/LightsImg/oil-pressure.png" alt="lightImg"/>
                </div>
                <div className="flex-row second horzLn" role="cell"><label>Oil Pressure Warning Light</label><br/>
                This old-fashioned oil can symbol indicates that 
                there is an issue with your car’s oil pressure system. Either you’re running low on oil or your oil pump 
                isn’t circulating enough fluid to properly lubricate the surfaces inside your engine. 
                (NOTE: Some car dashboards will display the word “OIL” instead of this symbol.)</div>
            </div>
            <div className="flex-table row" role="rowgroup">
                <div className="flex-row first vertLn horzLn"  role="cell">
                    <img className="imgLight" src="http://localhost:4001/LightsImg/seat-belt.png" alt="lightImg"/>
                </div>
                <div className="flex-row second horzLn" role="cell"><label>Seat Belt Reminder Light</label><br/>
                This car light simply reminds you or your passenger 
                to fasten your seatbelts. It is usually accompanied by a repetitive dinging noise.</div>
                <div className="flex-row first2 vertLn2 horzLn"  role="cell">
                    <img className="imgLight" src="http://localhost:4001/LightsImg/security-indicator.png" alt="lightImg"/>
                </div>
                <div className="flex-row second horzLn" role="cell"><label>Security Indicator Light</label><br/>
                If your vehicle has an anti-theft system, then this 
                symbol will blink steadily when the security system is armed. If it is solid and the car will not start, 
                then the immobilization system has activated due to a security threat or malfunction. If it is solid and 
                the car is running normally, then the security system is malfunctioning and needs to be fixed.</div>
            </div>
            <div className="flex-table row" role="rowgroup">
                <div className="flex-row first vertLn horzLn"  role="cell">
                    <img className="imgLight" src="http://localhost:4001/LightsImg/shift-lock.png" alt="lightImg"/>
                </div>
                <div className="flex-row second horzLn" role="cell"><label>Automatic Shift Lock or Engine Start Indicator Light</label><br/>
                If you see this dashboard symbol, you’re most likely 
                trying to shift gears or start your ignition without engaging the brake. The automatic shift lock will lock 
                your vehicle in park or neutral until you engage the brake.</div>
                <div className="flex-row first2 vertLn2 horzLn"  role="cell">
                    <img className="imgLight" src="http://localhost:4001/LightsImg/tire-pressure.png" alt="lightImg"/>
                </div>
                <div className="flex-row second horzLn" role="cell"><label>Tire Pressure Warning Light</label><br/>
                Also known as the Tire Pressure Monitoring System (TPMS) 
                symbol, this image signals an issue with your tire pressure or the TPMS.</div>
            </div>
            <div className="flex-table row" role="rowgroup">
                <div className="flex-row first vertLn horzLn"  role="cell">
                    <img className="imgLight" src="http://localhost:4001/LightsImg/traction-control-malfunction.png" alt="lightImg"/>
                </div>
                <div className="flex-row second horzLn" role="cell"><label>Traction Control Malfunction Light</label><br/>
                This light indicates that your vehicle’s traction control 
                system might have a broken or damaged sensor or some other malfunction.  In some cars, the same control module 
                operates the ABS and the traction control system, so sometimes this dashboard light comes on when there are 
                problems with your ABS.</div>
                <div className="flex-row first2 vertLn2 horzLn"  role="cell">
                    <img className="imgLight" src="http://localhost:4001/LightsImg/traction-control.png" alt="lightImg"/>
                </div>
                <div className="flex-row second horzLn" role="cell"><label>Traction Control Light</label><br/>
                This car symbol indicates that your vehicle’s traction 
                control system is activated. The traction control system uses your anti-lock brake system (ABS) to determine 
                if one wheel is spinning faster than the others. If it detects that a wheel is slipping, it applies the brakes 
                until the car regains traction. This is most helpful if you’re driving in rain or snow.</div>
            </div>
            <div className="flex-table row" role="rowgroup">
                <div className="flex-row first vertLn"  role="cell">
                    <img className="imgLight" src="http://localhost:4001/LightsImg/transmission-temperature.png" alt="lightImg"/>
                </div>
                <div className="flex-row second" role="cell"><label>Transmission Temperature Warning Light</label><br/>
                If this symbol appears on your dashboard, it means that your 
                transmission is overheating. This could be caused by low transmission fluid, worn transmission parts, heavy 
                towing or something else.</div>
                <div className="flex-row first2 vertLn2"  role="cell">
                    <img className="imgLight" src="http://localhost:4001/LightsImg/washer-fluid.png" alt="lightImg"/>
                </div>
                <div className="flex-row second" role="cell"><label>Washer Fluid Indicator Light</label><br/>
                Imitating the motion of your windshield wipers, this dashboard 
                symbol means that you’re low on windshield washer fluid.</div>
            </div>
        </div>
    )
}

export default LightsTable;