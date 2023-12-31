/*
Task:
You have to write a function pattern which returns the following Pattern(See Examples) upto (2n-1) rows, where n is parameter.

Rules/Note:
If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
All the lines in the pattern have same length i.e equal to the number of characters in the longest line.
Range of n is (-∞,100]
Examples:
pattern(5):

    1    
   121   
  12321  
 1234321 
123454321
 1234321 
  12321  
   121   
    1    
pattern(10):

         1         
        121        
       12321       
      1234321      
     123454321     
    12345654321    
   1234567654321   
  123456787654321  
 12345678987654321 
1234567890987654321
 12345678987654321 
  123456787654321  
   1234567654321   
    12345654321    
     123454321     
      1234321      
       12321       
        121        
         1         
pattern(15):

              1              
             121             
            12321            
           1234321           
          123454321          
         12345654321         
        1234567654321        
       123456787654321       
      12345678987654321      
     1234567890987654321     
    123456789010987654321    
   12345678901210987654321   
  1234567890123210987654321  
 123456789012343210987654321 
12345678901234543210987654321
 123456789012343210987654321 
  1234567890123210987654321  
   12345678901210987654321   
    123456789010987654321    
     1234567890987654321     
      12345678987654321      
       123456787654321       
        1234567654321        
         12345654321         
          123454321          
           1234321           
            12321            
             121             
              1              
pattern(20):

                   1                   
                  121                  
                 12321                 
                1234321                
               123454321               
              12345654321              
             1234567654321             
            123456787654321            
           12345678987654321           
          1234567890987654321          
         123456789010987654321         
        12345678901210987654321        
       1234567890123210987654321       
      123456789012343210987654321      
     12345678901234543210987654321     
    1234567890123456543210987654321    
   123456789012345676543210987654321   
  12345678901234567876543210987654321  
 1234567890123456789876543210987654321 
123456789012345678909876543210987654321
 1234567890123456789876543210987654321 
  12345678901234567876543210987654321  
   123456789012345676543210987654321   
    1234567890123456543210987654321    
     12345678901234543210987654321     
      123456789012343210987654321      
       1234567890123210987654321       
        12345678901210987654321        
         123456789010987654321         
          1234567890987654321          
           12345678987654321           
            123456787654321            
             1234567654321             
              12345654321              
               123454321               
                1234321                
                 12321                 
                  121                  
                   1                   
*/

/*
define repeating pattern => 1 to 9, then 0, then repeat from 1 ...
calculate width of longest line => (n * 2) - 1
loop from 1 to (n):
current row = patern.slice(0, i) + reverse(pattern.slice(0, i - 1))
space on each side of row = (max width - row width) / 2
add space + row + space to diamond pattern

after all loops, add a reversed copy of rows from 0 to n - 1 to diamond
return diamond join '\n'
*/

function pattern(n) {
	if (n < 1) return '';
	if (n === 1) return '1';

	const pattern = '1234567890'.repeat(n);
	const maxWidth = n * 2 - 1;
	const diamond = [];

	for (let i = 1; i <= n; i++) {
		let row =
			pattern.slice(0, i) + [...pattern.slice(0, i - 1)].reverse().join('');
		let space = ' '.repeat((maxWidth - row.length) / 2);
		diamond.push(space + row + space);
	}

	diamond.push(...diamond.slice(0, diamond.length - 1).reverse());
	return diamond.join('\n');
}

console.log(pattern(7)); //,"      1      \n     121     \n    12321    \n   1234321   \n  123454321  \n 12345654321 \n1234567654321\n 12345654321 \n  123454321  \n   1234321   \n    12321    \n     121     \n      1      ");
console.log(pattern(1)); //,"1");
console.log(pattern(3)); //,"  1  \n 121 \n12321\n 121 \n  1  ");
console.log(pattern(0)); //,"");
console.log(pattern(-25)); //,"");
