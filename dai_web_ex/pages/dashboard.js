import { Button } from "semantic-ui-react"
import { useRouter } from "next/router"

export default function dashboard(){
    const r = useRouter();
const homeBut = () => {r.push('/')}
    return (
        <>
            This is a dashboard
            <Button onClick={()=> homeBut()}>
                Return
            </Button>
        </>
        
    )
}