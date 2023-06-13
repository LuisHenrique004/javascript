/* • Operadores aritmeticos
    +,-,*,/,%,**

    Ordem de presedência: (), **, * / %, + -
    Se os operadores tiverem o mesmo nivel de presedência o operação é executada da esquerda para direita.
*/

var a = 4*5
console.log(a)

/* • Auto atribuição
    var m = 4
    m = m + 4
    
    ou

    m += 4 - serve para outras operações:
    m -= 4
    m *= 4
    m /= 4
    m %= 4
    m **= 4


*/

a *= 2
console.log(a)

/* • Operador de Incremento
    var x = 5
    x++ -> isso corresponde a (x += 1 ou x = x + 1)
    x-- -> isso corresponde a (x -= 1 ou x = x - 1)
*/

a++
console.log(a)

/* • Operadores relacionais
    >, <, >=, <=, ==, !=, ===

    No JavaScript o simbolo de igualdade ('==') não teste o tipo do objeto.

    para verificar se um objeto é totalmente igual a outro, usa-se o simbolo de inrrestrito ('===')

    5 == '5' -> true
    5 === '5' -> false

    Desigual irrestrito x !== y
*/

/* • Operadores Logicos
    !, &&, ||
    ! -> negação
    && -> conjunção
    || -> disjunção

    Ordem de presedência: Aritmetica, relacionais logicos
    Ordem de execução dos operadores logicos: !, &&, ||
*/

/* •Operador Ternário
    media > 7? 'aprovado' : 'reprovado'
    utiliza o ?'valor':'valor'
*/
