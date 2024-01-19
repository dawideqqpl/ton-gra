import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from './hooks/useTonConnect';
//import { useCounterContract } from './hooks/useCounterContract';
import '@twa-dev/sdk';
import '@twa-dev/sdk';
import { Unity, useUnityContext } from "react-unity-webgl";








function App() {
  


  const { connected } = useTonConnect();
 

 

  
  const { unityProvider } = useUnityContext({
    loaderUrl: "public/test27.loader.js",
    dataUrl: "public/test27.data",
    frameworkUrl: "public/test27.framework.js",
    codeUrl: "public/test27.wasm",
  });

 

  //localStorage.setItem('items2', address);

  if(connected == true)
  {

  return (
    

   

    <div className='Container'>
      <TonConnectButton />


     
     

    


  </div>


    
  );
  }
}



//export default AppWrapper;
export default App;

