function generateRandomNumbers(start, end, count) {
    const nums = new Set();
    while (nums.size < count) {
      nums.add(Math.floor(Math.random() * (end - start + 1)) + start);
    }
    return Array.from(nums);
  }
  
  
  function isTicketExists(tickets, newTicket) {
    for (let i = 0; i < tickets.length; i++) {
      if (JSON.stringify(tickets[i].ticket) === JSON.stringify(newTicket)) {
        return true;
      }
    }
    return false;
  }
  var arr = [];
   while(arr.length < 90){
       var iteam = Math.floor(Math.random() * 90) + 1;
      if(arr.indexOf(iteam) === 1)arr.push(iteam);
  }
   console.log(arr);
    function generateHousieTickets() {
      let tickets = [];
      for (let i = 1; i <= 10; i++) {
        let name = "Tk" + i;
        let ticket = [];
        ticket.push(...generateRandomNumbers(1, 18, 5));
        ticket.push(...generateRandomNumbers(19, 36, 5));
        ticket.push(...generateRandomNumbers(37, 54, 5));
        ticket.push(...generateRandomNumbers(55, 72, 5));
        ticket.push(...generateRandomNumbers(73, 90, 5));
        while (generateHousieTickets(tickets, ticket)) {
          ticket = [];
          ticket.push(...generateRandomNumbers(1, 18, 5));
          ticket.push(...generateRandomNumbers(19, 36, 5));
          ticket.push(...generateRandomNumbers(37, 54, 5));
          ticket.push(...generateRandomNumbers(55, 72, 5));
          ticket.push(...generateRandomNumbers(73, 90, 5));
        }
        tickets.push({ ticket: ticket, ticketId: name });
     }
      return tickets;
   }
    let housieTickets = generateHousieTickets();
    console.log(housieTickets);
    
  
  
  
  
  