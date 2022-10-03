import React from 'react';

import TendrilAnimation from 'components/Tendril';

function App() {
   const trails = 30;

   const settings = {
      bg: '#ffffff',
      compositeOperation: 'darken' as GlobalCompositeOperation,
      // color,
      // debug: false,
      //   size: 50,
      // friction: 0.5,
      // dampening: 0.25,
      // tension: 0.1,
   };

   return (
      <div>
         <TendrilAnimation trails={trails} settings={settings} />
      </div>
   );
}

export default App;
