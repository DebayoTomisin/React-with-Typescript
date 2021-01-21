import React from "react"
import { ReactElement } from "react"
import { PropsWithChildren } from "react"
import { FunctionComponent } from "react"

export const MyComponent : React.FC = () => <h1>Hello there</h1> // FC means a functional component

type FC<P = {} > = FunctionComponent <P>



/* Nothing to see here really, just messing around with react with typescript */