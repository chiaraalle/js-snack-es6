/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/
const biciclette = [
    {
      nome: "Canyon Ultimate CF SLX",
      peso: 6.8
    },
    {
      nome: "Specialized S-Works Tarmac",
      peso: 6.7
    },
    {
      nome: "Trek Emonda SLR 9",
      peso: 6.4
    },
    {
      nome: "Bianchi Oltre XR4",
      peso: 7.1
    },
    {
      nome: "Pinarello Dogma F12",
      peso: 6.9
    }
  ];

let biciclettaPiuLeggera = biciclette[0];

for (let i = 1; i < biciclette.length; i++) {
  if (biciclette[i].peso < biciclettaPiuLeggera.peso) {
    biciclettaPiuLeggera = biciclette[i];
  }
}

console.log(biciclettaPiuLeggera);


/*Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

const squadre = [
  { nome: 'Juventus', puntiFatti: 0, falliSubiti: 0 },
  { nome: 'Inter', puntiFatti: 0, falliSubiti: 0 },
  { nome: 'Milan', puntiFatti: 0, falliSubiti: 0 },
  { nome: 'Roma', puntiFatti: 0, falliSubiti: 0 },
  { nome: 'Napoli', puntiFatti: 0, falliSubiti: 0 }
];

const arraySquadre = [];

for (let i = 0; i < squadre.length; i++) {
     squadre[i].puntiFatti = Math.floor(Math.random() * 100) + 1;
     squadre[i].falliSubiti = Math.floor(Math.random() * 100) + 1;

     arraySquadre.push({nome: squadre[i].nome, falliSubiti: squadre[i].falliSubiti})
  }

  

console.log(squadre);
console.log(arraySquadre);

/*Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array ( esempio: ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'] )e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con li elementi estratti dall'array di partenza che hanno la posizione compresa tra i due numeri (a e b).*/

const arrayNomi = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
const a = 2;
const b = 6;

let arrayElementiTrovati = [];

function estraiElementi(nomi, num1, num2){

}