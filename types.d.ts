type Task = {
  id: string
  title: string
  isTaskDone: boolean
  isCardExpanded?: boolean
  note: string
  link: string
  isImportant?: boolean
  steps: StepState[]
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
