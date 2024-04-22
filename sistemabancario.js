var prompt = require('prompt-sync')();

class ContaBancaria {
    constructor(saldo, historicoCredito, cadastroAtivo, limiteTransferencia) {
        this.saldo = saldo
        this.historicoCredito = historicoCredito
        this.cadastroAtivo = cadastroAtivo
        this.limiteTransferencia = limiteTransferencia
    }

    verificarSaldo() {
        if(this.saldo > 0) {
            console.log("Saldo positivo")
        }
        else {
            console.log("Saldo negativo")
        }
    }

    realizarSaque(valorSaque) {
        if(valorSaque <= this.saldo) {
            this.saldo -= valorSaque
            console.log(`Saque realizado com sucesso. Saldo atual: R$ ${this.saldo}`)
        } else {
            console.log("Saldo insuficiente")
        }
    }

    realizarDeposito(valorDeposito) {
        this.saldo += valorDeposito
        console.log(`Depósito realizado com sucesso. Novo saldo: R$ ${this.saldo}`)
    }

    realizarTransferencia(valorTransferencia) {
        if(valorTransferencia <= this.saldo && valorTransferencia <= this.limiteTransferencia) {
        this.saldo -= valorTransferencia
        console.log(`Transferencia realizada com sucesso! Saldo atual: R$ ${this.saldo}`)
    } else if (valorTransferencia > this.saldo) {
        console.log("Saldo insuficiente para transferencia")
    } else {
        console.log("Valor excede o limite de transferencia")
    }
}

    checarChequeEspecial() {
        if(this.saldo < 0) {
            console.log("Dentro do limite do cheque especial")

        } else {
            console.log("Fora do limite do cheque especial")
        }
    }

    atualizarCadastro() {
        if(this.cadastroAtivo && this.saldo > 0) {
            console.log("Cadastro ativo e saldo positivo")

        } else if(this.cadastroAtivo && this.saldo <= 0) {
            console.log("Cadastro ativo, mas precisa regularizar o saldo")

        } else {
            console.log("Por favor, atualize seu cadastro")
        }
    }

    limiteCredito(rendaMensal) {
        if (this.saldo > 1000 && this.historicoCredito && rendaMensal > 3000) {
            console.log("Crédito aprovado");
        } 
        else {
            console.log("Crédito negado");
        }
    }

}

var conta = new ContaBancaria(2500, true, false, 1000)

while(decisao != 0){
    console.log(`
        1 - Verificar saldo \n
        2 - Realizar saques \n
        3 - Realizar depósito \n
        4 - Transferencia \n
        5 - Checar status do cheque especial \n
        6 - Atualizar cadastro \n
        7 - Avaliar crédito \n
        0 - Sair do menu 
    `)

    var decisao = prompt('Informe o número do menu: ')


switch (decisao) {
    case "1":
        conta.verificarSaldo()
        break;
        
    case "2":
        let valorSaque = Number(prompt('Informe o valor do Saque: '))
        conta.realizarSaque(valorSaque)
        break;

    case "3":
        let valorDeposito = Number(prompt('Informe o valor para depositar: '))
        conta.realizarDeposito(valorDeposito)
        break;

    case "4":
        let valorTransferencia = Number(prompt('Informe o valor para transferência: '))
        conta.realizarTransferencia(valorTransferencia)
        break;
        
    case "5":
        conta.checarChequeEspecial()
        break;
        
    case "6":
        conta.atualizarCadastro()
        break;

    case "7":
        let rendaMensal = Number(prompt('Informe a renda mensal: '))
        conta.limiteCredito(rendaMensal)
        break;

    case "0":
        console.log("Você saiu da sua conta") 
        break

    default:
        console.log("Opcao inexistente")
        break;
    }
}
