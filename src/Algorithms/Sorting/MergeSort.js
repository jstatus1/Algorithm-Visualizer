let originalArrayLength = 0

export function getMergeSortAnimations(array) {
    const animations = [];
    const endingAnimations = []
    if (array.length <= 1) return array;
    originalArrayLength = array.length
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations, endingAnimations);
    return {animations, endingAnimations};
  }
  
  //for final merge color change, we can do 
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
    endingAnimations
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
   
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations, endingAnimations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations, endingAnimations);

    let lastRound = false
    if(middleIdx == (Math.floor((startIdx + mainArray.length-1) / 2)) && startIdx == 0 && endIdx ==  mainArray.length-1)
        lastRound = true
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations, endingAnimations, lastRound);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
    endingAnimations,
    lastRound
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;

    if(lastRound)
    {
        while (i <= middleIdx && j <= endIdx) {
            // These are the values that we're comparing; we push them once
            // to change their color.
            endingAnimations.push([i, j]);
            // These are the values that we're comparing; we push them a second
            // time to revert their color.
            endingAnimations.push([i, j]);
            if (auxiliaryArray[i] <= auxiliaryArray[j]) {
              // We overwrite the value at index k in the original array with the
              // value at index i in the auxiliary array.
              endingAnimations.push([k, auxiliaryArray[i]]);
              mainArray[k++] = auxiliaryArray[i++];
            } else {
              // We overwrite the value at index k in the original array with the
              // value at index j in the auxiliary array.
              endingAnimations.push([k, auxiliaryArray[j]]);
              mainArray[k++] = auxiliaryArray[j++];
            }
          }
          while (i <= middleIdx) {
            // These are the values that we're comparing; we push them once
            // to change their color.
            endingAnimations.push([i, i]);
            // These are the values that we're comparing; we push them a second
            // time to revert their color.
            endingAnimations.push([i, i]);
            // We overwrite the value at index k in the original array with the
            // value at index i in the auxiliary array.
            endingAnimations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
          }
          while (j <= endIdx) {
            // These are the values that we're comparing; we push them once
            // to change their color.
            endingAnimations.push([j, j]);
            // These are the values that we're comparing; we push them a second
            // time to revert their color.
            endingAnimations.push([j, j]);
            // We overwrite the value at index k in the original array with the
            // value at index j in the auxiliary array.
            endingAnimations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
          }
    }else
    {
        while (i <= middleIdx && j <= endIdx) {
            // These are the values that we're comparing; we push them once
            // to change their color.
            animations.push([i, j]);
            // These are the values that we're comparing; we push them a second
            // time to revert their color.
            animations.push([i, j]);
            if (auxiliaryArray[i] <= auxiliaryArray[j]) {
              // We overwrite the value at index k in the original array with the
              // value at index i in the auxiliary array.
              animations.push([k, auxiliaryArray[i]]);
              mainArray[k++] = auxiliaryArray[i++];
            } else {
              // We overwrite the value at index k in the original array with the
              // value at index j in the auxiliary array.
              animations.push([k, auxiliaryArray[j]]);
              mainArray[k++] = auxiliaryArray[j++];
            }
          }
          while (i <= middleIdx) {
            // These are the values that we're comparing; we push them once
            // to change their color.
            animations.push([i, i]);
            // These are the values that we're comparing; we push them a second
            // time to revert their color.
            animations.push([i, i]);
            // We overwrite the value at index k in the original array with the
            // value at index i in the auxiliary array.
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
          }
          while (j <= endIdx) {
            // These are the values that we're comparing; we push them once
            // to change their color.
            animations.push([j, j]);
            // These are the values that we're comparing; we push them a second
            // time to revert their color.
            animations.push([j, j]);
            // We overwrite the value at index k in the original array with the
            // value at index j in the auxiliary array.
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
          }
    }
    
  }