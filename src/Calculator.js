import './Calculator.css';
import StdBox from './btnBox/StdBox'
import { useState } from 'react';
import HeadBar from './HeadBar';
import ExpandBox from './btnBox/ExpandBox';
import { priority, solve, inToPre} from './IFunction';
var operant = [];
var operator = [];
const eq=[];
const r=['93','-','4','*','12','+','5'];

const Calculator = () => {
    const [expand, changeExpand] = useState(true);
    const [num, changeNum] = useState(0);
    const [flag,setflag]=useState(false);
    //const [curHis,setCurHis]=useState(eq);
    
   
    const takePutNum = (event) => {
        changeNum((previousNum) => {
            if (event.target.value == 'C')
                return '0';
            // return (parseInt(previousNum)<10 && parseInt(previousNum)>-10 )? '0' : previousNum.substring(0,previousNum.length-1);
            else if (event.target.value == "-/+")

                return parseInt(previousNum) < 0 ? previousNum.substring(1) : '-' + previousNum

            else if (flag) {
                
                setflag(false);
                return event.target.value;
                
            }
            else if (previousNum != 0)
                return previousNum + event.target.value;
            else
                return event.target.value;

        });
    }


   
    const operate = (event) => {

        let val = event.target.value;
        if (val == '=') {
            console.log(operator.length + " krishna")
            eq.push(num)
            

            // operant.push(parseInt(num))
            // while (operator.length > 0) {
            //     let first = operant.pop()
            //     let second = operant.pop()
            //     let c = operator.pop()
            //     let r = solve(first, c, second);
            //     console.log(r);
            //     operant.push(r);
            // }
            // hh(operant.pop())
            changeNum(inToPre(eq));   // method that evaluate by covert in post
            while(eq.length>0)   
                {
                    eq.pop();
                }
        }
        else {
            if(!flag)   // if previous input is a number
                {
                    eq.push(num);     // in eq equation store as in infix form
                    eq.push(val);

                }
            else  // if previous input is an operator (means operator press two type)
            {   
                eq.pop();
                eq.push(val);
            }
            // console.log(parseInt(num))
            // operant.push(parseInt(num))
            // if (operator.length == 0) {
            //     console.log(val + " " + operator.length + " " + operant.length);
            //     operator.push(val);
                
            // }
            // else {
            //     while (operator.length > 0) {
            //         let c = priority(operator[operator.length - 1]);
            //         let d = priority(val);
            //         console.log(c + ' ' + d);
            //         if (d <= c) {
            //             let first = operant.pop();
            //             let second = operant.pop();
            //             let c = operator.pop();
            //             console.log(first + " " + c + "" + second)
            //             let e = solve(first, c, second);

            //             console.log(e + ' haha');
            //             operant.push(e);
            //         }
            //         else {
            //             console.log(val)

            //             break;
            //         }
            //     }
            //     operator.push(val);
            // }
           setflag(true);
        }
    }

    const expandbtn = () => {
        let ex = expand;
        return ex === true ? changeExpand(false) : changeExpand(true);

    }
    const mathExp = (e) => {
        // let val=item.val;

        changeNum(e(num));

    }
    return (
        <div className="containar">
            <HeadBar expandbtn={expandbtn} />
            <input className='history' value={null}/>
            <input className="rsltBox" value={num} />
            <div className="btnBox">
                {expand && <ExpandBox mathExp={mathExp} />}
                <StdBox takePutNum={takePutNum} operate={operate} />
            </div>

        </div>
    );
}
export default Calculator;