var fs = require("fs");
var lodash = require("lodash");

var inputJson = require("./ecommerce_data.json");

var stream = fs.createWriteStream("output_data.json");
stream.on("finish", function () {
  console.log("writing completed");
});

stream.once("open", function (fd) {
  lodash.each(inputJson, function (record) {
    var idx = { index: { _id: record.uniq_id } };

    stream.write(JSON.stringify(idx) + "\n");
    stream.write(JSON.stringify(record) + "\n");
  });

  stream.end();
});
