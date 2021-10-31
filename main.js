function Convertendo() {
  let valorElemento = document.getElementById('valor')
  let valor = valorElemento.value
  let valorEmDolarNumerico = parseFloat(valor)
  let valorEmEuroNumerico = parseFloat(valor)

  let valorEmReal = valorEmDolarNumerico * 5
  let valorEmEuro = valorEmEuroNumerico * 0.85
  console.log(valorEmReal)
  console.log(valorEmEuro)

  let elementoValorConvertidoReal = document.getElementById(
    'valorConvertidoReal'
  )
  let elementoValorConvertidoEuro = document.getElementById(
    'valorConvertidoEuro'
  )
  let valorConvertidoReal = 'A conversão em Real é R$ ' + valorEmReal
  let valorConvertidoEuro = 'A conversão em Euro é € ' + valorEmEuro
  elementoValorConvertidoReal.innerHTML = valorConvertidoReal
  elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro
}
