async function abreAdd(req, res){
    res.render("pagCalculadora/add.ejs", {});
}

async function add(req, res)
{

    
    var numUm =  req.body.numUm;
    var numdois =  req.body.numdois;
    var operacao = req.body.operacao;
    var result;

    numUm.parseInt();
    numdois.parseInt();

       if (operacao == "soma"){

            result = numUm + numdois;
       }

       else if (operacao == "subtracao"){

            result = numUm - numdois;

       }

        else if (operacao == "multiplicacao"){

            result = numUm * numdois;

       }

       else if (operacao == "divisao") {

            result = numUm / numdois;

       }

       
    res.render("calculadora/list.ejs", {resultado:result});
    }
    
module.exports = {
    add,
    abreAdd,
}
