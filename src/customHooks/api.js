export function useFetch(){
    const res = fetch(" https://fakestoreapi.com/products");
    
    if(!res.json){
        throw new Error("Something went wrong");
    }
}