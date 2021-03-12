

// PAPERCRAFT EXPRESSIONS


// wiggle(freq,amp)
// Frequency (freq) - How often do you want your value (number) to move per second.
// Amplitude (amp) - How much your value is allowed to change above or below the starting value.


// STOP MOTION 

// Time Remap - 5 fps
posterizeTime(5); 
value 

// Position Wiggle - used on individual elements of objects which move (glasses, mouth, arm, curtains, steam) (not to be used on whole people, cars)
wiggle(4,1.4) 

// Rotation Wiggle - mostly used for gentle head movement
wiggle(1,1.4) 


------------------------------------------------------------------------------------------------------------------------------------------------------------------


// BLINKING CONTROL 


// EYES OPEN

// Precomp Eyes into Comp called 'EYES OPEN'

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


 
// EYES CLOSED 

// Precomp Closed Eyes into Comp called 'EYES CLOSED'

t = thisComp.layer("EYES OPEN").transform.opacity;  
linear(t,0,100,100,0)  


------------------------------------------------------------------------------------------------------------------------------------------------------------------


// SMILE 

// Precomp Smile into Comp called 'SMILE'

minOnTime = 2.75;  
maxOnTime = 4;  
minOffTime = 2.5;  
maxOffTime = 3;  
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
result  


// SIDE SMILE

// Precomp Side Smile into Comp called 'SIDE SMILE'

t = thisComp.layer("SMILE").transform.opacity;  
linear(t,0,100,100,0)  


------------------------------------------------------------------------------------------------------------------------------------------------------------------


// OFFSETTING START FRAME

// Custom posterizeTime(5)
// Use .valueAtTime(newT) on your desired property
// and set your new frame Rate and your Offset value
var newFramerate = 5; //set your new Framerate in frames per second here
var frameOffset = 2; //set your offset in frame here

var frameRate = 1/thisComp.frameDuration;
var t = (time*frameRate);
var newT = Math.floor((t-frameOffset)/(frameRate/newFramerate));
newT = newT*(frameRate/newFramerate) + frameOffset;
newT /= frameRate;

transform.position.valueAtTime(newT);
timeRemap.valueAtTime(newT);



