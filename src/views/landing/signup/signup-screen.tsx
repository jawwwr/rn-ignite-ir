import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text } from "../../shared/text"
import { Screen } from "../../shared/screen"
import { color } from "../../../theme"
import { NavigationScreenProps } from "react-navigation"

export interface SignupScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

// @inject("mobxstuff")
@observer
export class Signup extends React.Component<SignupScreenProps, {}> {
  render() {
    return (
      <Screen style={ROOT} preset="fixedCenter">
        <Text preset="header" tx="signup.header" />
      </Screen>
    )
  }
}
