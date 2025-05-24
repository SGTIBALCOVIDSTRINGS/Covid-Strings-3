doc. type.html
html. lang.en
script
header=document create.element(header)
header.style.backgroundcolor=#4caf50
header.style.color=’white’
header.style.padding=’10px’
header.style.textalign=’center’
header.style.text.fontsize=’24px’
header.textcontent=’welcome to covid strings3 first round’
document appendchild(header)
<header.html>
heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=first round overview
heading2=matchups
heading3=first round questions
heading4=advancing rounds
subheading1=team stealing
subheading2=result for matchup1
subheading3=result for matchup2
subheading4=result for matchup3
subheading5=result for matchup4
<header.html>
first round overview
an overview of the first round of covid strings3  includes seeding 
html 
head
utf-eight
viewport content=width=device-width
intial-scale=one
title covid strings3 first round bracket
div id bracket class bracket div
script src bracket.js
link rel = stylesheet href =styles.css
head
body
bracket-container{}
matchup
solid zero;
padding 
text align center 
filename=covidstrings3 first round .js
 covid strings 3 team list=[black night riders,purple brave hearts pink covid disease fighters turquoise waves violet relivers teal terminators yellow moxie orange rna messengers]
createround
round = document.createelement(div);
round.classlist.add(covid strings3 first round);
return round 
document addeventlistener(domcontentloaded)
bracket=document getelementbyid(bracket)
<header.html>
matchups 
for first round there are 8 teams which equals 4 matchups 
matchup1=(teal versus pink)
matchup2=(violet versus turquoise)
matchup3=(yellow versus purple)
matchup4=(orange versus black)
java util.scanner
java.util
first roundquestions=questions[1-17]
collections.shuffle(arrays.aslist(questions)
question1
question2 
question3
question4
question5 
question6
question7
question8
question9 
question10
question11
question12
question13
question14 
question15 
question16 
question17 
collections.shuffle(arrays.aslist(questions)
team1=lower ranked seed
team2=the higher seeded opponent
points: 10 points or 20 points
<subheading.html>
team stealing
steal points(stealingteam,victimteam,pointstosteal)
if(victimteam.points>=pointtosteal)
victimteam.points-=pointtosteal;
stealingteampoints+=pointstosteal
console.log([stealingteam.name} stole points from {victim team name}!)
else:
console.log({victimteam.name} doesnt have enough points to steal)
if teams final answer==incorrect:
opposing team steals
else:
change covid strings matchup score                                                                                                                                                                                            
private string getblanks(int numberofblanks)
char[] chars = char[numberofblanks]
addeventlistener(clickevent)
if (event.target.covid strings seed list.contains(team)) 
event target covid strings toggle.matchup
else:
add matchup
<header.html>
advancing rounds
contains criteria required for a team to advance to the second round 
advancingteams=slice(currentteams)
<subheading.html>
result for matchup1 
the code for how to determine the end result of matchup1 of covid strings 
result = declarewinner(matchup1);
if pink score>=forty:
console.log(pink covid disease fighters win)
else:
remain
if teal score>=forty:
console.log(teal terminators win)
else:
remain
<subheading.html>
result for matchup2 
the code for how to determine the end result of matchup2 of covid strings 
result = declarewinner(matchup2);
if turquoise score>=forty:
console.log(turquoise waves win)
else:
remain
if violet score>=forty:
console.log(violet relivers win)
else:
remain
<subheading.html>
result for matchup3 
the code for how to determine the end result of matchup3 of covid strings 
result=declarewinner(matchup3);
if purple score >=forty:
console.log(purple brave hearts win)
else:
remain
if yellow score>=forty:
console.log(yellow moxie wins)
else:
remain
<subheading.html>
result for matchup4 
the code for how to determine the end result of matchup4 of covid strings 
result = declarewinner(matchup4);
if black score>=forty:
console.log(black night riders win)
else:
remain
if orange score>=forty:
console.log(orange rna messengers win)
else:
remain
return filename               
