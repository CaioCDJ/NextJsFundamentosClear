
export default function client(req,res){

    if(req.method ==='GET'){
        handleGet(req,res);
    } else{
        res.status(405).send('muito burro');
    }
}

function handleGet(req,res){
    res.status(200).json({
        id:9,
        nome:"boxer",
        idade:9
    })
}