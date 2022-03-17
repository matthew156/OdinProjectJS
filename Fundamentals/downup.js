function downup(string){
    if(string.length == 1)
    {
        console.log(string)
    }
    
    else
    {
        console.log(string);
        downup(string.substring(string, string.length-1))
        console.log(string);

    }
}

console.log(downup("Greetings"))