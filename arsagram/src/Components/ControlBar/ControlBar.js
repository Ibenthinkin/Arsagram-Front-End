import React from 'react';

const ControlBar = (props) => {
    const {toggleSlider, onSubmit } = props
    return (
       <div className="ControlBar">
        <div className="onoffswitch">
            <input onChange={toggleSlider} type="checkbox" name="onoffswitch" 
                className="onoffswitch-checkbox" id="myonoffswitch" / >
            <label  className="onoffswitch-label" htmlFor="myonoffswitch">
                <span className="onoffswitch-inner"></span>
                <span className="onoffswitch-switch"></span>
			</label>
	    </div>
            <button
                className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                id='nextButton'
                onClick={onSubmit}
            >Next</button>

            <button
                className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                id='saveButton'
                onClick={onSubmit}
            >Save</button>
            
       </div>
    )
}

 export default ControlBar