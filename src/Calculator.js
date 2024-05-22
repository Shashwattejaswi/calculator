import './Calculator.css';
import StdBox from './btnBox/StdBox'
const Calculator=()=>
    {

        return(
            <div className="containar">
                <header></header>
                <input className="rsltBox"/>
                <StdBox/>
            </div>
        );
    }
    export default Calculator;