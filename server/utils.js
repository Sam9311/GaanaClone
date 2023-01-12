function createResult(error,data){
    const result={}
    if(error){
        console.log("err")
        result['error']=error
        result['status']='error'
    }
    else{
        console.log("ersuccesssr")
        result['status']='success'
        result['data']=data

    }
return result;}

module.exports= {createResult:createResult};