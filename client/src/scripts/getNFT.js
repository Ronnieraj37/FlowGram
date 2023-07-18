export const getNFT = `

import BasicNFT from 0x52f09b78c773c412

pub fun main(account : Address): AnyStruct {

  let publicReference = getAccount(account).getCapability(/public/BasicNFTPath)
                                            .borrow<&BasicNFT.NFT{BasicNFT.NFTPublic}>()
                                            ?? panic("No NFT Reference Found")
  return [publicReference.getID(),publicReference.getURL()]
}
`