export const NUMBER_TRIES = "NUMBER_TRIES"

export const tries = (number) => {
  return {
    type: NUMBER_TRIES,
    payload: number - 1

  }
}
