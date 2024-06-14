function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2qMyVLM4Vc/model.json', modelReady);

}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255)+1;
        random_number_g = Math.floor(Math.random() * 255)+1;
        random_number_b = Math.floor(Math.random() * 255)+1;
   
        document.getElementById("result_label").innerHTML = 'I can hear -'+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy -'+
        (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_label").style.color ="rgb("
    +random_number_r+ "," +random_number_g+ "," +random_number_r+ ")"
   
    img = document.getElementById('cat');
    img1 = document.getElementById('dog');
    img2= document.getElementById('frog');
    img3= document.getElementById('cloud');
    
   if(results[0].label == "cat"){
    img.src = 'tenor.gif';
    img1.src = 'th(1).jpeg';
    img2.src = 'bleh.jpeg';
    img3.src = 'ehem.jpg';
}
   else if(results[0].label == "dog"){
    img.src = 'th.jpeg';
    img1.src = 'tenor(1).gif';
    img2.src = 'bleh.jpeg';
    img3.src = 'ehem.jpg';
}
else if(results[0].label == "background noises"){
    img.src = 'th.jpeg';
    img1.src = 'th(1).jpeg';
    img2.src = 'bleh.jpeg';
    img3.src = 'yup.gif';  
}
    
        else{
            img.src = 'th.jpeg';
            img1.src = 'th(1).jpeg';
            img2.src = 'source.gif';
            img3.src = 'ehem.jpg';
        }

    }
}