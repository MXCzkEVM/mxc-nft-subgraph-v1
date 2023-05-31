import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
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
} from "../generated/MarketplaceV1/MarketplaceV1"

export function createChangedOwnerCutPerMillionEvent(
  ownerCutPerMillion: BigInt
): ChangedOwnerCutPerMillion {
  let changedOwnerCutPerMillionEvent = changetype<ChangedOwnerCutPerMillion>(
    newMockEvent()
  )

  changedOwnerCutPerMillionEvent.parameters = new Array()

  changedOwnerCutPerMillionEvent.parameters.push(
    new ethereum.EventParam(
      "ownerCutPerMillion",
      ethereum.Value.fromUnsignedBigInt(ownerCutPerMillion)
    )
  )

  return changedOwnerCutPerMillionEvent
}

export function createChangedPublicationFeeEvent(
  publicationFee: BigInt
): ChangedPublicationFee {
  let changedPublicationFeeEvent = changetype<ChangedPublicationFee>(
    newMockEvent()
  )

  changedPublicationFeeEvent.parameters = new Array()

  changedPublicationFeeEvent.parameters.push(
    new ethereum.EventParam(
      "publicationFee",
      ethereum.Value.fromUnsignedBigInt(publicationFee)
    )
  )

  return changedPublicationFeeEvent
}

export function createMetaTransactionExecutedEvent(
  userAddress: Address,
  relayerAddress: Address,
  functionSignature: Bytes
): MetaTransactionExecuted {
  let metaTransactionExecutedEvent = changetype<MetaTransactionExecuted>(
    newMockEvent()
  )

  metaTransactionExecutedEvent.parameters = new Array()

  metaTransactionExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )
  metaTransactionExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "relayerAddress",
      ethereum.Value.fromAddress(relayerAddress)
    )
  )
  metaTransactionExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "functionSignature",
      ethereum.Value.fromBytes(functionSignature)
    )
  )

  return metaTransactionExecutedEvent
}

export function createOrderCancelledEvent(
  id: Bytes,
  assetId: BigInt,
  seller: Address,
  nftAddress: Address
): OrderCancelled {
  let orderCancelledEvent = changetype<OrderCancelled>(newMockEvent())

  orderCancelledEvent.parameters = new Array()

  orderCancelledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  orderCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "assetId",
      ethereum.Value.fromUnsignedBigInt(assetId)
    )
  )
  orderCancelledEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  orderCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )

  return orderCancelledEvent
}

export function createOrderCreatedEvent(
  id: Bytes,
  assetId: BigInt,
  seller: Address,
  nftAddress: Address,
  priceInWei: BigInt,
  expiresAt: BigInt
): OrderCreated {
  let orderCreatedEvent = changetype<OrderCreated>(newMockEvent())

  orderCreatedEvent.parameters = new Array()

  orderCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "assetId",
      ethereum.Value.fromUnsignedBigInt(assetId)
    )
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "priceInWei",
      ethereum.Value.fromUnsignedBigInt(priceInWei)
    )
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "expiresAt",
      ethereum.Value.fromUnsignedBigInt(expiresAt)
    )
  )

  return orderCreatedEvent
}

export function createOrderSuccessfulEvent(
  id: Bytes,
  assetId: BigInt,
  seller: Address,
  nftAddress: Address,
  totalPrice: BigInt,
  buyer: Address
): OrderSuccessful {
  let orderSuccessfulEvent = changetype<OrderSuccessful>(newMockEvent())

  orderSuccessfulEvent.parameters = new Array()

  orderSuccessfulEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  orderSuccessfulEvent.parameters.push(
    new ethereum.EventParam(
      "assetId",
      ethereum.Value.fromUnsignedBigInt(assetId)
    )
  )
  orderSuccessfulEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  orderSuccessfulEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  orderSuccessfulEvent.parameters.push(
    new ethereum.EventParam(
      "totalPrice",
      ethereum.Value.fromUnsignedBigInt(totalPrice)
    )
  )
  orderSuccessfulEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return orderSuccessfulEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
