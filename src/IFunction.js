export const priority=(char)=>
    {
        switch(char)
        {
            case '+':
            case '-':
                return 1;
            case '*': 
            case '/':
                return 2;
            case '^':
                return 3;

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