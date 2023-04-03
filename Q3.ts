// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------

// Question # : Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// ========================================================================================================


let fName: string = "I am student OF PIAIC- Batch 43, Q1-Lahore.";
console.log('\n' + fName.toLowerCase()+ '\n');
console.log(fName.toUpperCase()+ '\n');

// console.log(pName.toLowerCase().replace(/(?:^|\s)\w/g, (test) => test.toUpperCase()));

function titleCase(str: any) 
{
   str = str.toLowerCase().split(' ');
    
     console.log(str);
    
    for (let i = 0; i < str.length; i++) 
    {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      console.log(str[i]);
    }
    console.log(str);
    // console.log(str);
    return str.join(' ');
}
console.log(titleCase(fName));