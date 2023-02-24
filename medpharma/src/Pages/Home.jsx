import React from 'react'
import { useState ,useEffect } from 'react'
import { Stack, HStack, VStack ,Image, Box ,Text, Button} from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import Squarecard from '../Components/smallCards/Squarecard'
import MedCard from '../Components/smallCards/MedCard'
import CircleCard from '../Components/smallCards/CircleCard'
import { IoIosArrowBack ,IoIosAlarm} from "react-icons/io";
import { PhoneIcon, AddIcon, WarningIcon ,ArrowLeftIcon,ArrowRightIcon} from '@chakra-ui/icons'

const data1 = ["https://onemg.gumlet.io/27b7d1ab-d183-41cc-8999-a9af39af1665_1661244546.jpg?w=842&h=200&format=auto","https://onemg.gumlet.io/a_ignore,w_842,h_200,c_fit,q_auto,f_auto/04f86c00-b46d-436d-9e49-52ad2c0d12b4.png","https://onemg.gumlet.io/c5f3c1f9-7a36-41c7-9197-a67c4c9f215a_1667585763.png?w=842&h=200&format=auto","https://onemg.gumlet.io/a_ignore,w_842,h_200,c_fit,q_auto,f_auto/912f861c-6250-47b6-b643-92e3b5e1fce0.png","https://onemg.gumlet.io/46b33653-b14c-4708-b379-1dfb903bacab_1674801336.jpg?w=842&h=200&format=auto" ,"https://onemg.gumlet.io/1665f215-177c-4b5b-8416-447f9de1e5d8_1676449749.jpg?w=842&h=200&format=auto"]
const healthConcern = [{
  img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c2a0598f-483c-48ff-9783-71e402aa28d3.png",
  name:"Diabitic care"
},
{
  img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ab1da5f4-c074-47d2-b278-a5fbd2c93f1f.png",
  name:"Cardiac care"
},
{
  img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/702457a8-ff7d-43a6-bd1d-6bcb278ce686.png",
  name:"Stomach care"
},
{
  img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/995e64ba-5bd9-42bc-8db6-5dc0b821c89d.png",
  name:"Liver care"
},

{
  img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e77d5099-d905-4462-ab9d-b51802e3739b.png",
  name:"Kidney care"
},{
  img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/6f9a726a-4a98-42e6-a834-67381be5e330.png",
  name:"Derma care"
},{
  img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/4a788b46-97f3-460e-afb6-428368f779ee.png",
  name:"Respiratory care"
},{
  img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/631e3dca-3d5b-49f8-832b-8341ec4784e7.png",
  name:"Eye care"
}]
const brands = [{img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/d0616fcf-6d6d-47ca-b538-1cf18b400e7e.png" , name :"Complan"},
{img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/a9535d82-1e1f-49bb-8f18-602d2a1be172.png" , name :"Zandu"},
{img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/42799828-7310-4dbb-a97d-8b0455d2026c.png" , name :"Dabur"},
{img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/d76b9aef-549c-469b-90ef-703f01da71f4.png" , name :"Dr. Wilmar"},
{img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/21dcb5bd-a5d1-4ce6-932a-f5bb376a23fe.png" , name :"Protinex"},
{img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/f68ca832-4952-4389-b1bd-b32f41830b12.png" , name :"OneTouch"},
{img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/7b82e3fa-43e9-4718-8d5d-18d226bdcdf5.png" , name :"Baidyanath"},
{img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/8b77c71c-4e7b-48c5-94d6-811748118d10.png" , name :"Tejsya"},

]


let i=0;
const Home = () => {

  const [isLoading ,setLoading] = useState(false);
  const [err,setErr] = useState(false) ; 
  const [products ,setProducts] =useState([]);
  const [page,setPage] = useState(1)

 useEffect(()=>{
   fetch(`https://medpharma.onrender.com/med1?_limit=6&_page=${page}`)
   .then((res)=>res.json())
   .then((data)=>setProducts(data))
 },[page])


  return (

    <div style={{border :"1px solid black" ,width:"100%"}}>
<Navbar/>
{/* body section  */}

<Stack direction={"row"} gap="0">
<Box>



<Image src= {data1[i]} />
  
{/* <Image  src='https://onemg.gumlet.io/1665f215-177c-4b5b-8416-447f9de1e5d8_1676449749.jpg?w=842&h=200&format=auto' alt='Dan Abramov' /> */}
</Box> <Box><Image src='https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/1caa64c3-60f0-4c9d-ab85-4fc9a49769c3.png' alt='Dan Abramov' />
</Box>
</Stack>
<Box marginTop={"25px"} marginBottom={"25px"}>
<Text fontSize='2xl' >Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</Text>
</Box>
<Box>
<Image width={"95%"} margin="auto" src='https://onemg.gumlet.io/marketing/29087450-0f25-4856-96fc-62f4ea81bbd3.png' />
</Box>

{/* health section  */}

<Text fontSize={"md"} >Shop By Health Concern </Text>
<Box style={{display : "grid" , gridTemplateColumns : "Repeat(8 ,1fr)" ,gap:"3px"}}>
{healthConcern.map((el) =><Squarecard key={el.id} name = {el.name} img={el.img}/>)}
</Box>

{/* brand section  */}
<Text fontSize={"md"} >Shop By Health Concern </Text>
<Box style={{display : "grid" , gridTemplateColumns : "Repeat(8 ,1fr)" ,gap:"10px"}}>
{brands.map((el) =><CircleCard key={el.id} name = {el.name} img={el.img}/>)}
</Box>

{/* data section  */}
<Text fontSize={"md"} >Shop By Health Concern </Text>
<Box>
  
  <Button onClick={()=>setPage(page-1)}disabled={page==1} >{<ArrowLeftIcon/>}</Button>
   <Box style={{display : "grid" , gridTemplateColumns : "Repeat(6 ,1fr)" ,gap:"10px"}}>
      {products.map((el) =><MedCard key={el.id} id={el.id} name = {el.name} img={el.image} category={el.category} price={el.price}/>)}
   </Box>
   <Button onClick={()=>setPage(page+1)}disabled={page==10}>{<ArrowRightIcon/>}</Button>
</Box>

    </div>
  )
}

export default Home