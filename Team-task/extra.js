let tickets = [];
let ticketId = "ticketNo";
function bingoTickets() {
     const randomNumber = Math.floor(Math.random()*90);
     for (let i = 1; i <= 10; i++) {
          let ticketArr = [];
           let ticketName = ticketId + i;
           while (ticketArr.length < 25) {
        // let randomNumber = Math.floor(Math.random()*90);
         tickets.push(...bingoTickets(1, 18, 5));
         tickets.push(...bingoTickets(19, 36, 5));
         tickets.push(...bingoTickets(37, 54, 5));
         tickets.push(...bingoTickets(55, 72, 5));
         tickets.push(...bingoTickets(73, 90, 5));
         
         if (!ticketArr.includes(randomNumber)) {
             ticketArr.push(randomNumber);
            }
         } tickets.push({ ticketId: ticketName, ticketArr });
         } return tickets;
        }
         console.log(bingoTickets());
         