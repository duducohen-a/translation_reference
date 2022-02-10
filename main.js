


(()=>{
    document.querySelector('#input')
    .addEventListener('input', main)
})()


function main(){

    let input = document.getElementById("input").value;
    let output = document.getElementById("output")
        output.innerText = identifyReference(input, bookList)
        //identify Reference is in the reference translation file

}






(()=>{
    document.querySelector('button')
    .addEventListener('click', funButton)
})()


function funButton() {
    let copyText = document.getElementById("output").textContent
	navigator.clipboard.writeText(copyText);
}
