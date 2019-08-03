
function takeANumber(queue, newperson) {
  queue.push(newperson);
  return `Welcome, ${newperson}. You are number ${queue.length + 1} in line.`;
}

function nowServing(queue) {
  if (queue.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var firstperson = queue[0];
    queue.shift();
    return firstperson;
         }

}

function currentLine(queue) {
  if (queue.length === 0) {
    return "The line is currently empty.";
  } else {
    for (i = 0, i = queue.length, queue.length
    return `The line is currently: 1. 
  }
}