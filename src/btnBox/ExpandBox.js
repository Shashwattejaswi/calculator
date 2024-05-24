import "./box.css"
const ExpandBox=({mathExp})=>
    {
        const expandArray=['(',')','mc','m+','m-','mr','2nd',{val:"x2",func:(a)=>{return Math.pow(a,2)}},{val:'x3',func:(a)=>{return Math.pow(a,3)}},'xy',{val:"ex",func:(a)=>{return Math.exp(a)}},{val:"10x",func:(a)=>{return Math.pow(10,a)}},'1/x',{val:"x",func:(a)=>{return Math.sqrt(a)}},{val:"x",func:(a)=>{return Math.cbrt(a)}},'yx','ln',{val:"log10",func:(a)=>{return Math.log10(a)}},{val:"x!",func:(a)=>{let sum=1;while(a!=0){sum=sum*a;a--}return sum}},'sin','cos','tan','e','EE','rad','sinh','cosh','tanh',{val:"PI",func:(a)=>{return Math.PI}},{val:"rand",func:(a)=>{return Math.floor(Math.random()*1000)}}];
        
        return(
            <div className="ExpandBox"> 
                {expandArray.map((item,index)=>{
                    if(index>6 && index<=8 || index>9 && index<12 )
                        
                        return <button onClick={()=>{mathExp(item.func)}} value={item.val} className={'Exp'} >{item.val.substring(0,item.val.length-1)}<sup>{item.val.substring(item.val.length-1,item.val.length)} </sup></button>
                    else if(index==14)
                        return <button onClick={()=>{mathExp(item.func)}} value={item.val}className={'Exp'} >&#8731;{item.val}</button>
                    else if(index==13)
                        return <button onClick={()=>{mathExp(item.func)}} value={item.val}className={'Exp'} >&radic;{item.val}</button>

                    if(index==17 || index>12 && index<=14 || index==18 || index==28 || index==29)
                        return <button onClick={()=>{mathExp(item.func)}} value={item.val}className={'Exp'} >{item.val}</button>
                    else
                    return <button value={item} index={index} className={'Exp'} >{item}</button>


                })}
            </div>
        )
    }
    export default ExpandBox