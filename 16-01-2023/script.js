// Seguendo quello fatto oggi a lezione effettuate una chiamate fetch() alla seguente API web: https://api.escuelajs.co/api/v1/products e 
// stampate in console nome e descrizione del prodotto simile a questo formato

// --------------
// Tasty Rubber Soap
// The Football Is Good For Training And Recreational Purposes
// --------------
// Modern Bronze Chair
// New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016

// State molto attendi all'asincronicità della PROMISE



fetch("https://api.escuelajs.co/api/v1/products")
 .then(res => res.json())
 .then(data => dataPrint(data));

const dataPrint = data => {
    data.forEach((product) => {
    console.log(product.title);
    console.log(product.description);
    console.log("----------------");
});
};
