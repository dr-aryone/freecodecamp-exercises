// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [ 
      "Let It Rock", 
      "You Give Love a Bad Name" 
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [ 
      "1999", 
      "Little Red Corvette" 
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
if(prop !=="tracks"&&value!==""){
  collection[id][prop]=value;
}else if(prop ==="tracks"&& !collection[id].hasOwnProperty("tracks")){
  collection[id][prop]=[value]; //Is this line creating a new array with new value?? :create an empty array before adding the new value to the album's corresponding property.???
}else if (prop ==="tracks"&& value !==""){
  collection[id][prop].push(value);
}else if (value===""){
  delete collection[id][prop];
}



 return collection;


  }

