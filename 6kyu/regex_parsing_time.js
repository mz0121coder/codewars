/*
Implement a class/function, which should parse time expressed as HH:MM:SS, or null/nil/None otherwise.

Any extra characters, or minutes/seconds higher than 59 make the input invalid, and so should return null/nil/None.
*/

String.prototype.toSeconds=function(){
  const str = this.toString();
  if(/^\d\d:\d\d:\d\d$/.test(str)) {
    const [hh, mm, ss] = str.split(':').map(el => parseInt(el));
    if(hh > 99 || mm > 59 || ss > 59) return null;
    return ((hh * 3600) + (mm * 60) + ss);
  }
  return null;
}

console.log("00:00:00".toSeconds())//, 0);
console.log("01:02:03".toSeconds())//, 3723);
console.log("01:02:60".toSeconds())//, null);
console.log("01:60:03".toSeconds())//, null);
console.log("99:59:59".toSeconds())//, 359999);
console.log("0:00:00".toSeconds())//, null);
console.log("00:0:00".toSeconds())//, null);
console.log("00:00:0".toSeconds())//, null);
console.log("00:00:00\n".toSeconds())//, null);
console.log("\n00:00:00".toSeconds())//, null);
console.log("100:59:59".toSeconds())//, null);
console.log("09:059:59".toSeconds())//, null);
console.log("09:159:59".toSeconds())//, null);
console.log("09:59:059".toSeconds())//, null);
console.log("09:59:159".toSeconds())//, null);