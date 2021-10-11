function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DzosCsHu_/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error, results){
if(error){
    console.error(error);
}else{
console.log(results);
random_number_r = Math.floor(Math.random() * 255)+1;
random_number_g = Math.floor(Math.random() * 255)+1;
random_number_b = Math.floor(Math.random() * 255)+1;

document.getElementById("result_label").innerHTML = 'i can hear - '+
results[0].label;
document.getElementById("result_confidence").innerHTML = 'Accuracy -'+
(results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color = "rgb("
+random_number_r+","+random_number_g+","+random_number_b+")";
document.getElementById("result_confidence").style.color = "rgb("
+random_number_r+","+random_number_g+","+random_number_b+")";

uni1 = document.getElementById('img');


if (results[0].label =="Sleep") {
    img.src = 'sleep.gif';
    
}
else if(results[0].label =="Play") {
    img.src = 'playing.gif';

}
else if(results[0].label =="Dance") {
    img.src = 'medium.gif';
    
}
else if(results[0].label =="Fly") {
    img.src = 'fly.gif';
}
else if(results[0].label =="Read") {
    img.src = 'reading.gif';
}
else if(results[0].label =="Run") {
    img.src = 'large.gif';
}
else{
    img.src = 'backround noice.gif';
    
}
}
}
