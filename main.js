//დავალება 1

function replaceValue(str, valueToReplace, valueToReplaceWith) {
  let result = "";
  let i = 0;

  while (i < str.length) {
    if (str.substring(i, i + valueToReplace.length) === valueToReplace) {
      result += valueToReplaceWith;
      i += valueToReplace.length;
    } else {
      result += str[i];
      i++;
    }
  }

  return result;
}

console.log(replaceValue("I love cats, but Cats are cute.", "cats", "dogs"));

//დავალება 2

function capitalizeWords(sentence) {
  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length > 0) {
      words[i] = word[0].toUpperCase() + word.slice(1);
    }
  }

  return words.join(" ");
}

console.log(capitalizeWords("i love programming in javascript"));

//დავალება 3

function sortUsersByAge(usersAge) {
  return usersAge.sort(function (a, b) {
    return a.age - b.age;
  });
}

let usersAge = [
  { name: "Gia", age: 27 },
  { name: "Keti", age: 22 },
  { name: "Future", age: 30 },
];

console.log(sortUsersByAge(usersAge));

//დავალება 4

function sortUsersByAge(users) {
  return users.sort(function (a, b) {
    return a.age - b.age;
  });
}

let users = [
  { name: "Lasha", age: 30 },
  { name: "Saba", age: 20 },
];

console.log(sortUsersByAge(users));
