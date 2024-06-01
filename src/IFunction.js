


const expandArray = [{ val: '(', func: "" }, ')', 'mc', 'm+', 'm-', 'mr', '2nd', 'x2', 'x3', 'xy', 'ex', '10x', '1/x', '2x', '3x', 'yx', 'ln', 'log10', 'x!', 'sin', 'cos', 'tan', 'e', 'EE', 'rad', 'sinh', 'cosh', 'tanh', 'pi', 'rand'];


export const priority = (char) => {
    switch (char) {
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

export const solve = (first, op, second) => {
    switch (op) {
        case '+':
            return first + second;
        case '-':
            return second - first;
        case '*':
            return first * second;
        case '/':
            return second / first;
        case '^':
            return first ** second;

    }


}

const eq=['5','*','100','-','10','/','5'];



export const inToPre=(aj)=>
    {
        let oper=[];
        let nums=[];
        aj.forEach((a)=>{
            if(isNaN(a))
                {
                    if(oper.length==0)
                        {
                            oper.push(a)
                        }
                    else
                    {
                        while(oper.length>0)
                            {

                                if(priority(oper[oper.length-1])>=priority(a))
                                    {
                                        let f=nums.pop();
                                        let l=nums.pop();
                                        let o=oper.pop();
                                        nums.push(solve(f,o,l));
                                        
                                    }
                                    else{
                                        break;
                                    } 
                            }
                            oper.push(a);
                    }
                }
            else
            {
                nums.push(parseInt(a));
            }
        })

        while(oper.length>0)
            {
                let a=nums.pop();
                let b=nums.pop();
                nums.push(solve(a,oper.pop(),b));

            }  
            
            return(nums.pop());      
    }