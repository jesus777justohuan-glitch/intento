// Espera a que el HTML termine de cargar por completo
document.addEventListener("DOMContentLoaded", function () {

    // Escuchamos de forma segura el envío (submit) del formulario
    document.getElementById("formularioFibonacci").addEventListener("submit", function (event) {
        // Evitamos que la página se recargue automáticamente
        event.preventDefault();

        // Obtenemos el valor del input mediante su ID obligatoria
        let mesesInput = document.getElementById("meses").value;
        let meses = parseInt(mesesInput);

        // Validación de entrada
        if (isNaN(meses) || meses < 1) {
            document.getElementById("resultadoFibonacci").textContent = "Por favor, ingresa un número de meses válido (mayor a 0).";
            return;
        }

        // Implementación algorítmica sin usar vectores (variables simples)
        let a = 0;
        let b = 1;
        let c;
        let totalAhorrado = 0;
        let cadenaResultado = "Detalle de los depósitos mes a mes:\n\n";

        for (let i = 1; i <= meses; i++) {
            let ahorroMes;
            if (i === 1) {
                ahorroMes = 1;
            } else {
                c = a + b;
                ahorroMes = c;
                a = b;
                b = c;
            }
            totalAhorrado += ahorroMes;
            cadenaResultado += `• Mes ${i}: Bs. ${ahorroMes}\n`;
        }

        cadenaResultado += `\n💰 Ahorro Total Acumulado: Bs. ${totalAhorrado}\n`;
        cadenaResultado += `\nConclusión: Aplicar la serie de Fibonacci demuestra cómo un modelo incremental ayuda a consolidar metas financieras de manera escalable sin usar almacenamiento estructurado complejo.`;

        // Mostramos los datos usando textContent para respetar los saltos de línea (\n)
        document.getElementById("resultadoFibonacci").textContent = cadenaResultado;
    });

});