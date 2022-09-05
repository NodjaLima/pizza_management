import api from "./api";

export async function getFornecedores(){
    try {
        const response = await api.get("/fornecedores");
        return response.data;
        
        } catch (error) {
        return error.response.data.message;
        } 
}


export async function postFornecedores(fornecedores){
    try {
    const response = await api.post("/fornecedores", fornecedores);
    return response.status;
    
    } catch (error) {
    return error.response.data.message;
    }    
}

