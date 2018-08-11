for(var i=1; i < 101; i++)
    {
      //checks to see if i = a multiple of 3 and 5
      if((i % 5 === 0) && (i % 3 === 0))
      {
        console.log(i + 'FizzBuzz')
      }
      //checks to see if i = a multiple of 5
      else if(i % 5 === 0)
      {
        console.log(i + 'Buzz')
      }
      //checks to see if i = a multiple of 3
      else if(i % 3 === 0)
      {
        console.log(i + 'Fizz')
      }
      else
      {
        console.log(i)
      }
    }
