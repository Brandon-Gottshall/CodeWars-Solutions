export default function KataWrapper({ children, solution, testCase }) {
  return (
    <div className="w-full h-full space-y-8 bg-slate-300">
      {children}
      <p className="pt-0 mt-0">Result:</p>
      <p className="pt-0 mt-0">{solution(testCase).toString()}</p>
  </div>)
}