const ServiceRecuperacao = require ('../services/recuperacao')
class ControllerRecuperacao {
    GetFuncao(req, res) {
        try {
            const funcoes = ServiceRecuperacao.FuncoesDisponiveis()
            
        } catch (error) {
            res.status(500).send({ msg: error.mesage })
        }
    }
    PostEx4(req,res){
        try{
            const resultado = ServiceRecuperacao.Conversor(req.body.cel, fah)
            res.status(201).json({ resultado })
            
        }catch (error){
            res.status((500).send({msg: error.mesage}))
        }
    }
    PostEx15(req,res){
        try{
            const resposta = ServiceRecuperacao.VerificaTriangulos(req.body.a,req.body.b,req.body.c)
            res.status(201).json({resposta})
        }catch (error){
            res.status((500).send({msg: error.mesage}))
        }
    }
    PostEx18(req,res){
        try{
            const valor = ServiceRecuperacao.VerificaCusto(req.body.fab, imp, dis, custo)
            res.status(201).json({valor})
        }catch (error){
            res.status((500).send({msg: error.mesage}))
        }
    }
    PostEx24(req,res){
        try{
            const tabuada = ServiceRecuperacao.Tabuada(req.body.num)
            res.status(201).json({tabuada})
        }catch (error){
            res.status((500).send({msg: error.mesage}))
        }
    }
    PostEx16(req,res){
        try{
            const Imposto = ServiceRecuperacao.Imposto(req.body.dep, salMin, desc, req.body.renda)
            res.status(201).json({tabuada})
           
        }catch (error){
            res.status((500).send({msg: error.mesage}))
        }
    }
}
module.exports = new ControllerRecuperacao()