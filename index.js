// Deli Counter Lab

// Take A Number

function takeANumber(queue, newperson) {
  queue.push(newperson);
  return `Welcome, ${newperson}. You are number ${queue.length} in line.`;
}

// Now Serving

function nowServing(queue) {
  if (queue.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var firstperson = queue[0];
    queue.shift();
    return firstperson;
         }
}

// Current Line 

function currentLine(queue) {
  if (queue.length === 0) {
    return "The line is currently empty.";
  } else {
    var message = "The line is currently: ";
    for (i = 0, i = queue.length, i++) {
      message = message + `${queue[i]},`;
    }
  }
}