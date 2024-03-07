import React, { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    firstName: "Charlie",
    lastName: "Bailey",
    email: "charlie.bailey@example.com",
    // Other user data fields...
  })

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  )
}
