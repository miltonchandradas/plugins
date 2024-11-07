const cds = require("@sap/cds");

cds.add?.register?.(
  "myplugin",
  class extends cds.add.Plugin {
    async run() {
      console.log("More stuff...");
    }
  }
);

console.log("My plugin is loaded...");
cds.once("served", () => {
  for (const srv of cds.services) {
    for (const entity of srv.entities) {
      for (const element in entity.elements) {
        if (Object.hasOwnProperty.call(entity.elements, element)) {
          const field = entity.elements[element];

          if (field["@myplugin"]) {
            console.log(field.name);

            srv.after("each", entity, (item) => {
              item[field.name] += "👍 👍 👍";
            });
          }
        }
      }
    }
  }
});
