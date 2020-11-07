import React from 'react';

const authcontext = React.createContext({
   con_authenticated : false,
   con_login : () => {}
});

export default authcontext;