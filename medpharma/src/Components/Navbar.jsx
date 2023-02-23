import React from 'react'
import { HStack} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <HStack>
     <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
      Health Resource Center
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
<Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
        {isOpen ? 'Close' : 'Open'}
      </MenuButton>
      <MenuList>
        <MenuItem>Health Resource Center</MenuItem>
        <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
<Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
        {isOpen ? 'Close' : 'Open'}
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
    </HStack>
  )
}

export default Navbar