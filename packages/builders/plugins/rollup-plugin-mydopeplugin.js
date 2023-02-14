function myDopePlugin() {
  return {
    name:"my-dope-plugin",
    transform(source, id) {
      if (id.slice(-3) !== ".js") {
        return null;
      }

      return `
      export function greetingFromDope() {
        console.log('hello from myDopePlugin:');
      }
      ` + source;
    }
  }
}

exports.myDopePlugin = myDopePlugin;