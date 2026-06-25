import { useState, useEffect } from "react"

export default function useOnlineStatus() {
    const [online, setOnline] = useState(true);

    function handleOnline() {
        console.log('Online')
        setOnline(true);
    }

    function handleOffline() {
        console.log('Offline')
        setOnline(false);
    }

    useEffect(() => {
        window.addEventListener("offline", handleOffline);
        window.addEventListener("online", handleOnline);
        return () => {
          window.removeEventListener('online', handleOnline);
          window.removeEventListener('offline', handleOffline);
        };
      }, [])

    return online;
}