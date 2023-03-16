import React from 'react';
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  BoxProps,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { NavItem } from './NavItems';

interface LinkItemProps {
    name: string;
    icon: IconType;
    href: string;
  }
  const LinkItems: Array<LinkItemProps> = [
    { name: 'Dashboard', icon: FiHome, href: '/dashboard' },
    { name: 'Contas', icon: FiTrendingUp, href: '/accounts' },
    { name: 'Transações', icon: FiCompass, href: '/transactions' },
    { name: 'Cartões', icon: FiStar, href: '/cards' },
    { name: 'Configurações', icon: FiSettings, href: '/settings' },
  ];

  interface SidebarProps extends BoxProps {
    onClose: () => void;
  }

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
      <Box
        transition="3s ease"
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
        {...rest}>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Digo Finanças
          </Text>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} href={link.href}>{link.name}</NavItem>
        ))}
      </Box>
    );
  };