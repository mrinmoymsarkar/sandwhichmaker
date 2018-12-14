import React, {Component} from 'react';
import  Aux from '../../hoc/Auxiliary';
import  Sandwhich from '../../components/Sandwhich/Sandwhich'

class SandwhichMaker extends Component {
   render() {
       return (
           <Aux>
               <Sandwhich/>
               <div>Build Controls</div>
           </Aux>
       )
   }

}

export default SandwhichMaker;