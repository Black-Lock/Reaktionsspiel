
      let startTime;

      /* we need a function which move the circle everytime we try to click on it --> auto moving and this functi should have some structur which chnage the place of circle --> changing style*/

      function moveKreise() {
        Kreis.style.left = `${Math.random() * (window.innerWidth - 50)}px`; /* Breite unseres Fensters minus unsere Breite dann multiplizieren wir es mit einer zufaelligen Zahl Zwischen 0 und 1  */

        /* jetzt fuer Y-Achse =Height-*/

        Kreis.style.top = `${Math.random() * (window.innerHeight - 50)}px`;

        /*jetzt sollten wir eine zufaellige Farbe fuer Kreis haben
        Formel ist = hsl(zufaellige Zahl , 100% , 60%)*/

        Kreis.style.background = `hsl(${Math.random() * 360} , 100% , 60%)`;

        startTime = Date.now();

        /**/
      }

      function measureTime(){
        let reactionTime = Date.now() - startTime;
        message.innerHTML = `Reaktionszeit : ${reactionTime /1000} Sekunden`;
        moveKreise();
      }
