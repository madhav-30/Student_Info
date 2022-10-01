import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import TusharGupta from "../Images/TusharGupta.jpg"
import AdityaSharma from "../Images/AdityaSharma.jpg"
import SudhanshuSharma from "../Images/SudhanshuSharma.jpg"
import AgneyaPathare from '../Images/AgneyaPathare.jpg'
import RitikSharma from '../Images/RitikSharma.jpg'
import PriyanshuSingh from '../Images/Priyanshu singh.png'
import AnkushMaji from "../Images/AnkushMaji.jpg"


export default function Home() {
  return (
    <div >
      <Head>
        <title>Hacktober students </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' flex gap-8 justify-center flex-wrap min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 md:p-5'>
       
      

        <Card image={TusharGupta}name = "Tushar Gupta" about="jai shree ram. keep chilling " instagram= "https://www.instagram.com/trust_afk/"  twitter="https://twitter.com/ohh_hii_tusharr" linkedin="https://www.linkedin.com/in/tushar-gupta-10a151202/"/>
      
       
        <Card image={AdityaSharma}name = "Aditya Sharma" about="future billionaire abhi gareeb hu." instagram= "https://www.instagram.com/iaddy29/"  twitter="https://twitter.com/iaddy29" linkedin="https://www.linkedin.com/in/aditya-sharma-2b4a64222/"/>
       

       <Card image={SudhanshuSharma}name = "Sudhanshu Sharma" about="dm for fun" instagram= "https://www.instagram.com/cpt_n3m0_22/"  twitter="https://twitter.com/Sudhanshu226922" linkedin="https://www.linkedin.com/in/sudhanshu-sharma-9376931b7/"/>
        
       
        <Card image={AnkushMaji}name = "Ankush Maji" about="First Hacktoberfest" instagram="https://www.instagram.com/101ankush/" twitter="" linkedin="https://www.linkedin.com/in/ankush-maji-11555622a/"/>

       
        <Card image={AgneyaPathare}name = "Agneya Pathare" about="Digital Creator" instagram= "https://www.instagram.com/agneya_pathare/"  twitter="https://twitter.com/agneya_pathare" linkedin="https://www.linkedin.com/in/agneya-pathare"/>
          
       
         <Card image={RitikSharma}name = "Ritik Sharma" about="Life is a Myth" instagram= "https://www.instagram.com/i_am_ritik_sharma_/"  twitter="https://twitter.com/RitikSh85448549" linkedin="https://www.linkedin.com/in/ritik-sharma-aa0282224/"/>
 
       
        <Card image={PriyanshuSingh}name = "Priyanshu Singh" about="Amaterasu!" instagram= "https://www.instagram.com/akapriyanshu.dev/"  twitter="https://twitter.com/akapriyanshudev" linkedin="https://www.linkedin.com/in/akapriyanshudev"/>


      </main>


    </div>
  )
}
