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
  [ChainId.MAINNET]: '0x7232fAF99404a9fBFD0f183734f7F4FAd8c85728',
  [ChainId.GOERLI]: '0x7232fAF99404a9fBFD0f183734f7F4FAd8c85728',
  [ChainId.SEPOLIA]: '0x7232fAF99404a9fBFD0f183734f7F4FAd8c85728',
  [ChainId.HOPE]: '0x7232fAF99404a9fBFD0f183734f7F4FAd8c85728'
}

export const INIT_CODE_HASH_MAP:{[chainId: number]: string} = {
  [ChainId.MAINNET]: '0x0fe0976a8394a59cb43ce8ed266ed3ad7b48c0538114ef1bea17c3f7f4138f2c',
  [ChainId.GOERLI]: '0x0fe0976a8394a59cb43ce8ed266ed3ad7b48c0538114ef1bea17c3f7f4138f2c',
  [ChainId.SEPOLIA]: '0x0fe0976a8394a59cb43ce8ed266ed3ad7b48c0538114ef1bea17c3f7f4138f2c',
  [ChainId.HOPE]: '0x0fe0976a8394a59cb43ce8ed266ed3ad7b48c0538114ef1bea17c3f7f4138f2c'
}

export const FACTORY_ADDRESS = '0x7232fAF99404a9fBFD0f183734f7F4FAd8c85728'

export const INIT_CODE_HASH = '0x0fe0976a8394a59cb43ce8ed266ed3ad7b48c0538114ef1bea17c3f7f4138f2c'

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
