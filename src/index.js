/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = 
function getLoveTrianglesCount(preferences = []) {
  var counter = 0;

  preferences.map( (index,key) => {
    preferences.map( (index1,key1) => {
      if( index === key1 + 1 && index !== index1) {
        preferences.map( (index2, key2) => {
          if( index1 === key2 + 1 && index2 === key + 1 && index1 !== index2 ) {
            preferences[key] = 0;
            preferences[key1] = 0;
            preferences[key2] = 0;
            counter++;
          }
        })
      }
    })
  });  

  return counter;
};



