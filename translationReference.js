


function identifyReference(input, bookList){
    let saveText = ''
    let output = ''

    for(let i = 0; i < input.length; i++){
        saveText += input[i]
    
        for(let j = 0; j < bookList.length; j++){
            if(saveText.includes(bookList[j].name)){
                saveText = ''
                let position = input.indexOf(bookList[j].name, i-bookList[j].name.length)
                for(let n = position; n < input.length; n++){
                    saveText += input[n]
                    if(input[n]===';'){
                        i = n
                        break
                    }
                }
                output += `${translationReference(saveText, bookList[j])} `   
                saveText = ''
            }
        }
    }
    return output
}






function translationReference(input, bookList){ 
    let saveNam = '';
    let output = '';

    for(let i = 0; i < input.length; i++){
        //Checking a number
        if(/[0-9]/.test(input[i])===true){
            saveNam += input[i]
            //Checking a part
            if(/[0-9]/.test(input[i+1])===false){
                if(input[i+1]===':'){
                    output += bookList.translationPrinciple.colon(gematriya(saveNam))
                    saveNam = ''
                } else {
                output += gematriya(saveNam)
                saveNam = ''
                }
            }
        //Checking a page   
        } else if(/a|b|c|d/.test(input[i])=== true && /[0-9]|-/.test(input[i-1])=== true){
            output += bookList.translationPrinciple.page(input[i], input[i-1])    
        //Checking a more characters
        } else if(input[i]=== "\n"){
            output += '<br>' 
        } else if(input[i] !== ":"){
            output += input[i]
        }
    }
    
    output = replaceingWords(output, replaceWord)
    return output
}




function replaceingWords(input, replaceWord){
    for (let i=0; i<replaceWord.length; i++){
        if(input.includes(replaceWord[i].En)){
            input = input.replace(replaceWord[i].En, replaceWord[i].He)
        }
    }
    return input
}



