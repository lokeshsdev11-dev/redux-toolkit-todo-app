import useOnlineStatus from './Hooks/useOnlineStatus'

export default function Status() {
   const status =  useOnlineStatus();
  return (
    <div>status {status ? "User is online" : "User is offline"}</div>
  )
}
