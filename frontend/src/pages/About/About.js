import React,{useRef,useEffect, useState} from 'react'
import { Helmet } from 'react-helmet';
import {Image} from '@chakra-ui/react'
import HashLoader from "react-spinners/HashLoader";
import './aboutcss.css'
const About = () => {
    const Line = useRef(null);
    const text = useRef(null);
    useEffect(() => {
                setTimeout(() =>{
        Line.current.classList.add('lineon')
        text.current.classList.add('titleon');
        },5)


        return () => {

        }
    },[])
    return (
        

        
        <>
        <Helmet>
            <title>About</title>
        </Helmet>


            <div className='headingA'>
                <div className = 'line' ref={Line}>
                </div>
                <h1 className ='title' ref={text}>About Us</h1>
            </div>
            <div className='Content1'>
                <div className = 'text'>
                    <h1>
                        Why?
                    </h1>
                <p>"Why Atlanta" is a unique restaurant located in Surat, Gujarat, that takes its name from the vibrant and cosmopolitan city of Atlanta, Georgia in the United States. The restaurant aims to bring a slice of Atlanta's culture, diversity, and culinary excellence to the people of Surat.<br></br><br></br>

Atlanta is known for its rich history, stunning skyline, and thriving food scene. The city is home to a melting pot of cultures and cuisines, making it a foodie's paradise. Inspired by this, the creators of "Why Atlanta" decided to name their restaurant after the city in honor of its diverse food culture.<br></br><br></br>

At "Why Atlanta," customers can expect to indulge in an array of delicious and innovative dishes that showcase the best of Atlanta's culinary scene. From Southern-style fried chicken to mouthwatering barbecue, the menu is designed to offer a unique dining experience that is both authentic and exciting.<br></br><br></br>

Overall, "Why Atlanta" is a must-visit restaurant for anyone looking to savor the flavors of Atlanta while in Surat. With its eclectic menu, stylish decor, and warm hospitality, this restaurant is the perfect destination for food lovers, families, and friends alike.</p>
                </div>
               
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://images.unsplash.com/photo-1453301109223-3e2085a1e69d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80' alt="Why Atlanta"/>
                    </div>
                   </div>
            </div>
            <div className ='Content2'>
                   
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://images.unsplash.com/photo-1541291619332-8d0ce63863f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80' alt="How Atlanta"/>
                    </div>
                   </div>
                   <div className = 'text'>
                    <h1>
                        How?
                    </h1>
                <p>The name "Why Atlanta" was chosen for our restaurant located in Surat as it pays homage to the vibrant and bustling city of Atlanta in the United States. The founders of the restaurant were inspired by the energy and diversity of Atlanta and sought to bring a similar vibe to their establishment in Surat. Through its name, "Why Atlanta" aims to evoke a sense of excitement, adventure, and culinary innovation, all of which are integral to the city of Atlanta's rich cultural identity. We hope that our restaurant lives up to its name and provides our customers with an unforgettable dining experience that captures the spirit of both Atlanta and Surat. <br></br><br></br>
                
                In addition to its vibrant and diverse culture, Atlanta is also known for its thriving culinary scene, with a plethora of restaurants offering innovative and delicious cuisine. The founders of "Why Atlanta" were inspired by this aspect of the city and sought to create a restaurant that would offer a similar level of culinary excellence and innovation.
                
                
                
                
                </p>
                </div>
            </div>
        </>
    
    )
}

export default About
