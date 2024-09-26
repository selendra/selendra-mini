import { CheckCircle } from 'lucide-react'

interface TaskProps {
  id: string
  title: string
  points: number
  isCompleted: boolean
  onComplete: () => void
  isRepeatable?: boolean
  actionLabel?: string
}

export default function Task({
  id,
  title,
  points,
  isCompleted,
  onComplete,
  isRepeatable = false,
  actionLabel = 'Complete'
}: TaskProps) {
  return (
    <div key={id} className="bg-white border border-gray-200 p-4 rounded-lg flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{points} Point</p>
      </div>
      {isCompleted ? (
        <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-full text-sm" disabled>
          {isRepeatable ? 'Complete' : <CheckCircle className="w-5 h-5" />}
        </button>
      ) : (
        <button
          className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-full text-sm"
          onClick={onComplete}
        >
          {actionLabel}
        </button>
      )}
    </div>
  )
}