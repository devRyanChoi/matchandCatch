import React from 'react';
import './AApraisalForm.css'

export default function AApraisalForm() {
  return (
    
    <div className='af-form'>
      <div className='aff-form'>
        <p>1.Select the condition that best mathches your vehicle.</p>
        <div className='af-form-container'>
          <div className='ci1-check'>
            <input type="radio" name = "subject" value = "appia1"/>Excellent(Looks new)
          </div>
          <div className="ci1-check2">
            <input type="radio" name = "subject" value = "appia2"/>Good (Some normal wears)
          </div>
          <div className="ci1-check3"> 
            <input type="radio" name = "subject" value = "appia3"/>Bad (Numerous wears that require repairing)
          </div>
        </div>
      </div>
      
      <div className='aff-form'>
        <p>2.Select the condition that best mathches your rims.</p>
        <div className='af-form-container'>
          <div className='ci2-check1'>
            <input type="radio" name = "subject" value = "appia1"/>Excellent(Looks new)
          </div>
          <div className="ci2-check2">
            <input type="radio" name = "subject" value = "appia2"/>Good (Some normal wears)
          </div>
          <div className="ci2-check3">
            <input type="radio" name = "subject" value = "appia3"/>Bad (Numerous wears that require repairing)
          </div>
        </div>
      </div>

      <div className='aff-form'>
        <p>3. Do you see any wearing lights appearing on your car's dashboard?</p>
        <div className='af-form-container'>
          <div className='ci3-check1'>
            <input type="radio" name = "subject" value = "appia1"/>Yes (If yes, What kind of warning light illuniated?)
          </div>
          <div className="ci3-check2">
            <input type="radio" name = "subject" value = "appia2"/> No
          </div>
        </div>
      </div>
      
      <div className='aff-form'>
          <p>4. Have you perfomed any mechnical variation on your car from producton Specs?</p>
        <div className='ci4-check1'>
          <input type="radio" name = "subject" value = "appia1"/>Yes (If yes, please choose from the following options)
        </div>
        <div className='af-form-container'>
          <div>
            <input type="checkbox" className="checkbox exhaust" />Exhaust
          </div>
          <div>
            <input type="checkbox" className="checkbox exhaust" />Suspension
          </div>
          <div>
            <input type="checkbox" className="checkbox exhaust" />Exterior
          </div>
          <div>
            <input type="checkbox" className="checkbox exhaust" />Performance
          </div>
          <div>
            <input type="checkbox" className="checkbox exhaust" />Car Infotainment system
          </div>
          <div>
            <input type="checkbox" className="checkbox exhaust" />Other
          </div>
        </div>
        <div className="ci-checks2">
          <input type="radio" name = "subject" value = "appia2"/> No
        </div>
      </div>

      <div className='aff-form'>
          <p>5. Do you have any spare keys for your vehicle?</p>
        <div>
          <div className='ci3-check1'>
            <input type="radio" name = "subject" value = "appia1"/>Yes
          </div>
          <div className="ci3-check2">
            <input type="radio" name = "subject" value = "appia2"/> No 
          </div>
        </div>
      </div>

      <div className='aff-form'>
          <p>6. Does your vehicle have a spare tire?</p>
        <div className='ci3-check1'>
          <input type="radio" name = "subject" value = "appia1"/>Yes</div>
        <div className="ci3-check2">
          <input type="radio" name = "subject" value = "appia2"/> No </div>
      </div>

      <div className='aff-form'>
          <p>7. Does your vehicle have a spare tire?</p>
        <div className='ci3-check1'>
          <input type="radio" name = "subject" value = "appia1"/>Yes</div>
        <div className="ci3-check2">
          <input type="radio" name = "subject" value = "appia2"/> No </div>
      </div>

      <div className='aff-form'>
          <p>8. Does your vehicle have any records of accident repairs</p>
        <div className='ci3-check1'>
          <input type="radio" name = "subject" value = "appia1"/>Yes</div>
        <div className="ci3-check2">
          <input type="radio" name = "subject" value = "appia2"/> No </div>
      </div>
      
      <div className='aff-form'>
          <p>9. Does he vehicle have any mechanical probelm?</p>
        <div className='ci9-check1'>
          <input type="radio" name = "subject" value = "appia1"/>Yes (If yes, please choose from the following options)
        </div>
        <div className='af-form-container'>          
          <div>
            <input type="checkbox" className="checkbox exhaust" />Powertrain(Engine & Trnsmission)
          </div>
          <div>
            <input type="checkbox" className="checkbox exhaust" />Brakes
          </div>
          <div>
            <input type="checkbox" className="checkbox exhaust" />A/C
          </div>
          <div>
            <input type="checkbox" className="checkbox exhaust" />Exhaust (example: Black smoke or Loud noise)
          </div>
          <div>
            <input type="checkbox" className="checkbox exhaust" />Suspension
          </div>
          <div>
            <input type="checkbox" className="checkbox exhaust" />Oil Leak
          </div>
        </div>
        <div className="ci-check2">
          <input type="radio" name = "subject" value = "appia2"/> No
        </div>
      </div>

      <div className='aff-form'>
          <p>10. Does your vehicle have a spare tire?</p>
          <div>
            <input type="radio" name = "subject" value = "appia1"/>Yes
          </div>
          <div className="ci3-check2">
            <input type="radio" name = "subject" value = "appia2"/> No 
          </div>
      </div>
        
        <div className='ci3-check1'>

      </div>

      <div className='aff-form'>
          <p>11. Does your vehicle have a spare tire?</p>
        <div className='ci3-check1'>
          <input type="radio" name = "subject" value = "appia1"/>Yes
          </div>
        <div className="ci3-check2">
          <input type="radio" name = "subject" value = "appia2"/> No 
        </div>
      </div>

      <div className='aff-form'>
          <p>12. Do you find any bent or dent on your vehicle?</p>
          <div>
            <div className='ci3-check1'>
              <input type="radio" name = "subject" value = "appia1"/>Yes
            </div>
            <div className="ci3-check2">
              <input type="radio" name = "subject" value = "appia2"/> No 
            </div>
          </div>
      </div>
    </div>
  );
}

