import "./box.css"
const ExpandBox=()=>
    {
        const expandArray=['(',')','mc','m+','m-','mr','2nd','x2','x3','xy','ex','10x','1/x','2x','3x','yx','ln','log10','x!','sin','cos','tan','e','EE','rad','sinh','cosh','tanh','pi','rand'];
        return(
            <div className="ExpandBox">
                {expandArray.map((item,index)=>{
                    if(index>6 && index<=11)
                        return <button value={item} index={index} className={'StdBoxItem'} >{item.substring(0,item.length-1)}<sup>{item.substring(item.length-1,item.length)}</sup></button>
                    return <button value={item} index={index} className={'StdBoxItem'} >{item}</button>
                })}
            </div>
        )
    }
    export default ExpandBox