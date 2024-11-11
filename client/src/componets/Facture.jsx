
import { FaPlus,FaMinus } from "react-icons/fa";
import { useState } from "react";
import React from 'react'


const Facture=()=>{
    const [itemsNumber,setItemsNumber]=useState([{id:0,ip:'',qu:'',mo:''}])
    const [date,setDate]=useState('')
    function changeDate(event){
        setDate(event.target.value)
    }
    const [nf,setNf]=useState('')
    function changeNf(event){
        setNf(event.target.value)
    }
    const [ic,setIc]=useState('')
    function changeIc(event){
        setIc(event.target.value)
    }
    const [espece,setEspece]=useState('')
    function changeEspece(event){
        setEspece(event.target.value)
    }
    const [ice,setIce]=useState('')
    function changeIce(event){
        setIce(event.target.value)
    }
    const [ac,setAc]=useState('')
    function changeAc(event){
        setAc(event.target.value)
    }
    
    
    function addItem(){
        if(itemsNumber.length<3)
            {setItemsNumber(()=>[...itemsNumber,{id:itemsNumber.length,ip:'',qu:'',mo:''}])}
    }
    function removeItem(){
        if(itemsNumber.length>1)
            {setItemsNumber(()=>{
                const item=[...itemsNumber]
                item.pop()
                return item
            })}
    }
    const information={date,nf,ic,espece,ice,ac,itemsNumber}
    return (<>


    <div className='h-full w-full center'>
        <div className=' text-white h-[95%] w-[75%] flex '>
        <div className="bg-slate-300 min-w-[550px] min-h-[575px] text-black flex flex-col overflow-scroll overflow-x-hidden">
            <div className="flex w-full  h-[90px]">
                <div className="flex flex-col w-1/2 h-full gap-[7px] mt-[15px] ml-[8px]">
                    <label className="text-[11px]">Date de Facture:</label>
                    <input type="date" className="w-10/12 border-[2px] border-black rounded-md text-[20px] px-[5px]" value={date} onChange={changeDate}/>
                </div>
                <div className="flex flex-col w-1/2 h-full gap-[7px] mt-[15px] ml-[8px]">
                    <label className="text-[11px]">Numero de Facture:</label>
                    <input type="number" className="w-10/12 border-[2px] border-black rounded-md text-[20px] px-[5px] " value={nf} onChange={changeNf}/>
                </div>
            </div>
            <div className="flex w-full h-[90px] ">
                <div className="flex flex-col w-1/2 gap-[7px] mt-[15px] ml-[8px]">
                    <label className="text-[11px]">Identite de client:</label>
                    <input type="text" className="w-10/12 border-[2px] border-black rounded-md text-[20px] px-[5px]" value={ic} onChange={changeIc}/>
                </div>
                <div className="flex flex-col w-1/4 h-full gap-[7px] mt-[15px] ml-[8px]">
                    <label className="text-[11px]">Espece:</label>
                    <input type="text" className="w-10/12 border-[2px] border-black rounded-md text-[20px] px-[5px]" value={espece} onChange={changeEspece}/>
                </div>
                <div className="flex flex-col w-1/4 h-full gap-[7px] mt-[15px] ml-[8px]">
                    <label className="text-[11px]">ICE:</label>
                    <input type="number" className="w-8/12 border-[2px] border-black rounded-md text-[20px] px-[5px]" value={ice} onChange={changeIce}/>
                </div>
            </div>
            <div className="flex flex-col ml-[8px] gap-[7px]">
                <label className="text-[11px]">Adresse du client:</label>
                <input type="text" className="w-11/12 border-[2px] border-black rounded-md text-[20px] px-[5px]" value={ac} onChange={changeAc}/>
            </div>
            <div className="p-[20px] flex flex-col gap-[10px]">
                <div className="flex justify-between p-[7px] text-[25px] font-bold">
                    <h1>Articles</h1> 
                    <div className="flex center gap-3">
                    <FaMinus onClick={removeItem} style={{color:itemsNumber.length<=1?"gray":"black"}}/><p>{itemsNumber.length}</p><FaPlus onClick={addItem} style={{color:itemsNumber.length>=3?"gray":"black"}}/>
                    </div>
                    
                </div>
                {itemsNumber.map((item)=>{
                    const change=(event)=>{
                        let arr=[]
                        itemsNumber.map(i=>{
                            if (i.id==item.id){
                                if (event.target.id=="1"){
                                    i={id:item.id,ip:event.target.value,qu:item.qu,mo:item.mo}
                                }
                                if (event.target.id=="2"){
                                    i={id:item.id,ip:item.ip,qu:event.target.value,mo:item.mo}
                                }
                                if (event.target.id=="3"){
                                    i={id:item.id,ip:item.ip,qu:item.qu,mo:event.target.value}
                                }
                            }
                            arr.push(i)
                        })
                        setItemsNumber(arr)
                    }
                    return(
                    <div className="bg-slate-400 h-[120px] flex flex-col gap-[10px] rounded-xl" key={item.id}>     
                    <div className="flex justify-between px-[8px] ">
                            <p>Intitulé de la prestation:</p>
                    </div>
                    <div className="flex center w-full px-[8px]">
                    <input type="text" className="w-full border-[2px] border-black rounded-md text-[20px] px-[5px]" value={item.ip} id="1" onChange={change}/>
                    </div>
                    <div className="flex px-[8px]">
                        <div className="flex gap-[50px] w-1/2 items-center">
                            <p>Quantite:</p>
                            <input type="number" className="w-[50px] border-[2px] border-black rounded-md text-[20px] px-[5px]" value={item.qu} id="2" onChange={change}/>
                        </div>
                        <div  className="flex gap-[50px] w-1/2 items-center">
                            <p>Montant:</p>
                            <input type="number" className="w-[50px] border-[2px] border-black rounded-md text-[20px] px-[5px]" value={item.mo} id="3" onChange={change}/>
                        </div>
                    </div>
                    </div>
                    )
                })}
                
            </div>
        </div>
        <div className="w-[402px] min-w-[402px] min-h-[575px] flex flex-col">
                <div className=" w-full h-[25%] flex justify-between">
                    <div className="bg-slate-400 w-[180px] mr-7">logo</div>
                    <div className="w-full text-[12px] text-black">
                    <p>Date de facturation : {information.date}</p>
                    <p>N° Facture : {information.nf}</p>
                    <p>Identité du client : {information.ic}</p>
                    <p>Adresse du client : {information.ac}</p><br />
                    <p>Espèces concernées : {information.espece}</p>
                    <p>ICE : {information.ice}</p>
                    </div>
                </div>
                <div className="bg-white w-full h-[10%] text-black text-[40px] center">Facture</div>
                <div className="w-full h-[50%]">
                <table className="w-full min-h-[220px]">
                    <thead>
                        <tr className="bg-blue-600 text-[15px]">
                            <th>Intitulé de la <br />prestation</th>
                            <th>Quantité</th>
                            <th>Montant.HT <br />( Dh )</th>
                        </tr>
                    </thead>
                    <tbody className="text-black border-b-2 border-black">
                    {itemsNumber.map((item)=>{
                        return(
                        <tr>
                        <td className="max-w-2 break-words text-center">{item.ip}</td>
                        <td className="max-w-2 break-words text-center">{item.qu}</td>
                        <td className="max-w-2 break-words text-center">{item.mo}</td>
                    </tr>)
                    })}
                    </tbody>
                </table>
                <table className="w-full">
        <tbody className="text-black border-b-2 border-black">
            <tr>
                <td className="max-w-2 break-words text-center w-[64%]">John Doecdds</td>
                <td className="max-w-2 break-words text-center">New York</td>
            </tr>
            <tr>
                <td className="max-w-2 break-words text-center">Sam Johnson</td>
                <td className="max-w-2 break-words text-center">Chicago</td>
            </tr>
            
        </tbody>
    </table>
                </div>
                <div className="w-full h-[15%] text-[8px] text-center text-black">
                    <p className="mb-[7px]">Adresse : Apprt.03 – IM. Ibn Khaldoun – AV des FAR – 50010 – Meknès</p>
                    <p className="mb-[7px]">Tél/Fax : 0535528082 - Mobile : 0661146655 - Email : vetkad86@gmail.com</p>
                    <p>
                    Compte Bancaire : Crédit AGRICOLE, Agence Ibn Khaldoun Meknès
                    <br />RIB : 225 480049500098651020396<br />
                    Taxe professionnelle : 17409200 - ICE : 001727943000017 - Identifiant fiscal : 24301170 - CNSS : 6958378
                    </p>
                </div>
                
            </div>
            
            
        </div>
      </div>
    
    </>)
}
export default Facture