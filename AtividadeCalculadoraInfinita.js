
/*Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. */

function calculadora(){
    let numero1
    let numero2

    while (true){
        let numeroEscolhido = parseInt(prompt("Escolha uma opção: 1: Soma, 2: Subtração, 3: Multiplicação, 4: Divisão, 0: Sair. (Digite o número correspondente a operação que quer realizar.)"))
        
        //Escolhi colocar o if aqui para que, caso o usuário escolha a opção sair, o sistema não perguntará os números, apenas sairá.
        if(numeroEscolhido === 0){
            return "Saindo da calculadora..."
        }
        
        numero1 = parseInt(prompt("Escolha um número para ser o primeiro:"))
        numero2 = parseInt(prompt("Escolha um número para ser o segundo")) 

        switch (numeroEscolhido) {
            case  1:
                console.log("Resultado: ", numero1 + numero2)
                break;
            case 2:
                console.log("Resultado: ", numero1 - numero2)
                break;

            case 3:
                console.log("Resultado: ", numero1 * numero2)
                break;

            case 4:
                console.log("Resultado: ", numero1 / numero2)
                break;

            default:
                console.log("Escolha uma opção válida")
                break;
        }
    }
}
calculadora()