
import './Assets/App.scss';

// import { BallTriangle } from  'react-loader-spinner'
// <BallTriangle
//   height={100}
//   width={100}
//   radius={5}
//   color="#fff"
//   ariaLabel="ball-triangle-loading"
//   wrapperClass={{}}
//   wrapperStyle=""
//   visible={true}
// />

import React, {useState, useEffect} from 'react';

function App() {

  // Loading screen
  const [isLoading, setLoading] = useState(true);
  
  function onPageLoad() {
    const loaderElement = document.querySelector(".loader-container");
    if (loaderElement) {
      loaderElement.remove();
      setLoading(!isLoading);
    }
  }
  
  useEffect(() => {

    if (document.readyState != "complete") {

      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }

  });

  if (isLoading) { //
    return null;
  }

  // after content is loaded
  return (
    
    <div className="wrapper">

      <div className="mx-auto max-w-screen-xl px-3 py-6 text-white text-center h-full flex items-center justify-center">

        <div className="text-container">

          <div className='font-semibold uppercase text-xl'>One year of free subscription to 👇</div>
          <div className="hero-logo text-6xl md:text-9xl my-5">NETFLIX</div>
          <p className='text-lg font-semibold px-0 md:px-20 lg:px-80'>You only need a valid email address and a US residential address. The offer is available only for this country, at the moment.</p>

          <div className='mt-14 font-semibold'>
            <p>Use the button below to continue to the registration page.</p>

            {/* Button */}
            <div className='mt-8 mb-1'>

              <form role="search" method="post" action="https://smrturl.co/o/477275/53321394?s1=" target="_blank">

                <button className="bg-transparent text-xl uppercase text-white/90 hover:bg-slate-100 font-normal hover:text-gray-600 py-4 px-6 border border-red-500 hover:border-transparent rounded cursor-pointer"
                  href = "https://smrturl.co/o/477275/53321394?s1="
                  target="_blank"
                  type="submit">

                    Click here to continue
                </button>
              </form>
            </div>
          </div>

        </div>
        
      </div>

    </div>

  );
}

export default App;
