function myFunction(){
    var n1 = document.getElementById("n1").value;
    if(n1 % 4 === 0){
        if(n1 % 100 === 0){
            if(n1 % 400 === 0){
                document.write(n1 + " is a Leap Year.")
            }else{
                document.write(n1 + " is not a Leap Year.")
            }
        }else{
            document.write(n1 + " is a Leap Year.")             
        }
    }else{
        document.write(n1 + " is not a Leap Year.")
    }
}
