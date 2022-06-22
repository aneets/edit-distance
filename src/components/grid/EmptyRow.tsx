import { endWord } from '../../lib/words'
import { Cell } from './Cell'

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(endWord.length))

  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
