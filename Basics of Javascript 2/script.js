// 23. Strict Mode
"use strict";

let isAvailable = true;
let inMeeting = true;

if (inMeeting) isAvailable = false;
if (isAvailable) console.log("Person is available");
else console.log("Person is in meeting");

// const public = "Canada";
// const private = "room 15";
// const switch = "open";
