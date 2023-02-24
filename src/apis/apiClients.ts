import { ApiClient } from './APIConfig';
import * as constanst from '../constants'

 const loginRequest = (payload:Record<string, any>) => ApiClient.post('/login', payload);

 const getProductRequest = (payload:Record<string, any>) => ApiClient.get(`product?pageIndex=${payload.pageIndex}&&limit=${constanst.LIMIT}&&type=${payload.type}&&brand=${payload.brand || ""}&&keySearch=${payload.keySearch || ""}`, payload)
 const getDetailProductRequest = (payload:Record<string, any>) => ApiClient.get(`product/${payload.id}`, payload)




 export {loginRequest,getProductRequest,getDetailProductRequest} 
 