const score = parseInt(prompt("Enter Your Score: "))

if(score > 100){
    alert("Too good for this school, i guess.🤣")
    
}else if(score >= 70 && score <= 100){
    alert("Excellent, You are a genius!👍")

}else if(score >= 60 && score <= 69 ){
    alert("Very Good, you've got a B 😀")

}else if(score >= 50 && score <= 59 ){
    alert("Good, you've got a C 👌")

}else if(score >= 40 && score <= 49 ){
    alert("A nice attempt, you've got a D 😊")

}else if(score >= 30 && score <= 39 ){
    alert("Ouch, you've got an E 😞")

}else if(score >= 0 && score <= 29 ){
    alert("Ooppss, you've got an F 😥")
}else{
    alert("You may kindly drop out.😭")
}