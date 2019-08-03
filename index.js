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
    return `Currently serving ${firstperson}.`;
         }
}

// Current Line 

function currentLine(queue) {
  if (queue.length === 0) {
    return "The line is currently empty.";
  } else {
    var message = "The line is currently:";
    // 'i' will be the index of each person in the queue.  'i + 1' will be the actual position of a person in the queue.  Queue length will be the actual position of the final person in the queue.
    // If the queue length is 3, 'i' will increment and execute the for loop until it reaches 3.  On 3 it will not execute the loop.
    for (var i = 0; i != queue.length; i++) {
      if (i != queue.length - 1) {
      message = message + ` ${i + 1}. ${queue[i]},`
                                 } else {
      message = message + ` ${i + 1}. ${queue[i]}`
                                 }
    }
    return message;
  }
}