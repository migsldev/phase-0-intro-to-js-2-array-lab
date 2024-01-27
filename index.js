//cats
const cats = ["Milo", "Otis", "Garfield"];

// 1. Append 'Ralph'
function destructivelyAppendCat(catName) {
    cats.push(catName);
}

destructivelyAppendCat("Ralph");

// 2. Prepend 'Bob'
function destructivelyPrependCat(catName) {
    cats.unshift(catName);
}

destructivelyPrependCat("Bob");

// 3. Remove last cat
function destructivelyRemoveLastCat() {
    cats.pop();
}

destructivelyRemoveLastCat();

// 4. Remove first cat
function destructivelyRemoveFirstCat() {
    cats.shift();
}

destructivelyRemoveFirstCat();

// 5. Append cat non-destructively
function appendCat(catName) {
    return [...cats, catName];
}

// 6. Prepend cat non-destructively
function prependCat(catName) {
    return [catName, ...cats];
}

// 7. removeLastCat()
function removeLastCat() {
    return cats.slice(0, cats.length - 1);

}
// 8. remove first cat non-destructive
function removeFirstCat() {
    return cats.slice(1);
}

console.log(removeFirstCat());
