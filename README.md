# TSOpenLDB
 A typescript library for interacting with the UK National Rail OpenLDBSV (staff) web service

**API Registration:** http://openldbsv.nationalrail.co.uk/
**API Documentation:** https://lite.realtime.nationalrail.co.uk/OpenLDBSVWS/

Library documentation coming soon!

##### Basic Usage Example

    const OpenLDB = new TSOpenLDB({apiKey: "YOUR_API_KEY_HERE"});
    OpenLDB.GetFastestDeparturesWithDetails({crs: "LDS", filterList: ["WOM", "ELR"], services: EServices.TRAIN, time: new Date()});