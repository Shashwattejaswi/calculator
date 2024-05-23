export const priority=(char)=>
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

   export const solve =(first,op,second)=>
        {
            switch(op)
            {
                case '+':
                    return first+second;
                case '-':
                    return second-first;
                case '*': 
                return first*second;
                case '/':
                    return second/first;
                case '^':
                    return first**second;
    
            }
            

        }

const parameter=(eq)=>
    {
        const operator=[];
        const operant=[];
        let i=0;
        while(i<eq.length)
            {
               if(isNaN(eq.charAt(i)))
                {

                }
                else
                {
                    operant.push(eq.charAt(i));
                }
            }
    }