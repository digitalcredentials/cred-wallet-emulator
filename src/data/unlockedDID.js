let unlockedDidDocument =
{
  id: "did:web:digitalcredentials.github.io",
  publicKey: [
    {
      id: "did:web:digitalcredentials.github.io#96K4BSIWAkhcclKssb8yTWMQSz4QzPWBy-JsAFlwoIs",
      type: "JsonWebKey2020",
      controller: "did:web:digitalcredentials.github.io",
      publicKeyJwk: {
        kid: "96K4BSIWAkhcclKssb8yTWMQSz4QzPWBy-JsAFlwoIs",
        kty: "OKP",
        crv: "Ed25519",
        x: "NCqHLgxwYX0GJO2phSUBHZ-w0Tr5sblr7bCZHZ2ld_I"
      },
      privateKeyJwk: {
        kid: "96K4BSIWAkhcclKssb8yTWMQSz4QzPWBy-JsAFlwoIs",
        kty: "OKP",
        crv: "Ed25519",
        x: "NCqHLgxwYX0GJO2phSUBHZ-w0Tr5sblr7bCZHZ2ld_I",
        d: "dp3-PUAIbYgyHSrCJtelS0vTrkBGMcqOulYmEi_QPmI"
      }
    }
  ],
  authentication: [
    "did:web:digitalcredentials.github.io#96K4BSIWAkhcclKssb8yTWMQSz4QzPWBy-JsAFlwoIs"
  ],
  assertionMethod: [
    "did:web:digitalcredentials.github.io#96K4BSIWAkhcclKssb8yTWMQSz4QzPWBy-JsAFlwoIs"
  ],
  capabilityDelegation: [
    "did:web:digitalcredentials.github.io#96K4BSIWAkhcclKssb8yTWMQSz4QzPWBy-JsAFlwoIs"
  ],
  capabilityInvocation: [
    "did:web:digitalcredentials.github.io#96K4BSIWAkhcclKssb8yTWMQSz4QzPWBy-JsAFlwoIs"
  ]
}

unlockedDidDocument['@context'] = "https://www.w3.org/ns/did/v1"

console.log(unlockedDidDocument)
export default unlockedDidDocument