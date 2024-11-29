function oddAvg(arr)
{
    const odds=[];
    for(const num  of arr)
    {
        if( num %2===1)
        {
            odds.push(num);
        }
    }

    let sum=0;
    
    for(const num of odds)
    {
        sum+=num;
    }
    let avg=sum/odds.length;

    console.log('avg is :',avg);

}

const arr=[1,2,3,4,5,6,7,8,9,10];
oddAvg(arr);