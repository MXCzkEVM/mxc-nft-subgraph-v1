import {
  ChangedOwnerCutPerMillion as ChangedOwnerCutPerMillionEvent,
  ChangedPublicationFee as ChangedPublicationFeeEvent,
  MetaTransactionExecuted as MetaTransactionExecutedEvent,
  OrderCancelled as OrderCancelledEvent,
  OrderCreated as OrderCreatedEvent,
  OrderSuccessful as OrderSuccessfulEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  Unpaused as UnpausedEvent
} from "../generated/MarketplaceV1/MarketplaceV1"
import {
  ChangedOwnerCutPerMillion,
  ChangedPublicationFee,
  MetaTransactionExecuted,
  OrderCancelled,
  OrderCreated,
  OrderSuccessful,
  OwnershipTransferred,
  Paused,
  Unpaused
} from "../generated/schema"

export function handleChangedOwnerCutPerMillion(
  event: ChangedOwnerCutPerMillionEvent
): void {
  let entity = new ChangedOwnerCutPerMillion(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.ownerCutPerMillion = event.params.ownerCutPerMillion

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChangedPublicationFee(
  event: ChangedPublicationFeeEvent
): void {
  let entity = new ChangedPublicationFee(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.publicationFee = event.params.publicationFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMetaTransactionExecuted(
  event: MetaTransactionExecutedEvent
): void {
  let entity = new MetaTransactionExecuted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddress = event.params.userAddress
  entity.relayerAddress = event.params.relayerAddress
  entity.functionSignature = event.params.functionSignature

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderCancelled(event: OrderCancelledEvent): void {
  let entity = new OrderCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.MarketplaceV1_id = event.params.id
  entity.assetId = event.params.assetId
  entity.seller = event.params.seller
  entity.nftAddress = event.params.nftAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderCreated(event: OrderCreatedEvent): void {
  let entity = new OrderCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.MarketplaceV1_id = event.params.id
  entity.assetId = event.params.assetId
  entity.seller = event.params.seller
  entity.nftAddress = event.params.nftAddress
  entity.priceInWei = event.params.priceInWei
  entity.expiresAt = event.params.expiresAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderSuccessful(event: OrderSuccessfulEvent): void {
  let entity = new OrderSuccessful(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.MarketplaceV1_id = event.params.id
  entity.assetId = event.params.assetId
  entity.seller = event.params.seller
  entity.nftAddress = event.params.nftAddress
  entity.totalPrice = event.params.totalPrice
  entity.buyer = event.params.buyer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
