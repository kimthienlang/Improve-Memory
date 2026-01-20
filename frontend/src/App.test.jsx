import { describe, it, expect } from 'vitest'
import { add } from './add'

describe('[ test add() :|| ]', () => {
  it('add(1, -55) = 0', () => {
    expect(add(1, -55)).toBe(0)
  })
})
