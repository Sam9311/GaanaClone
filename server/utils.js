const createResult=(err,data)=>{
    const result={}
    if(err){
        result['error']=err
        result['status']='error'
    }
    else{
        result['status']='success'
        result['data']='data'

    }
return result;}