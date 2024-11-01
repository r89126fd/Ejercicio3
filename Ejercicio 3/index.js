// Función para convertir de Km a m
function convertirKmAm() {
          const km = parseFloat(document.getElementById('km').value);
          if (isNaN(km) || km < 0) {
              alert('Por favor, ingrese un valor numérico válido para kilómetros.');
              return;
          }
          const metros = km * 1000;
          document.getElementById('resultadoKmAm').value = `${metros} m`;
      }
      
      // Función para convertir de m a cm
      function convertirMaCm() {
          const m = parseFloat(document.getElementById('m').value);
          if (isNaN(m) || m < 0) {
              alert('Por favor, ingrese un valor numérico válido para metros.');
              return;
          }
          const cm = m * 100;
          document.getElementById('resultadoMaCm').value = `${cm} cm`;
      }
      
      // Función para convertir de ft a pulgadas
      function convertirFtAPulg() {
          const ft = parseFloat(document.getElementById('ft').value);
          if (isNaN(ft) || ft < 0) {
              alert('Por favor, ingrese un valor numérico válido para pies.');
              return;
          }
          const pulgadas = ft * 12;
          document.getElementById('resultadoFtAPulg').value = `${pulgadas} pulgadas`;
      }
      
      // Función para convertir de yardas a pulgadas
      function convertirYardasAPulg() {
          const yardas = parseFloat(document.getElementById('yardas').value);
          if (isNaN(yardas) || yardas < 0) {
              alert('Por favor, ingrese un valor numérico válido para yardas.');
              return;
          }
          const pulgadas = yardas * 36;
          document.getElementById('resultadoYardasAPulg').value = `${pulgadas} pulgadas`;
      }
      