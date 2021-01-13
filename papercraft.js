// Time Remap - 5 fps
posterizeTime(5); 
value 

// Position Wiggle - used on all objects which move (people, curtains, cats etc...)
wiggle(4,2.5) 

// Rotation Wiggle - mostly used for gentle head movement
wiggle(0.9,4) 


// Blinking Control

// EYES OPEN

transform.opacity

minOnTime = .25;  

maxOnTime = 3.5;  

minOffTime = .25;  

maxOffTime = .3;  

i = 0;  

tEnd = 0;  

seedRandom(index,true);  

preRun = random(maxOnTime);  

while (time + preRun >= tEnd){  

i++;  

if(i%2){  

tEnd += random(minOnTime,maxOnTime);  

result = 100;  

}else{  

tEnd += random(minOffTime,maxOffTime);  

result = 0;  

}  

}  
result;
