function si(){
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/x7oPsgK7K/model.json', modelReady)

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
    console.error(error);
    
}
else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("is").innerHTML = 'I can hear -'+ results[0].label;
    document.getElementById("a").innerHTML = 'Accuracy -'+ (results[0].confidence*100).toFixed(3)+ "%";
    document.getElementById("is").style.color = "rgb( " + random_number_r + "," +random_number_g + "," + random_number_b + ")";
    document.getElementById("a").style.color = "rgb( " + random_number_r + "," +random_number_g + "," + random_number_b + ")";

    img1 = document.getElementById('shapesa.png');
    img2 = document.getElementById('shapesb.png');
    img3 = document.getElementById('shapesc.png');
    

    if (results[0].label == "aaaaaaaaaaaaaaaaaa"){
        img1.src = 'shapesoa.gif';
        img2.src =  'shapesb.png';
        img3.src = 'shapesc.png';
    }

    else if (results[0].label == "eeeeeeeeeee"){
        img1.src = 'shapesa.png';
        img2.src =  'shapesob.gif';
        img3.src = 'shapesc.png';
    }

    else  (results[0].label == "ooooo")
        img1.src = 'shapesa.png';
        img2.src =  'shapesb.png';
        img3.src = 'shapesoc.gif';
    }
}


