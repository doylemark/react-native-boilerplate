# react-native-boilerplate

#### Dependancies
```zsh
  expo install react-native-redash 
  react-native-reanimated
  react-native-screens
  @react-navigation/stack
  @react-navigation/native
  @react-native-community/masked-view
  expo-asset
  expo-constants
  expo-font
```
  
`yarn add eslint eslint-config-react-native-wcandillon`

#### tsconfig increased strictness
```json
{
  "compilerOptions": {
    "noEmit": true,
    "lib": [
      "dom",
      "esnext"
    ],
    "jsx": "react-native",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "skipLibCheck": true,
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true
  }
}
```
