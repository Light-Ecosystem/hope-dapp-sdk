import invariant from 'tiny-invariant'
import { ChainId } from '../constants'
import { validateAndParseAddress } from '../utils'
import { Currency } from './currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainId
  public readonly address: string

  public constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string) {
    super(decimals, symbol, name)
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}

export const WETH = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapper ETH'),
  [ChainId.GOERLI]: new Token(ChainId.GOERLI, '0x6Cc53D3AeaEe7aAfbd2Ac304AA64d017E6cb4f2a', 18, 'WETH', 'Wrapper ETH'),
  [ChainId.SEPOLIA]: new Token(ChainId.SEPOLIA, '0xE55a23aaFb3a712BFae5BE96E0f61C745dedf33C', 18, 'WETH', 'Wrapper ETH'),
  [ChainId.HOPE]: new Token(ChainId.HOPE, '0xee44150250AfF3E6aC25539765F056EDb7F85D7B', 18, 'WETH', 'Wrapper ETH'),
  // [ChainId.BASE]: new Token(ChainId.BASE, '0x9eF26B39208793Fa900d3ff4e39f344Ba117A96F', 18, 'WETH', 'Wrapper ETH'),
  [ChainId.BASE_GOERLI]: new Token(ChainId.HOPE, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapper ETH'),
  // [ChainId.ARBITRUM]: new Token(ChainId.HOPE, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'Wrapper ETH'),
  [ChainId.ARBITRUM_GOERLI]: new Token(ChainId.HOPE, '0xe39ab88f8a4777030a534146a9ca3b52bd5d43a3', 18, 'WETH', 'Wrapper ETH'),
}
