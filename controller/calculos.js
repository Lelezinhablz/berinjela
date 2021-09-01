async function abreAdd(req, res){
    res.render("pagCalculadora/add.ejs", {});
}

async function add(req, res)
{

    
    var numUm;
    var numdois;
    var operacao = req.body.operacao;
    var result;

    numUm.parseInt();
    numDois.parseInt();

       if (operacao == "soma"){

            result = numUm + numdois;
       }

       else if (operacao == "subtrai"){

            result = numUm - numDois;

       }

        else if (operacao == "multiplica"){

            result = numUm * numDois;

       }

       else if (operacao == "divide") {

            result = numUm / numDois;

       }

       
    res.render("calculadora/list.ejs", {resultado:result});
    }
    
module.exports = {
    add,
    abreAdd,
}
