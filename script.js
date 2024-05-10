// Dados das taxas de câmbio (exemplo)
const exchangeRates = {
    BRL: {
        USD: 0.1938849,//
        EUR:  0.180005,//
        JPY: 30.1841232,//
        GBP: 0.155034,//
        CHF: 0.1758551//
    },
    USD: {
        BRL: 5.1571,//
        EUR:  0.9284189,//
        JPY: 155.68,//
        GBP: 0.7996162,//
        CHF: 0.907//
    },
    EUR: {
        BRL: 6.68,
        USD:  1.0771,//
        JPY: 155.68,//
        GBP: 0.84,
        CHF: 1.04
    },
    JPY: {
        BRL: 0.051,
        USD: 0.0064234,//
        EUR: 0.0075,
        GBP: 0.0063,
        CHF: 0.0077
    },
    GBP: {
        BRL:  6.450198,
        USD: 1.2506,//
        EUR: 1.19,
        JPY: 158.31,
        CHF: 1.23
    },
    CHF: {
        BRL: 5.6864999,//
        USD: 1.1025358,//
        EUR: 0.96,
        JPY: 129.53,
        GBP: 0.81
    }
};

// Função para realizar a conversão de moedas
function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    if (isNaN(amount) || amount <= 0) {
        alert('Por favor, insira um valor válido.');
        return;
    }

    if (!exchangeRates[fromCurrency] || !exchangeRates[fromCurrency][toCurrency]) {
        alert('Não foi possível realizar a conversão.');
        return;
    }

    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    const formattedAmount = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: toCurrency }).format(convertedAmount);

    document.getElementById('result').innerHTML = `Valor convertido: ${formattedAmount} (${amount} ${fromCurrency} para ${toCurrency})`;
}


















// $(document).ready(function () {

//     $('#botao').click(function (event) {
//         event.preventDefault();

//         let valor = parseFloat($('#valor').val());
//         let opcoes = $('#opcoes').val();
//         let opcoes2 = $('#opcoes2').val();
//         let dolar = $('#dolar').val();
//         let lene = $('#lene').val();
//         let libra = $('#libra').val();
//         let franco = $('#franco').val();
//         let euro = $('#euro').val();
//         let total = parseFloat($('#resultado').text());

//         if (valor <= 0 || isNaN(valor)) {
//             alert("Digite um número valido !");
//         } else {
//             if (opcoes == dolar) {
//                 valor = valor * 0.1938849;
//                 $('#resultado').val(valor.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
//             }
//             else if (opcoes == lene) {
//                 valor = valor * 30.1841232;

//                 $('#resultado').val(valor.toLocaleString('JP', { style: 'currency', currency: 'JPY' }));
//             }

//             else if (opcoes == libra) {
//                 valor = valor * 0.155034;

//                 $('#resultado').val(valor.toLocaleString('GB', { style: 'currency', currency: 'GBP' }));
//             }

//             else if (opcoes == franco) {
//                 valor = valor * 0.1758551;

//                 $('#resultado').val(valor.toLocaleString('CH', { style: 'currency', currency: 'CHF' }));
//             }

//             else if (opcoes == euro) {
//                 valor = valor * 0.180005;

//                 $('#resultado').val(valor.toLocaleString('UE', { style: 'currency', currency: 'EUR' }));
//             }
//         }
//     });
// }); 
// </script>