document.getElementById("formularioPrimos").addEventListener("submit", function (event) {
            event.preventDefault(); // Evita que la página se recargue al enviar el formulario
            
            let numeroInput = document.getElementById("codigoSec").value;
            let numero = parseInt(numeroInput);

            if (isNaN(numero) || numero < 1) {
                document.getElementById("resultadoPrimos").textContent = "Ingresa un número válido.";
                return;
            }

            let contador = 0;
            // Algoritmo iterativo simple sin vectores para optimizar recursos
            for (let i = 1; i <= numero; i++) {
                if (numero % i === 0) {
                    contador++;
                }
            }

            let textoResultado = `Código Evaluado: ${numero}\n`;
            if (contador === 2) {
                textoResultado += "🟢 RESULTADO: Es un número PRIMO.\n🔒 Estado: Código SEGURO para criptografía.";
            } else {
                textoResultado += "🔴 RESULTADO: NO es número primo.\n⚠️ Estado: Código VULNERABLE.";
            }

            // Uso correcto de textContent para respetar saltos de línea \n en cajas de texto fijas
            document.getElementById("resultadoPrimos").textContent = textoResultado;
        });