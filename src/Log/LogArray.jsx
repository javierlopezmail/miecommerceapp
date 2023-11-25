export function logArray(array) {
    array.forEach((obj, index) => {
      console.log(`Object ${index + 1}:`);
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          console.log(`  ${key}:`, obj[key]);
        }
      }
    });
  }