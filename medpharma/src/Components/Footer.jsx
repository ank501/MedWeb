import { Box ,Divider,HStack,Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <Box style={{background:"#fff4e6" ,padding:"40px" ,lineHeight:"40px" ,margin:"20px 0px"}}>
            <Text fontSize="xl" fontWeight={"bold"} textAlign="left" >Stay Healthy with Tata 1mg: Your Favourite Online Pharmacy and Healthcare Platform</Text>
            <Text fontSize="lg" fontWeight={"bold"} textAlign="left" >We Bring Care to Health.</Text>
            <Text fontSize="md"  textAlign="left" >Tata 1mg is India's leading digital healthcare platform. From doctor consultations on chat to online pharmacy and lab tests at home: we have it all covered for you. Having delivered over 25 million orders in 1000+ cities till date, we are on a mission to bring "care" to "health" to give you a flawless healthcare experience.</Text>
            <Text fontSize="lg" fontWeight={"bold"} textAlign="left" >Tata 1mg: Your Favourite Online Pharmacy!</Text>
            <Text fontSize="md"  textAlign="left" >Tata 1mg is India's leading online chemist with over 2 lakh medicines available at the best prices. We are your one-stop destination for other healthcare products as well, such as over the counter pharmaceuticals, healthcare devices and homeopathy and ayurveda medicines.</Text>
            <Text fontSize="md"  textAlign="left" >With Tata 1mg, you can buy medicines online and get them delivered at your doorstep anywhere in India! But, is ordering medicines online a difficult process? Not at all! Simply search for the products you want to buy, add to cart and checkout. Now all you need to do is sit back as we get your order delivered to you.</Text>
        </Box>
        <Divider/>
    
        <Box>
            <Text fontSize={"2xl"}>INDIA’S LARGEST HEALTHCARE PLATFORM</Text>
            <HStack style={{justifyContent : "space-around" ,marginTop:"20px", marginBottom : "20px"}}>
              <VStack>
                <Text fontSize={"4xl"} fontWeight={"bold"} >260m+</Text>
                <Text fontSize={"2xl"}v>Visitors</Text>
              </VStack>
              <VStack>
                <Text fontSize={"4xl"} fontWeight={"bold"} >344m+</Text>
                <Text fontSize={"2xl"}v>Order Delivered</Text>
              </VStack>
              <VStack>
                <Text fontSize={"4xl"} fontWeight={"bold"} >1800+</Text>
                <Text fontSize={"2xl"}v>Cities</Text>
              </VStack>
            </HStack>
        </Box>
        <Divider/>


    </div>
  )
}

export default Footer