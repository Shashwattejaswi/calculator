import './Calculator.css';
import StdBox from './btnBox/StdBox'
import { useState } from 'react';
import { priority,solve } from './IFunction';
            var operant = [];
            var operator = [];
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
            
                            return parseInt(previousNum)<0 ? previousNum.substring(1) : '-'+previousNum
                        
                        else if(flag==1)
                            {
                                return event.target.value;
                            }
                    else if(previousNum!=0)
                        return previousNum+event.target.value;
                    else
                        return event.target.value;

                });
            }
            const solve =(first,op,second)=>
                {
                    switch(op)
                    {
                        case '+':
                            return first+second;
                        case '-':
                            return first-second;
                        case '*': 
                        return first*second;
                        case '/':
                            return first/second;
                        case '^':
                            return first**second;
            
                    }
                    console.log();
        
                }
                const priority=(char)=>
                    {
                        switch(char)
                        {
                            case '+':
                                return 1;
                            case '-':
                                return 1;
                            case '*': 
                            return 2;
                            case '/':
                                return 2;
                            case '^':
                                return 3;
                
                        }
                    }
            function hh(a)
            {
                changeNum(a);
            }
            
        const operate=(event)=>
            {
               
                let val=event.target.value;
                if(val=='=')
                    {
                        console.log(operator.length+" krishna")
                        operant.push(parseInt(num))
                        while(operator.length>0)
                            {
                                let first=operant.pop()
                                let second=operant.pop()
                                let c=operator.pop()
                                let r=solve(first,c,second);
                                console.log(r);
                                operant.push(r);
                            }
                         hh(operant.pop()) 
                    }
                else
                {
                    console.log(parseInt(num))
                    operant.push(parseInt(num))
                    if(operator.length==0)
                        {
                            console.log(val+" "+operator.length+" "+operant.length);
                            operator.push(val);
                        }
                    else
                    {
                        while(operator.length>0)
                        {
                                let c=priority(operator[operator.length-1]);
                                let d=priority(val);
                                console.log(c+' '+d);
                                if(d<=c)
                                    {
                                        let first=operant.pop();
                                        let second=operant.pop();
                                        let c=operator.pop();
                                        console.log(first+" "+c+""+second)
                                        let e=solve(first,c,second);
                                       
                                        console.log(e + ' haha');
                                        operant.push(e);
                                    }
                                    else
                                    {
                                        console.log(val)
                                        operator.push(val);
                                        break;
                                    }
                        }
                    } 
                    flag=1; 
                }   
            }
        return(
            <div className="containar">
                <header></header>
                <input className="rsltBox" value={num}/>
                <StdBox takePutNum={takePutNum} operate={operate}/>
            </div>
        );
    }
    export default Calculator;