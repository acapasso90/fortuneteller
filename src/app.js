function getFortune() { 
    let toldFortune = document.querySelector(".toldFortune");
    let fortune = Math.random();
    console.log(fortune);
    if(fortune > 0 && fortune < 0.025){toldFortune.innerHTML="You will drink 8 glasses of water today.";}
    else if (fortune > 0.025 && fortune < 0.05){toldFortune.innerHTML="You will eat an exceptionally good meal this week.";}
    else if (fortune > 0.05 && fortune < 0.075){toldFortune.innerHTML="Red is your lucky color for today, wear it!";}
    else if (fortune > 0.075 && fortune < 0.1){toldFortune.innerHTML="You've been working hard, rest a bit";}
    else if (fortune > 0.1 && fortune < 0.125){toldFortune.innerHTML="Black is your lucky color for today, wear it!";}
    else if (fortune > 0.125 && fortune < 0.15){toldFortune.innerHTML="Green is your lucky color for today, wear it!";}
    else if (fortune > 0.15 && fortune < .0175){toldFortune.innerHTML="Purple is your lucky color for today, wear it!";}
    else if (fortune > 0.175 && fortune < 0.2){toldFortune.innerHTML="Blue is your lucky color for today, wear it!";}
    else if (fortune > 0.2 && fortune < 0.225){toldFortune.innerHTML="Challenge yourself in a new way today";}
    else if (fortune > 0.25 && fortune < 0.275){toldFortune.innerHTML="Try something new today!";}
    else if (fortune > 0.275 && fortune < 0.3){toldFortune.innerHTML="Spend more time outside this week.";}
    else{toldFortune.innerHTML="You will find interest in a new hobby";}
    toldFortune.classList.add("toldFortune");


}



let crystal = document.querySelector(".crystal");
crystal.addEventListener("click", getFortune);