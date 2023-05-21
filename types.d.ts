type Task = {
  id: string
  title: string
  isTaskDone: boolean
  isCardExpanded?: boolean
  isImportant?: boolean
  steps: StepState[]
  link?: string
  note?: string
  createdDate?: Date
}

// type Step = {
//   id: string
//   title: string
//   isTaskDone: boolean
//   isCardExpanded?: boolean
//   isImportant?: boolean
//   steps?: Step[]
// }

type StepState = {
  id: string
  title: string
  isStepDone: boolean
}
