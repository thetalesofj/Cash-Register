function checkCashRegister(price, cash, cid) {
    let change = cash * 100 - price * 100;
    let total = 0;
    for (let key of cid) {
       total += key[1] * 100
    }
   if (change > total) {
     return {status: "INSUFFICIENT_FUNDS", change: []}
   } else if (change === total) {
     return {status: "CLOSED", change: cid}
   } else {
     let answer = [];
     cid = cid.reverse();
     
     let currencyAmount = {
     "ONE HUNDRED": 10000,
     "TWENTY": 2000,
     "TEN": 1000,
     "FIVE": 500,
     "ONE": 100,
     "QUARTER": 25,
     "DIME": 10,
     "NICKEL": 5, 
     "PENNY": 1,
     };
   
     for (let key of cid) {
       let store = [key[0], 0]
         key[1] = key[1] * 100;
         while (change >= currencyAmount[key[0]] && key[1] > 0) {
           change -= currencyAmount[key[0]]
           key[1] -= currencyAmount[key[0]]
           store[1] += currencyAmount[key[0]]/100
         }
         if (store[1] > 0) {
           answer.push(store)
         }
       }
       if (change > 0) {
         return {status: "INSUFFICIENT_FUNDS", change: []}
       }
       return {status: "OPEN", change: answer}
     }
   }
   