const ServiceRecuperacao = require ('../services/recuperacao')
class ControllerRecuperacao {
    GetFuncao(req, res) {
        try {
            res.send({
                msg:
                    'Funcoes disponíveis ' +
                    '4-Conversor C° em FH ' +
                    '15-Verificar Triângulo ' +
                    '18-Custo consumidor carro novo ' +
                    '24-Tabuada 0 a 10 ' +
                    '16-Calcular imposto de renda'
            })
        } catch (error) {
            res.status(500).send({ msg: error.mesage })
        }
    }
    PostEx4(req,res){
        try{
            const resultado = ServiceRecuperacao.conversor(req.body.fah,cel)
            res.status(201).json({ resultado })
            
        }catch (error){
            res.status((500).send({msg: error.mesage}))
        }
    }
    PostEx15(req,res){
        try{
            const resposta = ServiceRecuperacao.VerificaTriangulos(a,b,c)
            res.status(201).json({resposta})
        }catch (error){
            res.status((500).send({msg: error.mesage}))
        }
    }
    PostEx18(req,res){
        try{
            const valor = ServiceRecuperacao.VerificaCusto(custo)
            res.status(201).json({valor})
        }catch (error){
            res.status((500).send({msg: error.mesage}))
        }
    }
    PostEx24(req,res){
        try{
            const tabuada = ServiceRecuperacao.Tabuada(num)
            res.status(201).json({tabuada})
        }catch (error){
            res.status((500).send({msg: error.mesage}))
        }
    }
    PostEx16(req,res){
        try{
           
        }catch (error){
            res.status((500).send({msg: error.mesage}))
        }
    }
}
module.exports = new ControllerRecuperacao()