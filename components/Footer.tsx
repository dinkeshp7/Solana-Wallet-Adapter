import { ExternalLink } from "lucide-react"

export const Footer = ()=>{
  return <footer>
    <div className=" text-gray-500 fixed bottom-2 p-2 flex justify-end">
      Made by <a target="_blank" href="https://github.com/dinkeshp7/Solana-Wallet-Adapter" className=" hover:scale-110 transition-all duration-500 hover:text-slate-300 hover:ml-3 ml-1"> dinkeshp7 <ExternalLink size={20} className={` inline  ml-1`}/> </a>
    </div>
  </footer>
}