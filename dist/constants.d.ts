import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 1,
    GOERLI = 5,
    SEPOLIA = 11155111,
    HOPE = 1337
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS_MAP: {
    [chainId: number]: string;
};
export declare const INIT_CODE_HASH_MAP: {
    [chainId: number]: string;
};
export declare const FACTORY_ADDRESS = "0x7232fAF99404a9fBFD0f183734f7F4FAd8c85728";
export declare const INIT_CODE_HASH = "0x0fe0976a8394a59cb43ce8ed266ed3ad7b48c0538114ef1bea17c3f7f4138f2c";
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
