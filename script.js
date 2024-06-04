morsecode={
    "a":".- ",
    "b":"-... ",
    "c":"-.-. ",
    "d":"-.. ",
    "e":". ",
    "f":"..-. ",
    "g":"--. ",
    "h":".... ",
    "i":".. ",
    "j":".--- ",
    "k":"-.- ",
    "l":".-.. ",
    "m":"-- ",
    "n":"-. ",
    "o":"--- ",
    "p":".--. ",
    "q":"--.- ",
    "r":".-. ",
    "s":"... ",
    "t":"- ",
    "u":"..- ",
    "v":"...- ",
    "w":".-- ",
    "x":"-..- ",
    "y":"-.-- ",
    "z":"--.. ",
    "0":"----- ",
    "1":".---- ",
    "2":"..--- ",
    "3":"...-- ",
    "4":"....- ",
    "5":"..... ",
    "6":"-.... ",
    "7":"--... ",
    "8":"---.. ",
    "9":"----. ",
    " ":"&nbsp;&nbsp;&nbsp;"};

function convert_to_morse_code(){
    input=document.getElementById("userinput").value;
    output="";
    for(i in input){
        if(morsecode[input[i].toLowerCase()]==undefined){
            output="No weird characters!";
            break;
        }
        output+=morsecode[input[i].toLowerCase()];
    }
    document.getElementById("output_text").innerHTML=output;
    document.getElementById("copybutton").hidden=false;
}

function copytext(){
    text=""
    for(i in output){
        if(output[i]=="." || output[i]=="-" || output[i]==" "){
            text+=output[i];
        }
    }
    navigator.clipboard.writeText(text);
}