import './Calculator.css';
import StdBox from './btnBox/StdBox'
import { useState } from 'react';
import { priority } from './IFunction';
const Calculator=()=>
    {
        const [num,changeNum]=useState(0);
        let flag=0;

        const takePutNum=(event)=>
            {
                
                changeNum((previousNum)=>{
                     if(event.target.value=='C')
                        return (parseInt(previousNum)<10 && parseInt(previousNum)>-10 )? '0' : previousNum.substring(0,previousNum.length-1);
                     else if(event.target.value=="-/+")
                        {
                            return parseInt(previousNum)<0 ? previousNum.substring(1) : '-'+previousNum
                        }
                        else if(flag!=0)
                            {
                                flag=0;
                                return event.target.value;
                            }
                    else if(previousNum!=0)
                        return previousNum+event.target.value;
                    else
                        return event.target.value;

                });
            }
        const operator=(event)=>
            {
                const operant=[];
                const operator=[];
                
                if(event.target.value=='=')
                    {

                    }
                else
                {
                    flag=1;
                    if(operator.length==0)
                        operator.push(event.target.value);
                    else
                    {
                        if(priority(event.target.value)<priority(operator[operator.length-1]))
                            {
                                operant
                            }
                    }
                    operant.push(parseInt(num))
                }
                
                
            }
        return(
            <div className="containar">
                <header></header>
                <input className="rsltBox" value={num}/>
                <StdBox takePutNum={takePutNum} operator={operator}/>
            </div>
        );
    }
    export default Calculator;