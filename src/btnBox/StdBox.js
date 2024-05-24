import './box.css'
const StdBox=({takePutNum,operate})=>
    {
        const sym=['C',"-/+",'%','+',9,8,7,'-',6,5,4,'*',3,2,1,'/',0,'.','='];
        return(
            <div className='StdBox'>
                {
                    sym.map((item,index)=>{
                            
                        if((index+1)%4===0 || index===18)
                            {
                                return <button value={item} index={index} className={'operator'+' '+'StdBoxItem'} onClick={(e)=>{operate(e)}}>{item}</button>
                            }
                        
                        // else if((index===19 && index===16))
                        //     {
                        //         return <button value={item} index={index} onClick={(e)=>{takePutNum(e)}} className={'operator'+' '+'roundBtn'}>{item}</button>
                        //     }
                       if((item>=1 && item<=9) ||item==='.' || item==='C')
                        return <button value={item} index={index} className='StdBoxItem' onClick={(e)=>{takePutNum(e)}}>{item}</button>
                       if(item==0)
                        return <button value={item} index={index} className={'zerobtn'+' '+'StdBoxItem'} onClick={(e)=>{takePutNum(e)}}>{item}</button>

                       return <button value={item} index={index} className='StdBoxItem' onClick={(e)=>{takePutNum(e)}}>{item}</button>
                    })
                }
            </div>
        );
    }
    export default StdBox;