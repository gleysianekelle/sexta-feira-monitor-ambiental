// script.js

const form = document.getElementById('energy-form');
const display = document.getElementById('display-result');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar

        // 1. Coleta de dados
            const device = document.getElementById('device').value;
                const power = parseFloat(document.getElementById('power').value);
                    const hours = parseFloat(document.getElementById('hours').value);

                        // 2. Lógica de Cálculo (kWh)
                            const consumption = (power * hours) / 1000;
                                const costEstimate = consumption * 0.70; // Simulação: R$ 0,70 por kWh

                                    // 3. UX: Feedback visual baseado no consumo
                                        let statusMessage = "";
                                            if (consumption > 5) {
                                                    statusMessage = `<span style="color: #ff4d4d;">ALERTA: Alto impacto ambiental!</span>`;
                                                        } else {
                                                                statusMessage = `<span style="color: #4dff88;">EFICIENTE: Protocolo Eco-Green ativo.</span>`;
                                                                    }

                                                                        // 4. Exibição dos resultados (Simulando um JSON interno)
                                                                            const resultData = {
                                                                                    aparelho: device,
                                                                                            totalKwh: consumption.toFixed(2),
                                                                                                    custo: costEstimate.toFixed(2)
                                                                                                        };

                                                                                                            display.innerHTML = `
                                                                                                                    <p><strong>Dispositivo:</strong> ${resultData.aparelho}</p>
                                                                                                                            <p><strong>Consumo Diário:</strong> ${resultData.totalKwh} kWh</p>
                                                                                                                                    <p><strong>Custo Estimado:</strong> R$ ${resultData.custo}</p>
                                                                                                                                            <hr>
                                                                                                                                                    <p>${statusMessage}</p>
                                                                                                                                                        `;
                                                                                                                                                        });
                                                                                                                                                        