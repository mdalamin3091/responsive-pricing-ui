import React from 'react'
import { Flex } from '../../styles/Global'
import { TabBadge, TabButton } from './styled'

const Tabs : React.FC = () => {
  return (
    <Flex center>
        <TabButton>Billed monthly</TabButton>
        <TabButton>Billed yearly</TabButton>
        <TabBadge>
            Save 20% 😍
        </TabBadge>
    </Flex>
  )
}

export default Tabs