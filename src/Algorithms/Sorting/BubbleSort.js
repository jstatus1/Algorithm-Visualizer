export function getBubbleSortAnimations(array)
{
    const animations = [];

    let isSorted = false
    let counter = 0
    while(!isSorted)
    {
        isSorted = true
        for(let i = 0; i < array.length - 1 - counter; i++)
        {
            animations.push([i,i+1, "compare"])
            if(array[i] > array[i+1])
            {
                animations.push([i,i+1, "swap"])
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
                isSorted= false
            }
        }
        counter++
    }

    // for(let i = 0; i < array.length; i++)
    // {
    //     for(let j = 0; j < (array.length-i-1); j++)
    //     {
    //         animations.push([i,j, "compare"])
    //         if(array[j] > array[j+1])
    //         {
    //             if(j == (array.length-i -2))
    //             {
    //                 animations.push([j,j+1, "end"])
    //             }else
    //             {
    //                 animations.push([j,j+1, "swap"])
    //             }
                
    //             let temp = array[j]
    //             array[j] = array[j+1]
    //             array[j+1] = temp
    //         }
    //     }
       
    // }
    console.log(array)
    return animations
}