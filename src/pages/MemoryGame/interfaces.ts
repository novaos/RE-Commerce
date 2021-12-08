export interface ICard {
    src: string
    matched: boolean
    id: number
  }

export interface ISingleCard {
    card: ICard
    turned: boolean
    handleClick: (card: ICard) => void
  }