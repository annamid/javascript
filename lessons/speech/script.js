    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let woord1 = onderwerp[index];
        let woord2 = extrawoord[index];
        let woord3 = extrwoord[index];
        let woord4 = werkwoord[index];
        let woord5 = restwoord[index];
        let outputString = woord1 + " " + woord2 + " " + woord3 + " " + woord4 + " " + woord5;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["I", "Killian", "Olli"];
    const extrawoord = ["do", "does", "doesn't"];
    const extrwoord = ["really", "really", "actually"];
    const werkwoord = ["love", "like", "hate"];
    const restwoord = ["BTS", "music", "BTS"];
        
    let plaatjes = ["https://img.discogs.com/S2JVLVAXzShRiwbRKVaW5Ttj3m8=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-15974524-1601197609-6669.jpeg.jpg", "https://res.cloudinary.com/aidbuilder/image/upload/c_limit,h_300,w_300/v20191212081330/collection_images/LIVE/COL-2-6782.jpg", "https://f.jwwb.nl/public/h/b/p/temp-jznbexhbwdkggmfvpara/kxb5v1/BTS_Love_Yourself_Answer_album_cover.jpg", "https://cdn.apocanow.it/beatgogo/uploads/al/13421.jpg"]
    let arrayLength = onderwerp.length;
