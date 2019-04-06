// ES6 Classes

const returnString =(string) => {
return `you send me string: ${string}`;

}

var exportVar = "Exported value";

export {returnString}
export {exportVar}

export default function add(x,y) {
return x + y;
}
//import default exported function no curly braces in import
import add from "math_functions";

// Note: Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const


class Book {

  constructor(author) {
    this._author = author;
  }
  // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

const book = new Book("annonymous");

console.log(book.writer);
book.writer = 'sudeep';

console.log( book.writer);



// ES6 - Understand the Differences Between import and require