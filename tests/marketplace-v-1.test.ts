import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { ChangedOwnerCutPerMillion } from "../generated/schema"
import { ChangedOwnerCutPerMillion as ChangedOwnerCutPerMillionEvent } from "../generated/MarketplaceV1/MarketplaceV1"
import { handleChangedOwnerCutPerMillion } from "../src/marketplace-v-1"
import { createChangedOwnerCutPerMillionEvent } from "./marketplace-v-1-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let ownerCutPerMillion = BigInt.fromI32(234)
    let newChangedOwnerCutPerMillionEvent = createChangedOwnerCutPerMillionEvent(
      ownerCutPerMillion
    )
    handleChangedOwnerCutPerMillion(newChangedOwnerCutPerMillionEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ChangedOwnerCutPerMillion created and stored", () => {
    assert.entityCount("ChangedOwnerCutPerMillion", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ChangedOwnerCutPerMillion",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ownerCutPerMillion",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
