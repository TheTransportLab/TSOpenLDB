export enum ESOAPNamespaces {
  NAMESPACE_LDB = "NAMESPACE_LDB",
  NAMESPACE_SOAP = "NAMESPACE_SOAP",
  NAMESPACE_TYPE = "NAMESPACE_TYPE"
}

export const NAMESPACE_LDB = "NAMESPACE_LDB";

export const XMLOpening = 
`
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

export const XMLClosing =
`
  </${ESOAPNamespaces.NAMESPACE_SOAP}:Body>
</${ESOAPNamespaces.NAMESPACE_SOAP}:Envelope>
`;