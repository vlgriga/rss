class Sorter {
  constructor() {
    this.array = [];
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  userSort( a,b) {
     return a-b;
  }

  sort(indices) {
    var sArray = this.array.filter( (index,key) => indices.indexOf(key) !== -1 ).sort( this.userSort );
    
    for( var i=0 ; i < this.array.length  ; i++) {
      if(indices.indexOf(i) > -1 ) {
        this.array[i] = sArray.shift();
      }
    }
  }

  setComparator(compareFunction) {
    this.userSort = compareFunction;
  }
}

module.exports = Sorter;