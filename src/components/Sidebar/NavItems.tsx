import React from 'react';
import NextLink from "next/link";
import {
  Flex,
  Icon,
  Link,
  FlexProps,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { ReactText } from 'react';

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  href: string;
}

export const NavItem = ({ icon, children, href, ...rest }: NavItemProps) => {
  return (
    <Link as={NextLink} href={href} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};