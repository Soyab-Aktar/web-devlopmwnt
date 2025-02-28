//? Conditional Rendering option 1
// export default function Todo({task,isDone}){
//     if(isDone=== true)
//     {
//         return(
//             <li>Finished Task : {task}</li>
//         )
//     }
//     else{
//         return(
//             <li>Work on : {task}</li>
//         )
//     }
// }
//? Conditional Rendering option 2
// export default function Todo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>Finished Task : {task}</li>;
//   }
//   return <li>Work on : {task}</li>;
// }
//? Conditional rendering option 3
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone ? "Finished " : "Work on "}:
//       {task}
//     </li>
//   );
// }
//? Conditional rendering option 4
// export default function Todo({ task, isDone }) {
//     return(
//         <li>
//             {task} {isDone && ': Done'}
//         </li>
//     )
//   }
//? Conditional rendering option 5
// export default function Todo({ task, isDone }) {
//     return(
//         <li>
//             {task} {isDone || ': Do it'}
//         </li>
//     )
//   }
//? Conditional rendering option 6
export default function Todo({task,isDone}){
    let taskList;
    if(isDone){
        taskList = <li>Finished : {task}</li>
    }
    else{
        taskList = <li>Work on : {task}</li>
    }

    return taskList;
}
