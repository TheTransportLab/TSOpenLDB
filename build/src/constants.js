"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ESOAPNamespaces;
(function (ESOAPNamespaces) {
    ESOAPNamespaces["NAMESPACE_LDB"] = "NAMESPACE_LDB";
    ESOAPNamespaces["NAMESPACE_SOAP"] = "NAMESPACE_SOAP";
    ESOAPNamespaces["NAMESPACE_TYPE"] = "NAMESPACE_TYPE";
})(ESOAPNamespaces = exports.ESOAPNamespaces || (exports.ESOAPNamespaces = {}));
exports.NAMESPACE_LDB = "NAMESPACE_LDB";
exports.XMLOpening = `
<${ESOAPNamespaces.NAMESPACE_SOAP}:Envelope
  xmlns:${ESOAPNamespaces.NAMESPACE_SOAP}="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:${ESOAPNamespaces.NAMESPACE_TYPE}="http://thalesgroup.com/RTTI/2013-11-28/Token/types"
  xmlns:${ESOAPNamespaces.NAMESPACE_LDB}="http://thalesgroup.com/RTTI/2017-10-01/ldbsv/"
>
  <${ESOAPNamespaces.NAMESPACE_SOAP}:Header>
    <${ESOAPNamespaces.NAMESPACE_TYPE}:AccessToken>
      <${ESOAPNamespaces.NAMESPACE_TYPE}:TokenValue>$$_TOKEN_$$</${ESOAPNamespaces.NAMESPACE_TYPE}:TokenValue>
    </${ESOAPNamespaces.NAMESPACE_TYPE}:AccessToken>
  </${ESOAPNamespaces.NAMESPACE_SOAP}:Header>
  <${ESOAPNamespaces.NAMESPACE_SOAP}:Body>
`;
exports.XMLClosing = `
  </${ESOAPNamespaces.NAMESPACE_SOAP}:Body>
</${ESOAPNamespaces.NAMESPACE_SOAP}:Envelope>
`;
//# sourceMappingURL=constants.js.map