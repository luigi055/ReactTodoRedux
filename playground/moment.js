const moment = require('moment');

// UNIX Timestamp January 1st 1970 12:00am -> 0
// UNIX Timestamp January 1st 1970 12:01am -> -60

// Our first timestamp

const now = moment();
console.log('Current Timestamp in seconds passed since 1970', now.unix());

let timestamp = 1482298054;

// transform UNIX timestamp to moment time
const currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format());


setInterval(() => {
var today = moment().format('[Hello today is] dddd Do [of] MMM YYYY LTS');
  console.log(today);
}, 1000);