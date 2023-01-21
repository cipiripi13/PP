const subtractDays = (date, days) => {
    const result = new Date(date);
    
    result.setDate(result.getDate() - days);
    return result;
}
console.log(subtractDays(new Date('2022-12-30 19:40:39'), 10));
 console.log(subtractDays(new Date('2022-12-30 19:40:39'), 10) + 1);


//  const d = new Date();
//  console.log(d);

const d = new Date("October 13, 2014 11:13:00");
console.log(d);

