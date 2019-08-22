import React from 'react';
import Switch from '@material-ui/core/Switch';


const ControlBar = (props) => {
    const {toggleSlider, onSubmit } = props
    return (
       <div className="ControlBar">

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