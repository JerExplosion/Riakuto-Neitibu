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
 
 

// MARK: - 

function stringReversalUno(targetStr) {
    var resultStr = "";
    const leng = targetStr.length;
    for (index = leng-1; index >= 0; index --) {
        resultStr += targetStr[index]                                      
    };
    document.write(resultStr);
    console.log(resultStr);
}
          
function stringReversalDos(targetStr) {
    const resultStr = targetStr.split("").reverse().join("");
    console.log(resultStr)
}    


// MARK: - 
// MARK: - 

let cleaninThyRoom = function() {
    return new Promise(function(resolve, reject) {
        resolve('cleanin it right now, chill')
    });
} 

let throwinoutThyTrash = function(someMessage) {
    return new Promise(function(resolve, reject) {
        resolve(someMessage + " threw out y'all's trash")
    });
}

cleaninThyRoom().then(function(resultMessage) {
    return throwinoutThyTrash(resultMessage)
}).then(function(resultMessage) {
    console.log(' done with this crap ' + resultMessage)
}) 










