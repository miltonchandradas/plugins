const cds = require("@sap/cds");

console.log("My plugin is loaded...");
cds.once("served", () => {});
