function average()
{
    var sum=0;
    var a=[1,2,3,4,5];
    for (i=0;i<a.length;i++){
        sum=sum+a[i]
        console.log('sum=',sum)
    }
    var average=sum/a.length
    console.log('average=',average)
}
average();
//4-4