let { IPinfoWrapper } = require("node-ipinfo");

let ipinfo = new IPinfoWrapper("0f6aea2278a987");

ipinfo.lookupIp("1.1.1.1").then((response) => {
    console.log(response);
});

ipinfo.lookupASN("AS7922").then((response) => {
    console.log(response);
});
