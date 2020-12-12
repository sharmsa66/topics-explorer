import Progressbar from '../ProgressBar/Progressbar';
import  './Stepper.css';

import { steps} from './stepData';

const Stepper = () => {
   
    return(
      <div className="stepper">
        <Progressbar steps={steps} ></Progressbar>
      </div>
    );
}

export default Stepper;