doc type html
html lang en
script
header=document create.element(header)
header.style.backgroundcolor=#4caf50
header.style.color=’white’
header.style.padding=’10px’
header.style.textalign=’center’
header.style.text.fontsize=’24px’
header.textcontent=’welcome to covid strings3 second round’
document appendchild(header)
<header.html>
heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=second round overview
heading2=matchups
heading3=second round questions
heading4=advancing rounds
subheading1=team stealing
subheading2=result for matchup1
subheading3=result for matchup2
<header.html>
second round overview
is an overview of the second round of the covid strings contest
html
head
utf-eight
viewport content=width=device-width
intial-scale=one
title covid strings3 second round bracket
div id bracket class bracket div
script src bracket .js
link rel = stylesheet href =styles.css
head
body
bracket-container{}
matchup
solid zero;
padding 
text align center 
filename=covid strings3 second round.js 
highest remaining seed =(greatest remaining num value in covid strings list)
lowest remaining seed = (lowest remaining num value in covid strings list)
intermediate seed1=(first middle remaining value in covid strings list)
intermediate seed2=(second middle remaining value in covid strings list)
createround
round = document.createelement(div);
round.classlist.add(covid strings3 first round);
document addeventlistener(domcontentloaded)
<Header.Html>
Matchups
contains 4 teams which equals 2 matchups 
bracket=document getelementbyid(bracket)
matchup=document.createelement(matchup)
matchup1= (intermediate seed2 versus intermediate seed1)
matchup.covid strings seed list.add(matchup)
bracket.appendchild(matchup)
matchup=document.createelement(matchup)
matchup2=(lowest remaining seed versus highest remaining seed )
matchup.covid strings seed list.add(matchup)
bracket.appendchild(matchup)
java util.scanner
java.util
second round questions=questions[18-27]
collections.shuffle(arrays.aslist(questions)
question18
question19
question20
question21
question22
question23 
question24
question25
question26
question27 
private string getblanks(int numberofblanks)
char[] chars = char[numberofblanks]
arrays.fill chars 
return string chars 
bracket.AddEventListener((Event) => 
MyClass=(Non-Concatenated)
If Category==Math Problem:
Prompt
Log
Else:
Select From Multiple Choice
If Category == MultipleChoice:
Select Answer
Else:
Prompt
Log
MyClass=New MyClass(Concatenated) 
Return Category
If Category==Math Problem:
Prompt
Log
Else:
Select From Multiple Choice
If Category == MultipleChoice:
Select Answer
Else:
Prompt
Log
Import Syntax 
Team1=Lower Ranked Seed
Team2=The Higher Seeded Opponent
Points: 10 Points Or 20 Points
<Subheading.Html>
Team Stealing
Steal Points(StealingTeam,VictimTeam,PointsToSteal)
If(VictimTeam.Points>=PointToSteal)
VictimTeam.Points-=PointToSteal;
StealingTeamPoints+=PointsToSteal
Console.Log([StealingTeam.Name} Stole Points From {Victim Team Name}!)
Else:
console.log({victimteam.name} doesnt have enough points to steal)
if teams final  answer==incorrect:
opposing team steals
else:
change covid strings matchup score
<header.html>
advancing rounds 
contains the criteria for teams in the second round to advance to the championship 
advancingteams=slice(currentteams)
<subheading.html>
result for matchup1
the code for how to determine the end result of matchup1 of covid strings 
result=declarewinner(matchup1)
if intermediateseed1score>=fourty:
console.log(intermediate seed1 wins)
result=declarewinner(matchup2)
if highestremainingseedscore>=fourty:
console.log(highest remaining seed wins)
else:
console.log(lowest remaining seed wins)
return filename 
