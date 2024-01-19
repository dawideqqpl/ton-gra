import { useTonConnectUI } from '@tonconnect/ui-react';
import { Sender, SenderArguments, address } from '@ton/core';
import { WalletContractV4 } from "@ton/ton";
import TonWeb from "tonweb";
import { useEffect, useState, Component } from 'react';
import Cookies from 'universal-cookie';







export function useTonConnect(): { sender: Sender; connected: boolean } {
  const [tonConnectUI] = useTonConnectUI();
 

  //onst key =  ;

  useEffect(() => {
    // Funkcja sprawdzająca warunek
    document.cookie = '<myCat>=; Max-Age=0;secure;path=/;';

    const checkCondition = () => {
      console.log('Sprawdzam warunek...');
      console.log(tonConnectUI.connected);
    


      // Przykładowy warunek (możesz dostosować go do swoich potrzeb)
      if (tonConnectUI.connected == true) {
        console.log('Warunek spełniony - kończę sprawdzanie.');
        
        const key = JSON.stringify(tonConnectUI.account?.address);
        const cleanedString = key.slice(1, -1);
        
        //localStorage.setItem('items3', cleanedString.toString());
        
        
        const address = new TonWeb.utils.Address(cleanedString);
        
        const cookies = new Cookies();
        cookies.set('myCat', address.toString(true,true,false), { path: '/' });

        let data = localStorage.getItem('data')
        console.log("DATA: " + data);
        if(data == "null"){

        
        window.location.reload();
        }


       // localStorage.setItem('items2', address.toString(true, true, false));
      } else {
        // Warunek nie został spełniony, sprawdzaj ponownie za 2 sekundy
        setTimeout(checkCondition, 2000);
      }
    };

    // Uruchomienie pierwszego sprawdzenia warunku po zamontowaniu komponentu
    checkCondition();

    // Funkcja zwrotna zatrzymująca sprawdzanie warunku po odmontowaniu komponentu
    return () => {
      console.log('Zatrzymuję sprawdzanie warunku.');

     


      
      // Dodaj ewentualne czynności zatrzymujące sprawdzanie, jeśli to konieczne
    };
  }, [tonConnectUI.connected]); // Dodanie warunku do tablicy zależności


 


  // Przykładowy warunek (możesz dostosować go do swoich potrzeb)

 // const walletTest = WalletContractV4.create({ publicKey: key2, workchain: 0 });

  //console.log(walletTest.address.toString({ testOnly: false }));

  //const ton = new TonWeb();

  //const $ = name => document.querySelector(name);
 
   
  
 // const wallnew = tonConnectUI.account?.publicKey?.toString();
 



  return {

    
  
    sender: {
      send: async (args: SenderArguments) => {
        tonConnectUI.sendTransaction({
          messages: [
            {
              address: args.to.toString(),
              amount: args.value.toString(),
              payload: args.body?.toBoc().toString('base64'),
            },
          ],
          validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes for user to approve
        });
      },
    },
    connected: tonConnectUI.connected,
    

  };
}



