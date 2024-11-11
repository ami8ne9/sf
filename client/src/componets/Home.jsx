import { Link } from "react-router-dom"

const Home=()=>{
    return(<>
    
    <div className='h-full w-full center'>
        <div className=' text-white h-[90%] w-[90%] flex flex-col gap-[20px]'>
            <Link className="h-1/2 w-full text-black rounded-3xl flex border-[3px] border-black shadow-xl hover:-translate-x-[5px] hover:-translate-y-[5px] duration-500 text-center" to="/Facture"> 
              <img src="images/factures.jpg"  className="h-full rounded-s-3xl "/>
              <h1 className="center h-full w-full text-[40px]">Crer une nouvelle facture</h1>
            </Link>
            <Link className="h-1/2 w-full text-black rounded-3xl flex border-[3px] border-black shadow-xl hover:-translate-x-[5px] hover:-translate-y-[5px] duration-500 text-center" to="/Base">
              <img src="images/basededonnees.png"  className="h-full rounded-s-3xl w-[270px]"/>
              <h1 className="center h-full w-full text-[40px]">Base de donnees et clients</h1>
            </Link>
        </div>
      </div>
    
    </>)
}
export default Home