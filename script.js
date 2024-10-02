// factory function + prototyopes
const falar={
        falar(){
                console.log(`${this.nome} Está Falando.`)
        }
}
const pessoaPrototype=Object.assign(falar)
function criarPessoa(nome,sobrenome){
        return Object.create(pessoaPrototype,{
                nome:{value:nome},
                sobrenome:{value:sobrenome}
        })
}
const p1=criarPessoa('Jean')
p1.falar()
console.log(p1)