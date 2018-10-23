function SendYES(){
    $.ajax({
        method:'POST',
        url:"/ArduinoStimulation",
        data:{
            'decision':'YES'
        },
        success: function(response){

        }
    });
}

function SendNO(){
    $.ajax({
        method:'POST',
        url:"/ArduinoStimulation",
        data:{
            'decision':'NO'
        },
        success: function(response){
            
        }
    });
}

function ActivateArduino(x){
    var arr = ["BET", "DECISION", ""];
    console.log(arr[x]);
    $.ajax({
        method:'POST',
        url:"/kek",
        data:{
            'ActivateArduino':arr[x]
        },
        success: function(response){
            console.log(response);
        }
    });
}
function Test_Distribute1Card(){
    $.ajax({
        method:'POST',
        url:"/kek",
        data:{
        },
        success: function(response){
            console.log(response);
        }
    });
}




(function loopthis(i){
            setTimeout(function(){
                
                var admin = new XMLHttpRequest();
                
                admin.open('GET', 'http://192.168.163.193:5000/adminfeeds', true);
                
                admin.onload = function() {
                    var data = JSON.parse(this.responseText);
                    $("#CardStationPosition").html(data.CardStationPosition);
                    $("#Jumbotron_title").html(data.Jumbotron_title);
                    $("#Jumbotron_text1").html(data.Jumbotron_text1);
                    $("#Jumbotron_text2").html(data.Jumbotron_text2);
                    $("#ArmPosition").html(data.ArmPosition);
                    $("#ArmCard").html(data.ArmCard);
                    $("#ArmCardValue").html(data.ArmCardValue);
                    $("#Player1Position").html(data.Player1Position);
                    $("#Player1Card").html(data.Player1Card);
                    $("#Player1CardValue").html(data.Player1CardValue);
                    $("#Player1Money").html(data.Player1Money);
                    $("#Player1Bet").html(data.Player1Bet);
                    $("#Player2Position").html(data.Player2Position);
                    $("#Player2Card").html(data.Player2Card);
                    $("#Player2CardValue").html(data.Player2CardValue);
                    $("#Player2Money").html(data.Player2Money);
                    $("#Player2Bet").html(data.Player2Bet);
                    $("#Player3Position").html(data.Player3Position);
                    $("#Player3Card").html(data.Player3Card);
                    $("#Player3CardValue").html(data.Player3CardValue);
                    $("#Player3Money").html(data.Player3Money);
                    $("#Player3Bet").html(data.Player3Bet);
                    

                };

                admin.send();


                if (--i){
                    loopthis(i); 
                }
            }, 1000);
        })(500000000);  
