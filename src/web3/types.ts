export type ResourceId = {
  baseUrl: string
  path: string
  orgId: string
  role: string
  extraData: string
}

export type AccessControlConditions = {
  contractAddress: string
  standardContractType: string
  chain: string
  method: string
  parameters: string[]
  returnValueTest: {
    comparator: string
    value: string
  }
}
