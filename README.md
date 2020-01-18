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

This library is a work in progress, but mostly completed. The interfaces are still in the process of being typed and so some properties which the API returns may throw an error with typescript.  As I'm building an API around this library, I'll publish new versions as I discover missing properties in my own testing or find properties which have incorrect types or child interfaces.

I've done my best to make sure all the calls work as intended, but feel free to open an issue if you have any problems.