
shuffleNumbers = () => {
    $("#errMsg").empty();
    var num=0;n=0;
    var numbers=[];
    for(let i=0;i<9;i++){
        num= n+i;
        num= $("input[name=num"+i+"]").val();
        if(num==''){
          $("#errMsg").html('<h6>please fill all the boxes</h6>')
            break;
        } else {
           numbers.push(num);
        } 
    }
    var arraynum = shuffle(numbers)
    for(let i=0;i<arraynum.length;i++){
        $("input[name=num"+i+"]").val(arraynum[i])
    }    
}

sortNumbers = () => {
    $("#errMsg").empty();
    var num=0;n=0;
    var numbers=[];
    for(let i=0;i<9;i++){
         num= n+i;
         num= $("input[name=num"+i+"]").val();
        if(num==''){
            $("#errMsg").html('<h6>please fill all the boxes</h6>')
            break;
        } else {
           numbers.push(num);
        }
    }
    numbers.sort();
    numbers.sort(function(a, b){
        return a - b;
    });
    for(let i=0;i<numbers.length;i++){
        $("input[name=num"+i+"]").val(numbers[i])
    }   
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}