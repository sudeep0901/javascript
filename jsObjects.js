//creating simple js objects
var human = {
    "name": "Neanderthals",
    "legs": 2,
    "hand": 2,
    "origin": ["Asia", "Africa"],
    5: "five",
    bool: true,
    testfunc: function () {
        console.log("I am function in js object");
    }
}
// adding a new property to existing objects
human.sex = "Male";
human.toDelete = true;
var propName = 'propName';
human[propName] = "new AProperty";
//delete property from object

alert(delete human["toDelete"]);
alert(delete human.toDelete);
console.log(human);


//Object look up
// Setup
function phoneticLookup(val) {
    var result = "";

    // Only change code below this line
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }

    result = lookup[val];

    // Only change code above this line
    return result;
}

// Change this value to test
phoneticLookup("charlie");


//checking existance of property in a object
var myObj = {
    name: "Sudeep",
    lastName: "Patel"
}

console.log("Checking Property in an object:" + myObj.hasOwnProperty("name"));
console.log("Checking Property in an object:" + myObj.hasOwnProperty("namee"));
console.log(this);


//handling complex objects in js

var ourMusic = [
    {
        "artist": "Daft Punk",
        "title": "Homework",
        "release_year": 1997,
        "formats": [
            "CD",
            "Cassette",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Sudeep Patel",
        "title": "Programming",
        "release_year": 1984,
        "formats": [
            "NEWCD",
            "NEWCassette",
            "NEWLP"
        ],
        "gold": true
    }
];

console.log(ourMusic[0].formats);
console.log(ourMusic[1]);

//access all properties of an object

for (var key in ourMusic[0]) {
    console.log("Key:" + key + ",Value:" + ourMusic[0][key] + ", Type:" + typeof ourMusic[0][key]);
    if (typeof ourMusic[0][key] == 'object') {
        var tmpObj = ourMusic[0][key];
        if (isArray(tmpObj))
            console.log("element is array");

        if (isArray(ourMusic))
            console.log("element is  object");

        for (var objKey in tmpObj) {
            console.log("Inerobjects Keys and values:" + objKey + tmpObj[objKey]);

        }
    }
}

function isArray(what) {
    return Object.prototype.toString.call(what) === '[object Array]';
}



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
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};



// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    if (value === ' ') {
        delete collection[id][prop];
        return collection;
    }

    if (prop !== 'tracks') {
        collection[id][prop] = value;
        return collection;
    }
    if (collection[id].hasOwnProperty === prop) {
        console.log("trakcs do exists");
        collection[id][prop].push() = value;
    }
    else {
        console.log("trakcs do not exists");
        collection[id].tracks = [];

        collection[id].tracks.push(value);

    }


    return collection;
}

// Alter values below to test your code
console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(5439, "tracks", "track1"));


// while loop
var loopArry = [];
var i = 0;
while (i < 10) {
    loopArry.push(i);
    i++;
}
console.log(loopArry.sort());
console.log(loopArry.reverse());
console.log(loopArry.sort());





//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
    // Only change code below this line
    for (var key in contacts) {
        console.log("Key in Contacts:" + key);
        console.log(contacts[key].firstName);
        if (contacts[key].firstName === name) {
            if (contacts[key].hasOwnProperty(prop)) {
                console.log(contacts[key][prop]);
                return contacts[key][prop];
            }
            else {
                console.log("No such property");
                return "No such property";
            }
        }
    }
    return "No such contact";
    // Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likesss");


//generate Random numbers


