export const getTotalSupply = `

import BasicNFT from 0x52f09b78c773c412

pub fun main(): UInt64 {
    return BasicNFT.totalSupply
}
`