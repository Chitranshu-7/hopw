import ChatBot from "react-simple-chatbot";
import React from "react";
import Navbar from "./Navbar";

function Chatgrow() {
  return (
    <>
   
    <Navbar/>
    <div className="text-gray-500 flex justify-center mt-20">
   <ChatBot
  headerTitle="Rajasthan Police Chat"
  speechSynthesis={{ enable: true, lang: 'en' }}
  steps={[

    {
        id: '0',
        message: 'Welcome',
        trigger: '1',

    },
    {
      id: '1',
      message: 'What is your name?',
      trigger: '12',
    },
    {
      id: '12',
      user: true,
      trigger: '13',
    },
    {
      id: '13',
      message: 'Hi {previousValue}, nice to meet you!',
      trigger: '14'
    },
    {
        id: '14',
        message: 'Greetings from the Rajasthan Police. We are here to assist you.',
        trigger: '3',
      },
     
     
      {
        id:'3',
        component: (
            <div> <a href="https://police.rajasthan.gov.in/citizen/login.htm?lang=hi_IN&stov=355C-0XSJ-T9BA-9L0C-KH9K-ABPP-FYAA-7CFP"> file complaint</a> </div>
          ),
          asMessage:true,
          
          trigger:'4'
      }
      ,
      {
        id:'4',
        component:(
            <div><a href="https://police.rajasthan.gov.in/citizen/login.htm?lang=hi_IN&stov=355C-0XSJ-T9BA-9L0C-KH9K-ABPP-FYAA-7CFP"> register FIR for vehical theft</a></div>
        ) ,
        asMessage:true
        ,
        trigger:'5'
      },
      {
        id:'5',
       component:(
        <div><a href="https://www.police.rajasthan.gov.in/old/crimeinformation.aspx?lb=2">anonymously report any serious crime</a></div>
       ),
       asMessage:true,
       trigger:'6'
      },
      {
        id:'6',
        message:'in case of emergency call 112',
        end:true
      }
  ]}
/>
    </div>
    </>
  );
}

export default Chatgrow;
