function countingValleys(steps) 	{

        let mountain = 0;
        let valley = 0;
      
        for (let step of steps) {
            console.log(step)
          if (step === 'U') {
            mountain++;
            if (mountain === 0) {
                valley++;
            }
          } else if (step === 'D') {
            mountain--;
          }
        }
      
        console.log('mountain', mountain);
        console.log('valley', valley);
        return valley;
 
}

  const input = ['D', 'D', 'U', 'U', 'U', 'U', 'D', 'D'];
  console.log( countingValleys(input));