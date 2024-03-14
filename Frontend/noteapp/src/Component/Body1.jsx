import { Avatar, Box, Center, Grid, GridItem, HStack, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const Body1 = () => {
    return (
        <>
            <Box width={"100%"} height={"70vh"} >
                <Box>
                    <Heading as='h2' size={['xl','xl','xl','2xl']} pos={"relative"} left={['3vw','3vw','0vw','0vw','0vw']} noOfLines={2}>
                        Comprehensive underneath,
                    </Heading>
                    <Center pos={"relative"} top={['0px','0px','0px','0px',"1vh"]} left={['3vw','3vw','0vw','0vw','0vw']}>
                        <Heading as='h2' size={['xl','xl','xl','2xl']}>
                            simple on the surface
                        </Heading>
                    </Center>
                </Box>
                <Box width={"70%"} margin={"10vh auto"} paddingBottom={"5vh"} borderBottom={"0.5px solid lightgrey"}>
                    <Grid  templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)']} gap={6} >
                        <GridItem width={["90vw","90vw","17vw","17vw","17vw"]}>
                            <Box>
                                <HStack gap={6}>
                                    <Avatar size={"xs"} src='https://simplenoteblog.files.wordpress.com/2020/07/ic_cloud-sync.png?w=72' />
                                    <Heading as='h4' size={'md'}>
                                        Use it everywhere
                                    </Heading>
                                </HStack>
                                <Center mt={"2vh"}>
                                    <Text align={["left"]} fontSize={"16px"} lineHeight={"1.6em"} color={"#646970"}>
                                    Notes stay updated across all your devices, automatically and in real time. There’s no “sync” button: It just works.
                                    </Text>
                                </Center>
                            </Box>
                        </GridItem>
                        <GridItem width={["90vw","90vw","17vw","17vw","17vw"]}>
                            <Box>
                                <HStack gap={6}>
                                    <Avatar size={"xs"} src='https://simplenoteblog.files.wordpress.com/2020/07/ic_tags.png?w=72' />
                                    <Heading as='h4' size={'md'}>
                                        Stay Organized
                                    </Heading>
                                </HStack>
                                <Center mt={"2vh"}>
                                    <Text align={"left"} fontSize={"16px"} lineHeight={"1.6em"} color={"#646970"}>
                                    Add tags to find notes quickly with instant searching.
                                    </Text>
                                </Center>
                            </Box>
                        </GridItem>
                        <GridItem width={["90vw","90vw","17vw","17vw","17vw"]}>
                            <Box>
                                <HStack gap={6}>
                                    <Avatar size={"xs"} src='https://simplenoteblog.files.wordpress.com/2020/07/ic_collaborate.png?w=72' />
                                    <Heading as='h4' size={'md'}>
                                    Work together
                                    </Heading>
                                </HStack>
                                <Center mt={"2vh"}>
                                    <Text align={"left"} fontSize={"16px"} lineHeight={"1.6em"} color={"#646970"}>
                                    Share a to-do list, post some instructions, or publish your notes online.
                                    </Text>
                                </Center>
                            </Box>
                        </GridItem>
                        <GridItem width={["90vw","90vw","17vw","17vw","17vw"]}>
                            <Box>
                                <HStack gap={6}>
                                    <Avatar size={"xs"} src='https://simplenoteblog.files.wordpress.com/2020/07/ic_history.png?w=72' />
                                    <Heading as='h4' size={'md'}>
                                        Go back in time
                                    </Heading>
                                </HStack>
                                <Center mt={"2vh"}>
                                    <Text align={"left"} fontSize={"16px"} lineHeight={"1.6em"} color={"#646970"}>
                                    Notes are backed up with every change, so you can see what you noted last week or last month.
                                    </Text>
                                </Center>
                            </Box>
                        </GridItem>
                        <GridItem width={["90vw","90vw","17vw","17vw","17vw"]}>
                            <Box>
                                <HStack gap={6}>
                                    <Avatar size={"xs"} src='https://simplenoteblog.files.wordpress.com/2020/07/ic_notes.png?w=72' />
                                    <Heading as='h4' size={'md'}>
                                    Markdown support
                                    </Heading>
                                </HStack>
                                <Center mt={"2vh"}>
                                    <Text align={"left"} fontSize={"16px"} lineHeight={"1.6em"} color={"#646970"}>
                                    Write, preview, and publish your notes in Markdown format.
                                    </Text>
                                </Center>
                            </Box>
                        </GridItem>
                        <GridItem width={["90vw","90vw","17vw","17vw","17vw"]}>
                            <Box>
                                <HStack gap={6}>
                                    <Avatar size={"xs"} src='https://simplenoteblog.files.wordpress.com/2020/07/ic_info.png?w=72' />
                                    <Heading as='h4' size={'md'}>
                                    It’s free
                                    </Heading>
                                </HStack>
                                <Center mt={"2vh"}>
                                    <Text align={"left"} fontSize={"16px"} lineHeight={"1.6em"} color={"#646970"}>
                                    Apps, backups, syncing, sharing – it’s all completely free.
                                    </Text>
                                </Center>
                            </Box>
                        </GridItem>
                    </Grid>
                </Box>

            </Box>

        </>
    )
}
