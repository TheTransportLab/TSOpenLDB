# TSOpenLDB

A typescript library for interacting with the UK National Rail OpenLDBSV (staff) web service

**API Registration:** http://openldbsv.nationalrail.co.uk/

**API Documentation:** https://lite.realtime.nationalrail.co.uk/OpenLDBSVWS/

**Library documentation:** https://thetransportlab.github.io/TSOpenLDB/

Library documentation also found in the **/docs** folder

### Install

```
yarn add @thetransportlab/tsopenldb
```

### New in version 2

 - Test suite
 - Complete interfaces for arguments and responses
 - Functional and class approaches
 - Significantly reduced number of libraries

### Basic Usage Example

The library provides class and functional approaches for usage. The class approach allows you to specify your API key only once, while the functional approach requires you to provide your API key with each call.

**Important:** We provide a function to get the current valid timestamp - `getLondonTimeViaTemporal()`. This accepts 1 optional parameter to specify the number of minutes to offset by. In the class-based approach, you can set this during `new` (see example below), or by calling `timeOffsetInMinutes(<offset in minutes as number>)` on an instance of the class.

This example will retrieve the arrival and departure board for Leeds (station CRS is `LDS`) for 10 minutes in the past.

**Class approach**
```ts
    const apiKey = "ADD_YOUR_API_KEY";
    import TSOpenLDB from "@thetransportlab/tsopenldb";
    const { TSOpenLDBSV } = TSOpenLDB

    const RunFn = async () => {
        const ldb = new TSOpenLDBSV({ apiKey, timeOffsetInMinutes: -10 });
        const data = await ldb.GetArrivalDepartureBoardByCRS({
            crs: "LDS",
        });
        console.log({ data });

        // You could now call ldb.timeOffsetInMinutes(30) and make a new call to get services 30 minutes in the future from now
    };

    RunFn();
```

**Functional approach**
```ts
    const apiKey = "ADD_YOUR_API_KEY";
    import TSOpenLDB from "@thetransportlab/tsopenldb";
    const { GetArrivalDepartureBoardByCRS, getLondonTimeViaTemporal } = TSOpenLDB;

    const RunFn = async () => {
        const data = await GetArrivalDepartureBoardByCRS({
            apiKey,
            time: getLondonTimeViaTemporal(-10),
            args: {
                crs: "LDS",
            },
        });
        console.log({ data });
    };

    RunFn();
```

### Notes

Version 2 of this library is a complete rewrite from the ground up and is **NOT** compatible with previous versions. All functions which were working (based upon available documentation) at time of development have interfaces generated for responses and required arguments.

All functions which take arguments apply sensible default values where appropriate. This is because the API will often return an error if fields are missing. You can override the defaults inside the `args` object of a call.

Version 2 of this library makes use of the `@js-temporal/polyfill` in order to generate valid timestamps used by several calls. Although the temporal feature is still in stage 3 proposal, I felt it worthwhile to bring in the functionality in order to better improve the reliability of timestamps. This also allowed me to remove a number of different libraries that were being used to achieve this functionality in version 1.

### Why?

Over the years, there have been a few libraries which implement support for the OpenLDB service, but not many of them correctly supported the staff service (OpenLDBSV).

This library provides a nice wrapper around the API calls and is designed to provide a super-flexible approach and ease of implementation. It doesn't modify the results that the API returns, so reading the documentation linked at the top of this readme is advised.