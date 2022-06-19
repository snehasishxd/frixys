const randomize = (array) => {
    return array[Math.floor(Math.random()*array.length)];
}
const generateNumericID = (length) => {
    if(isNaN(length)) throw new Error("Length Parameter must be a valid number at generateNumericID function");
    if(length>1024) throw new Error("Maximum Numeric ID Lenth is 1024");
    const arr = [0,1,2,3,4,5,6,7,8,9];
    var num = ' ';
    for(i=1;i<=length;i++) {
        num += `${randomize(arr)}`;
        num.split(' ').join('');
    }
    const generatedNumber = num;
    return generatedNumber;
}
const generateID = (length, url_friendly) => {
    if(isNaN(length)) throw new Error("Length Parameter must be a valid number at generateID function");
    if(url_friendly && url_friendly !== true && url_friendly !== false) throw new Error("url_friendly parameter must be a Boolean value at generateID function");
    if(length>1024) throw new Error("Maximum Numeric ID Lenth is 1024");
    if(url_friendly == false) {
        const arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','-','_','.','!','@','#','$','%','^','&','*','(',')','=','+','`','"','/','?','<','>','|','[',']','{','}',':',';','1','2','3','4','5','6','7','8','9','0'];
        var str = ' ';
        for(i=1;i<=length;i++) {
            str += `${randomize(arr)}`;
            str.split(' ').join('');
        }
        const generatedID = str;
        return generatedID;
    } else {
        const arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','-','_','.','1','2','3','4','5','6','7','8','9','0'];
        var str = ' ';
        for(i=1;i<=length;i++) {
            str += `${randomize(arr)}`;
            str.split(' ').join('');
        }
        const generatedID = str;
        return generatedID;
    }
}

const $export = {
    randomize: randomize,
    generateNumericID: generateNumericID,
    generateID: generateID
}
module.exports = $export;
