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
  [ChainId.MAINNET]: '',
  [ChainId.GOERLI]: '0xF2344563F520Fa366b35F0fED7F868AdEb5B7789',
  [ChainId.SEPOLIA]: '0x4B6cA9c75b38B2c0d282bAd5A6295a21069De50a',
  [ChainId.HOPE]: ''
}

export const INIT_CODE_HASH_MAP:{[chainId: number]: string} = {
  [ChainId.MAINNET]: '',
  [ChainId.GOERLI]: '0x5df56819f9ea3fa82908f37ada1a8a2b88ea2dcea442be7f6db157f5a1e7ed7b',
  [ChainId.SEPOLIA]: '0x5df56819f9ea3fa82908f37ada1a8a2b88ea2dcea442be7f6db157f5a1e7ed7b',
  [ChainId.HOPE]: ''
}

export const FACTORY_ADDRESS = '0x4B6cA9c75b38B2c0d282bAd5A6295a21069De50a'

export const INIT_CODE_HASH = '0x5df56819f9ea3fa82908f37ada1a8a2b88ea2dcea442be7f6db157f5a1e7ed7b'

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
