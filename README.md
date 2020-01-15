# TSOpenLDB
 A typescript library for interacting with the UK National Rail OpenLDBSV (staff) web service

**API Registration:** http://openldbsv.nationalrail.co.uk/
**API Documentation:** https://lite.realtime.nationalrail.co.uk/OpenLDBSVWS/

**Library documentation:** https://chronsyn.github.io/TSOpenLDB/
Also found in the **/docs** folder

##### Basic Usage Example

    const apiKey = "ADD_YOUR_API_KEY";
    import OpenLDB, { ITSOpenLDB } from "tsopenldb";
    const LDB: ITSOpenLDB = new OpenLDB({apiKey});

    // You can use async-await or .then()
    // You should add error handling in any case, as it will throw if it can't contact the API or the API returns an error (e.g. status code !== 200)
    const requestConfig = {
        crs: "LDS",
        numRows: 150,
        time: new Date()
    };
    LDB.getDepartureBoardByCRS(requestConfig)
        .then((data) => console.log(data));
    


##### Why?

There already exist several libraries which implement support for the calls (though many of them only support the non-staff endpoint) but none of them provide information on the responses. Essentially, they offer a way of creating a SOAP response and parsing the XML to JSON. To date, my library is the only one that serves this purpose and also supports typescript.

Sure, I could have created a `.d.ts` file for an existing library, but why not try and do better?

##### Developer Notes

As of 15 January 2020, this library is mostly complete. Interfaces for most of the API calls are complete.
Interfaces for API responses are mostly implemented, but be aware that there may be some discrepencies between the response and the interface here. This is due to a lack of accurate, up-to-date information that's easy to access.
For all intents and purposes, you can mostly trust the interfaces, but it would still be recommended to check and responses that are returned from the API.

PR's which add significant value are welcome.