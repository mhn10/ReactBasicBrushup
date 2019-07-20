import * as React from 'react';


const homeContext = {

    searchText: "",
    BreedName: "",
    SearchResult: "",
    BreedResult : "",
    step  : 1,
    dispatch: (action) => action
    
};

export default React.createContext(homeContext);
