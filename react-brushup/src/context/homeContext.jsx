import * as React from 'react';


const homeContext = {

    searchText: "",
    result: "",
    step  : 1,
    dispatch: (action) => action
    
};

export default React.createContext(homeContext);
