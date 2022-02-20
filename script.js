var numG = 0
var chi = []
var conChi = []
var cosaFanno = []
var dove = []
var perche = []
db = []

async function getStoria() {
   if (document.getElementById("chi").value != "" && document.getElementById("conChi").value != "" && document.getElementById("cosaFanno").value != "" &&
      document.getElementById("dove").value != "" && document.getElementById("perche").value != "") {

      var storia = {
         "chi": document.getElementById("chi").value, "conChi": document.getElementById("conChi").value, "cosaFanno": document.getElementById("cosaFanno").value,
         "dove": document.getElementById("dove").value, "perche": document.getElementById("perche").value
      }

      // Implementare logica del database

    
      try{
         let prova = fetch('https://filippo-renai.github.io/storie-web/db.json').promise()
      }
      catch(Err){
         console.log(Err)
      }
      console.log(prova)
      db.push(storia)
      //console.log(db)

      numG++
      chi.push(storia.chi)
      conChi.push(storia.conChi)
      cosaFanno.push(storia.cosaFanno)
      dove.push(storia.dove)
      perche.push(storia.perche)
      canc()
   }

}

function getStoriaFinita() {
   console.log(numG)
   document.getElementById("salva").style.visibility = 'hidden'
   document.getElementById("cance").style.visibility = 'hidden'
   document.getElementById("regola").style.visibility = 'hidden'
   document.getElementById("finita").textContent = "Prossima storia"
   if (numG > 0) {
      var num = Math.floor(Math.random() * numG);
      document.getElementById("chi").value = db[num]["chi"]

      num = Math.floor(Math.random() * numG);
      document.getElementById("conChi").value = db[num]["conChi"]

      num = Math.floor(Math.random() * numG);
      document.getElementById("cosaFanno").value = db[num]["cosaFanno"]

      num = Math.floor(Math.random() * numG);
      document.getElementById("dove").value = db[num]["dove"]

      num = Math.floor(Math.random() * numG);
      document.getElementById("perche").value = db[num]["perche"]

      /*
      var num = Math.floor(Math.random() * numG);

      document.getElementById("chi").value = chi[num]
      chi.splice(num, 1);

      num = Math.floor(Math.random() * numG);
      document.getElementById("conChi").value = conChi[num]
      conChi.splice(num, 1);

      num = Math.floor(Math.random() * numG);
      document.getElementById("cosaFanno").value = cosaFanno[num]
      cosaFanno.splice(num, 1);

      num = Math.floor(Math.random() * numG);
      document.getElementById("dove").value = dove[num]
      dove.splice(num, 1);

      num = Math.floor(Math.random() * numG);
      document.getElementById("perche").value = perche[num]
      perche.splice(num, 1);
      */
      numG--
   }
   else {
      window.location.reload()
      alert("GRAZIE PER AVER GIOCATO!")
   }
}

function canc() {
   document.getElementById("chi").value = ""
   document.getElementById("conChi").value = ""
   document.getElementById("cosaFanno").value = ""
   document.getElementById("dove").value = ""
   document.getElementById("perche").value = ""
}


