// function generateRandomNumbers(start, end, count) {
//   const nums = new Set();
//   while (nums.size < count) {
//     nums.add(Math.floor(Math.random() * (end - start + 1)) + start);
//   }
//   return Array.from(nums);
// }


// function isTicketExists(tickets, newTicket) {
//   for (let i = 0; i < tickets.length; i++) {
//     if (JSON.stringify(tickets[i].ticket) === JSON.stringify(newTicket)) {
//       return true;
//     }
//   }
//   return false;
// }
  
//   function generateHousieTickets() {
//     let tickets = [];
//     for (let i = 1; i <= 10; i++) {
//       let name = "Tk" + i;
//        let ticket = [];
//       // ticket.push(...generateRandomNumbers(1, 18, 5));
//       // ticket.push(...generateRandomNumbers(19, 36, 5));
//       // ticket.push(...generateRandomNumbers(37, 54, 5));
//       // ticket.push(...generateRandomNumbers(55, 72, 5));
//       // ticket.push(...generateRandomNumbers(73, 90, 5));
//        while (isTicketExists(tickets, ticket)) {
//         ticket = [];
//         ticket.push(...generateRandomNumbers(1, 18, 5));
//         ticket.push(...generateRandomNumbers(19, 36, 5));
//         ticket.push(...generateRandomNumbers(37, 54, 5));
//         ticket.push(...generateRandomNumbers(55, 72, 5));
//         ticket.push(...generateRandomNumbers(73, 90, 5));
//       }
//       tickets.push({ ticket: ticket, ticketId: name });
//     }
//     return tickets;
//   }
//   let housieTickets = generateHousieTickets();
//   console.log(housieTickets);
  











  



//   // function generateRandomNumbers(start, end, count) {
// //     let nums = new Set();
// //     while (nums.size < count) {
// //       nums.add(Math.floor(Math.random() * (end - start + 1)) + start);
// //     }
// //     return Array.from(nums);
// //   }
// //   function isTicketExists(tickets, newTicket) {
// //     return tickets.some(ticket => JSON.stringify(ticket.ticket) === JSON.stringify(newTicket));
// //   }
// // Check whether a given ticket object already exists in an array of ticket objects
// // function isTicketExists(tickets, newTicket) {
// //   for (const ticket of tickets) {
// //     if (JSON.stringify(ticket.ticket) === JSON.stringify(newTicket)) {
// //       return true;
// //     }
// //   }
// //   return false;
// // }



//optimal way
// function generateRandomNumbers(start, end, count) {
//   const nums = new Set();
//   while (nums.size < count) {
//     nums.add(Math.floor(Math.random() * (end - start + 1)) + start);
//   }
//   return Array.from(nums);
// }

// function isTicketExists(tickets, newTicket) {
//   return tickets.some(ticket => JSON.stringify(ticket.ticket) === JSON.stringify(newTicket));
// }

// function generateHousieTickets() {
//   const tickets = [];
//   for (let i = 1; i <= 10; i++) {
//     const name = "Tk" + i;
//     let ticket;
//     do {
//       ticket = [
//         ...generateRandomNumbers(1, 18, 5),
//         ...generateRandomNumbers(19, 36, 5),
//         ...generateRandomNumbers(37, 54, 5),
//         ...generateRandomNumbers(55, 72, 5),
//         ...generateRandomNumbers(73, 90, 5),
//       ];
//     } while (isTicketExists(tickets, ticket));
//     tickets.push({ ticket, ticketId: name });
//   }
//   return tickets;
// }

// const housieTickets = generateHousieTickets();
// console.log(housieTickets);


function generateRandomNumbers(start, end, count) {
  const nums = new Set();
  const range = end - start + 1;
  while (nums.size < count) {
    nums.add((Math.floor(Math.random() * 1000000) % range) + start);
  }
  return Array.from(nums);
}

function isTicketExists(tickets, newTicket) {
  console.log(tickets.some(ticket => JSON.stringify(ticket.ticket) === JSON.stringify(newTicket))
);
  return tickets.some(ticket => JSON.stringify(ticket.ticket) === JSON.stringify(newTicket));
}

function generateHousieTickets() {
  const tickets = [];
  for (let i = 1; i <= 10; i++) {
    const name = "Tk" + i;
    let ticket;
    do {
      ticket = [
        ...generateRandomNumbers(1, 18, 5),
        ...generateRandomNumbers(19, 36, 5),
        ...generateRandomNumbers(37, 54, 5),
        ...generateRandomNumbers(55, 72, 5),
        ...generateRandomNumbers(73, 90, 5),
      ];
    } while (isTicketExists(tickets, ticket));
    tickets.push({ ticket, ticketId: name });
  }
  return tickets;
}

const housieTickets = generateHousieTickets();
//console.log(housieTickets);
