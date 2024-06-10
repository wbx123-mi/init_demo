const QRcode = require("qrcode");

QRcode.toString("wbx太牛逼了", { type: "terminal" }, (err, url) => {
    console.log(url)
});

console.log(123);
