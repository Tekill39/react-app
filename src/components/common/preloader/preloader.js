import React from 'react';
import preloaderPhoto from '../../../assets/img/805.svg';


let Preloader=(props)=>{

return <div style = { {backgroundColor:'white'}}>
            <img src={preloaderPhoto} />
        </div>
}


export default Preloader;