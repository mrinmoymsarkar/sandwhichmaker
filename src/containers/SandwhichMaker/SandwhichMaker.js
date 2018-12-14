import React, {Component} from 'react';
import  Aux from '../../hoc/Auxiliary';
import  Sandwhich from '../../components/Sandwhich/Sandwhich'

class SandwhichMaker extends Component {
    state = {
        ingredients: {
            salad:1,
            bacon:1,
            cheese: 2,
            meat:2
        }
    }

   render() {
       return (
           <Aux>
               <Sandwhich ingredients = {this.state.ingredients}/>
               <div>Build Controls</div>
           </Aux>
       )
   }

}

export default SandwhichMaker;