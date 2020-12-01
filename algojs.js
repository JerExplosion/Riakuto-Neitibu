function duplicatesDetection(targetStr) {

    const arrFromStr = targetStr.split('');     
    const leng = arrFromStr.length
    const newHashMap = new Map();
    var resultArr = [];

    for (let index = 0; index <leng; index ++ ) {
        let current = arrFromStr[index];
        if (newHashMap.get(current) === undefined) {
            newHashMap.set(current, true);
        } 
        else {
            const boolVal = newHashMap.get(current);
            if (boolVal) {
                newHashMap.set(current, !boolVal)
            }      
        }
    }     
        newHashMap.forEach((val, key) => {
            if (!val)
            resultArr.push(key)
        });
        document.write(resultArr);
        console.log(resultArr);
        return resultArr;       
 }
 
 
 
