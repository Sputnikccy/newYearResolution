import { getDatabase, ref, remove} from 'firebase/database';
import firebase from './firebase';

const DisplayResolutions = (props) => {
   

    //remove resolution from the list when click 'X' button
    const handleRemove = (resolutionId)=>{
        const database = getDatabase(firebase);
        const dbRef = ref(database,`/resolution/${resolutionId}`);
        remove(dbRef)
    }
    return (
        <ul className='displayResolution'>
            {/* access data from Form.js */}
            {props.resolutions.map((resolution) => {
                return (
                    <li key={resolution.id}>
                        <div className="resolutionInfo">
                            <div className='resolutionText'>
                            <p >{resolution.name.resolution}</p>
                            </div>
                           
                            <div className='resolutionImgContainer'>
                            <img src={resolution.name.image} alt={resolution.name.imageDescription} className='resolutionImg'/>
                            </div>
                            
                        </div>
                       
                        <button className="remove" onClick={()=>{handleRemove(resolution.id)}}>x</button>      
                    </li>
                    
                )
            })}
        </ul>
    )
}

export default DisplayResolutions