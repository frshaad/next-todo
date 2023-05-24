import useTasks from "@/hooks/useTasks";
import TaskInput from "@/components/TaskInput";
import OngoingTasksList from "@/components/OngoingTasksList";
import CompletedTasksList from "@/components/CompletedTasksList";
import Navbar from "@/components/Navbar";

export default function Home() {
  const { tasks } = useTasks();
  const isAnyCompletedTask =
    tasks.filter((task) => task.isTaskDone).length !== 0;

  return (
    <>
      <div className="relative mx-auto my-10 flex w-11/12 max-w-lg flex-col gap-14">
        <Navbar />
        <TaskInput />
        <OngoingTasksList />
        {isAnyCompletedTask && <CompletedTasksList />}
      </div>
    </>
  );
}
