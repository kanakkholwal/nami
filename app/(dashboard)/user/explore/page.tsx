
import ClientComp from "./action-client";
import { getMedia } from "./actions";


export default async  function Explore() {
    


    
    return <>

    <ClientComp getMedia={getMedia} />
    
    </>
}