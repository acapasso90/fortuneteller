function getFortune() { 
    let toldFortune = document.querySelector(".toldFortune");
    let fortune = Math.random();
    console.log(fortune);
    if(fortune > 0 && fortune < 0.025){toldFortune.innerHTML=`"A feeling of anxiety is the <br />  sure and certain evidence <br /> that you should do this." <br /> Clive Barker`;}
    else if (fortune > 0.025 && fortune < 0.05){toldFortune.innerHTML=`Distractions will look like <br /> opportunities when you don't <br /> know where you are going.`;}
    else if (fortune > 0.05 && fortune < 0.075){toldFortune.innerHTML=`What's good for you brings out the <br /> best in you. What's bad for you doesn't.`;}
    else if (fortune > 0.075 && fortune < 0.1){toldFortune.innerHTML=`You've been working <br /> hard, rest a bit`;}
    else if (fortune > 0.1 && fortune < 0.125){toldFortune.innerHTML=`Somewhere beneath all those <br /> distracting details is the <br /> best version of you`;}
    else if (fortune > 0.125 && fortune < 0.15){toldFortune.innerHTML=`Don't make a wish. <br /> Make a decision`;}
    else if (fortune > 0.15 && fortune < .0175){toldFortune.innerHTML=`Free spirits don't ask <br /> for permission`;}
    else if (fortune > 0.175 && fortune < 0.2){toldFortune.innerHTML=`Go after what you want or <br /> be happy with what you get`;}
    else if (fortune > 0.2 && fortune < 0.225){toldFortune.innerHTML=`You're intoxicating when <br /> you do what you love`;}
    else if (fortune > 0.25 && fortune < 0.275){toldFortune.innerHTML=`Identify with everything. <br /> Align with nothing`;}
    else if (fortune > 0.275 && fortune < 0.3){toldFortune.innerHTML="Spend more time outside this week.";}
    else if (fortune > 0.3 && fortune < 0.325){toldFortune.innerHTML=`Take time to call <br /> a loved one this week`;}
    else if (fortune > 0.325 && fortune < 0.35){toldFortune.innerHTML=`Fear will always be a thing. <br /> But don't let it get in your way`;}
    else if (fortune > 0.35 && fortune < 0.40){toldFortune.innerHTML=`Listen to that embarassing <br /> song. You know the one`;}
    else if (fortune > 0.4 && fortune < 0.425){toldFortune.innerHTML=`Read something by a new author`;}
    else if (fortune > 0.425 && fortune <0.45){toldFortune.innerHTML=`Listen to a new band today`;}
    else if (fortune > 0.45 && fortune < 0.475){toldFortune.innerHTML=`Everything that is <br /> was first a dream.`;}
    else if (fortune > 0.475 && fortune < 0.5){toldFortune.innerHTML=`Enjoy some blanket time on the couch`;}
    else if (fortune > 0.5 && fortune < 0.525){toldFortune.innerHTML=`Learn 5 new words this week`;}
    else if (fortune > 0.525 && fortune < 0.55){toldFortune.innerHTML=`Try something new from <br /> your favorite restaurant`;}
    else if (fortune > 0.55 && fortune < 0.575){toldFortune.innerHTML=`Make plans with a friend <br /> you haven't seen in a while`;}
    else if (fortune > 0.575 && fortune < 0.6){toldFortune.innerHTML=`The greatest risk is not taking one`;}
    else if (fortune > 0.6 && fortune < 0.625){toldFortune.innerHTML=`Distance yourself from the vain`;}
    else if (fortune > 0.625 && fortune < 0.65){toldFortune.innerHTML=`Take out a book from the library`;}
    else if (fortune > 0.65 && fortune < 0.675 ){toldFortune.innerHTML=`Do something that makes you laugh`;}
    else if (fortune > 0.675 && fortune < 0.7){toldFortune.innerHTML=`Take steps to learn a new hobby`;}
    else if (fortune > 0.7 && fortune < 0.725){toldFortune.innerHTML=`Wake up, get up, get out there!`;}
    else if (fortune > 0.725 && fortune < 0.75){toldFortune.innerHTML=`Every flower blooms in its own time`;}
    else if (fortune > 0.75 && fortune < 0.775){toldFortune.innerHTML=`That thing you've been avoiding? <br /> Time to do it!`;}
    else if (fortune > 0.775 && fortune < 0.8){toldFortune.innerHTML=`"You're braveer than you believe, <br /> and stronger than 
    you seem, <br /> and smarter than you think." <br /> Christopher Robin`;}
    else if (fortune > 0.8 && fortune < 0.825){toldFortune.innerHTML=`Try a new excercise this week`;}
    else if (fortune > 0.825 && fortune < 0.85){toldFortune.innerHTML=`Enter a contest of skill`;}
    else if (fortune > 0.85 && fortune < 0.875){toldFortune.innerHTML=`Learn more about your heritage`;}
    else if (fortune > 0.875 && fortune < 0.9){toldFortune.innerHTML=`Nurture your innerchild`;}
    else if (fortune > 0.9 && fortune < 0.925){toldFortune.innerHTML=`Watch a Studio Ghibli movie`;}
    else if (fortune > 0.925 && fortune < 0.95){toldFortune.innerHTML=`It takes courage to admit fault`;}
    else if (fortune > 0.95 && fortune < 0.975){toldFortune.innerHTML=`Listen to everyone. <br /> Ideas come from everywhere`;}
    else{toldFortune.innerHTML="Courtesy is contagious";}
    toldFortune.classList.add("toldFortune");


}

let crystal = document.querySelector(".crystal");
crystal.addEventListener("click", getFortune, { once: true });