// 20_Apache Log

/**
 * Given a log file, return IP address(es) which accesses the site most often.
 */

const findTopIPAddress = (arr) => {
  const storage = arr.reduce((preVal, currVal) => {
    const ip = currVal.split("-")[0].trim();
    preVal[ip] = (preVal[ip] || 0) + 1;
    return preVal;
  }, new Map());

  var mapAsc = Object.entries(storage).sort((a, b) => b[1] - a[1]);
  return mapAsc.map((item) => item[0]);
};

const str1 =
  "10.0.0.1 - frank [10/Oct/2000:13:55:36" +
  ' -0700] "GET /apache_pb.gif HTTP/1.0" 200 2326 ' +
  '"http://www.example.com/start.html" "Mozilla/4.08 ' +
  '[en] (Win98; I ;Nav)"';

const str2 =
  "10.0.2.1- frank [10/Oct/2000:13:55" +
  ':36 -0700] "GET /apache_pb.gif HTTP/1.0" 200 2326 ' +
  '"http://www.example.com/start.html" "Mozilla/4.08 ' +
  '[en] (Win98; I ;Nav)"';

const str3 =
  "10.0.2.1 - frank [10/Oct/2000:13:55" +
  ':36 -0700] "GET /apache_pb.gif HTTP/1.0" 200 2326 ' +
  '"http://www.example.com/start.html" "Mozilla/4.08 ' +
  '[en] (Win98; I ;Nav)"';

const arr = [str1, str2, str3];

console.log(findTopIPAddress(arr));
