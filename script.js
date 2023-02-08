function sh(){
    var type = document.getElementById("password");
    var button = document.getElementById("sh");
    if(type.type == "password"){
        type.type = "text";
        button.innerText = "H";
    }else if(type.type  == "text"){
        type.type = "password"
        button.innerText = "S";
    }
}

function random(max){
    return Math.floor(Math.random() * max)
}
function verify_password(password){
    var symbols = new Array(33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,58,59,60,61,62,63,64,91,92,93,94,95,96,123,124,125,126);
    var numbers = new Array(0,1,2,3,4,5,6,7,8,9);
    var letters_upper = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
    var letters_lower = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
    var have_smybols = false;
    var have_letters_upper = false;
    var have_numbers = false;
    var have_letters_lower = false;
    for(var i = 0;i<password.length;i++){
        if(letters_lower.includes(password[i])){
            have_letters_lower = true;
        }
        if(symbols.includes(password[i].charCodeAt())){
            have_smybols = true;
        }
        if(letters_upper.includes(password[i])){
            have_letters_upper = true;
        }
        if(numbers.includes(Number(password[i]))){
            have_numbers = true;
        }
    }

    /*alert("Have Lower Letters: "+have_letters_lower);
    alert("Have Upper Letters: "+have_letters_upper);
    alert("Have Symbols Letters: "+have_smybols);
    alert("Have Numbers: "+have_numbers);*/
    if(have_letters_lower && have_letters_upper && have_smybols && have_numbers){
        return Array("Strong",password)
    }else{
        var rand1 = random(password.length)
        var ra = password[random(password.length)]
        password = password.replace(ra,ra.toUpperCase());
        password = password.replace(password[random(password.length)],String.fromCharCode(symbols[random(symbols.length)]));
        password = password.replace(password[rand1],random(numbers.length));

        //alert(new_password);
        //password = password.replace(password[random(password.length)],random(letters_upper.length));
        password = password.replace(password[random(password.length)],random(letters_lower.length));


        return Array("Weak",password)
    }


}

function main(){
    var pass = document.getElementById('password');
    var result = document.getElementById('re');
    if(verify_password(pass.value)[0] == "Weak"){
        result.innerHTML = "<label>Your Password Is: <span id='sp'>"+verify_password(pass.value)[0]+"</span><br>Use This One, Is Better For Your Security: <span id='spp'>"+verify_password(pass.value)[1]+"</span>";
        document.getElementById('sp').style.color = "red";
    }else{
        result.innerHTML = "Your Password Is: <span id='sp'>"+verify_password(pass.value)[0]+"</span>";
        document.getElementById('sp').style.color= "green";
    }

    result.style.color = "white";
}