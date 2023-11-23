import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Popover,
    PopoverTrigger,
    useDisclosure,
    Image,
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons'

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box>
            <Flex
                minH={'30px'}
                py={{ base: 4 }}
                px={{ base: 4 }}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} ml={3}>
                    <Image src="/logo.svg" alt="Logo IZZIE" width="100px" />
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Flex display={{ base: 'none', md: 'flex' }} mr={3} >
                        <DesktopNav />
                    </Flex>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    )
}

const DesktopNav = () => {
    const linkColor = 'white'
    const linkHoverColor = '#005C89'

    return (
        <Stack direction={'row'} spacing={20}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Box
                                as="a"
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Box>
                        </PopoverTrigger>
                    </Popover>
                </Box >
    ))}
        </Stack >
    )
}

const MobileNav = () => {
    return (
        <Stack bg={'gray.800'} p={4} display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    )
}

const MobileNavItem = ({ label, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Stack spacing={4} onClick={onToggle}>
            <Box
                py={2}
                as="a"
                href={href ?? '#'}
                justifyContent="space-between"
                alignItems="center"
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text fontWeight={600} color={'gray.600'}>
                    {label}
                </Text>
            </Box>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={'gray.200'}
                    align={'start'}>
                </Stack>
            </Collapse>
        </Stack>
    )
}

interface NavItem {
    label: string
    subLabel?: string
    children?: Array<NavItem>
    href?: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Início',
        href: '/inicio',
    },
    {
        label: 'Sobre',
        href: '/sobre',
    },
]