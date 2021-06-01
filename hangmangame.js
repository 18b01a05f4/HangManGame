var holder = document.getElementById("buttonsHolder");
var liv = 5;
window.onload = function () { 
    var p, letter, button;
    for ( var i = 65; i <= 90; i++ ) {
        if ( i == 65 || i == 84 ) {
            p = document.createElement( "p" );
        }
        letter = String.fromCharCode( i );
        button = document.createElement( "button" );
        button.innerHTML = letter;
        button.style.marginLeft = '5px';
        button.style.width = '38px';
        button.style.height = '38px';
        button.style.fontSize = '20px';
        button.style.color = 'indigo';
        button.style.borderColor = 'lightskyblue';
        p.appendChild( button );
        if ( i == 78 || i == 83 || i == 90 ) {
            holder.appendChild( p );
        }
        button.onclick = function () { check(this); };
    }
    var clues = [ 'The first computer programmer','The longest river on Earth','Birth place of Lord Buddha',
            'Netherlands capital','Flying Sikh of India','the first Indian woman to win the Miss World Title',
            '2013 FA Cup runners up',"Land of Rising Sun",];

    var ans = ['ADALOVELACE','NILE','LUMBINI','AMSTERDAM','MILKHASINGH','REITAFARIA','MANCHESTER','JAPAN'];

    document.getElementById('lives').innerHTML = `You have ${liv} lives`;
    var word = clues[Math.floor(Math.random()*7)];
    var h = document.getElementById('hint');
    var sn = this.document.createElement('p');
    sn.innerHTML = word;
    h.appendChild(sn);
    var idx = clues.indexOf(word);
    // console.log(idx);
    var answer = ans[idx];
    console.log(answer);
    var usransr = [];
    var space = document.getElementById("blanks");
    var ar = [];
    for(let i = 0;i < answer.length;i++) {
        ar[i] = document.createElement( "span" );
        ar[i].style.color='white';
        ar[i].style.fontSize = '70px';
        ar[i].innerHTML = '_';
        space.appendChild(ar[i]);
        var span = document.createElement("span");
        span.innerHTML = " ";
        space.appendChild(span);
    }
    var count = 0;
    var message = document.getElementById('msg');
    function check(letter) {
        var guess = letter.innerHTML;
        console.log(guess);
        for(let i = 0;i < answer.length;i++) {
            if(answer[i] == guess) {
                ar[i].innerHTML = guess;
                count++;
            }
        }
        if(count === answer.length) {
            var win = document.getElementById('msg');
            win.innerHTML = "You Win!!!"           
        }
        else {
            var j = answer.indexOf(guess);
            if(j == -1) liv--;
            letter.disabled = true;
            if(liv == 0) {
                var win = document.getElementById('msg');
                win.innerHTML = "Game Over!"
            }
        }
        document.getElementById('lives').innerHTML = `You have ${liv} lives`;
    }
    document.getElementById('restart').onclick = function() {
        location.reload();
    }
}


