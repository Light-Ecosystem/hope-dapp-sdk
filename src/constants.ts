import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  GOERLI = 5,
  SEPOLIA = 11155111,
  HOPE = 1337
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS_MAP:{[chainId: number]: string} = {
  [ChainId.MAINNET]: '0xE4dC7Df7F3eD4C6CF046760D13AA17E829C82EE9',
  [ChainId.GOERLI]: '0xE4dC7Df7F3eD4C6CF046760D13AA17E829C82EE9',
  [ChainId.SEPOLIA]: '0xE4dC7Df7F3eD4C6CF046760D13AA17E829C82EE9',
  [ChainId.HOPE]: '0xE4dC7Df7F3eD4C6CF046760D13AA17E829C82EE9'
}

export const INIT_CODE_HASH_MAP:{[chainId: number]: string} = {
  [ChainId.MAINNET]: '0x8c587edc53bd0ef93b6b0e6bc4ac8b7831808aa02c4f97fac3ccf1dd34d95b35',
  [ChainId.GOERLI]: '0x8c587edc53bd0ef93b6b0e6bc4ac8b7831808aa02c4f97fac3ccf1dd34d95b35',
  [ChainId.SEPOLIA]: '0x8c587edc53bd0ef93b6b0e6bc4ac8b7831808aa02c4f97fac3ccf1dd34d95b35',
  [ChainId.HOPE]: '0x8c587edc53bd0ef93b6b0e6bc4ac8b7831808aa02c4f97fac3ccf1dd34d95b35'
}

export const FACTORY_ADDRESS = '0xE4dC7Df7F3eD4C6CF046760D13AA17E829C82EE9'

export const INIT_CODE_HASH = '0x8c587edc53bd0ef93b6b0e6bc4ac8b7831808aa02c4f97fac3ccf1dd34d95b35'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
