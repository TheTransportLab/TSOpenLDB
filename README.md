# TSOpenLDB
 A typescript library for interacting with the UK National Rail OpenLDBSV (staff) web service


##### Usage Example

    const X = new TSOpenLDB({apiKey: "YOUR_API_KEY_HERE"});
    X.GetFastestDeparturesWithDetails({crs: "LDS", filterList: ["WOM", "ELR"], services: EServices.P, time: new Date().toISOString()});