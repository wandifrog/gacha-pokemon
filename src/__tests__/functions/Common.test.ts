import { capitalizeEveryWord, gacha } from '../../functions/Common.function'

test('gacha return correctly', () => {
  const gachaResult = expect(gacha())
  try {
    gachaResult.toBe(true)
  } catch (error) {
    gachaResult.toBe(false)
  }
})

test('capitalizeEveryWord return correctly', () => {
  expect(capitalizeEveryWord('batu ampar condet')).toBe('Batu Ampar Condet')
  expect(capitalizeEveryWord(' hellooo ')).toBe('Hellooo')
  expect(capitalizeEveryWord(' haha - hehe ')).toBe('Haha Hehe')
})
