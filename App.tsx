import React, { useState } from 'react'
import { Text, View } from 'react-native'
import * as Yup from 'yup'

// form validation
const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, "Please enter at least 4 characters")
    .max(16, "Please enter no more than 16 characters")
    .required("Password is required"),
})


export default function App () {

  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)
  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase ] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength: number) => {
    let characterList = ''

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const digitChars = '0123456789'
    const symbolChars = '!@#$%^&*()'

    if (lowerCase) characterList += lowerCaseChars
    if (upperCase) characterList += upperCaseChars
    if (numbers) characterList += digitChars
    if (symbols) characterList += symbolChars

    const passwordResult = createPassword(characterList, passwordLength)

    setPassword(passwordResult)
    setIsPassGenerated(true)


  } 

  const createPassword = (characters: string, passwordLength: number) => {
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex =  Math.round((Math.random() * characters.length))
      result += characters.charAt(characterIndex)
    }

    return result
  }

  const resetPasswordState = () => {
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(true)
    setUpperCase(false)
    setSymbols(false)
  }



  return (
    <View>
      <Text>Hello World</Text>
    </View>
  )
}