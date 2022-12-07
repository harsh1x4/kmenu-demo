import { Command, CommandMenu, CommandWrapper, useCommands, useKmenu } from 'kmenu'
import {
    FiAlertCircle,
    FiCode,
    FiCommand,
    FiCopy,
    FiGithub,
    FiGlobe,
    FiLinkedin,
    FiTwitter,
    FiInstagram,
    FiZap,
    FiSearch,
    FiPlus,
    FiEdit2,
    FiSettings,
    FiGitBranch
} from 'react-icons/fi'
import { RxDiscordLogo } from "react-icons/rx";


import 'kmenu/dist/index.css'
import styles from '../../styles/Home.module.css'

const Palette = () => {
    const { setOpen } = useKmenu()
    const { toggle } = useKmenu()
    const main = [
        {
            category: 'Utility',
            commands: [
                {
                    icon: <FiSearch />,
                    text: 'Search Original Documentation',
                    perform: () => setOpen(2)
                },
                {
                    icon: <FiCopy />,
                    text: 'Copy Original Documentation URL',
                    perform: () =>
                        navigator.clipboard.writeText('https://github.com/harshhhdev/kmenu'),
                }
            ]
        },
        {
            category: 'Social',
            commands: [
                {
                    icon: <FiGithub />,
                    text: 'GitHub',
                    keywords: 'GitHub',
                    shortcuts: { modifier: 'ctrl', keys: ['k'] },
                    href: 'https://github.com/harsh1x4',
                    newTab: true
                },
                {
                    icon: <FiLinkedin />,
                    text: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/harsh1x4/',
                    newTab: true
                },
                {
                    icon: <FiTwitter />,
                    text: 'Twitter',
                    href: 'https://twitter.com/harsh1x4',
                    newTab: true
                },
                {
                    icon: <FiGlobe />,
                    text: 'Portfolio',
                    href: 'https://harsh1x4.github.io',
                    newTab: true
                },
                {
                    icon: <RxDiscordLogo />,
                    text: 'Discord',
                    href: 'https://discordapp.com/users/804398864063791124',
                    newTab: true
                },
                {
                    icon: <FiInstagram />,
                    text: 'Instagram',
                    href: 'https://www.instagram.com/harsh1x4/',
                    newTab: true
                }
            ]
        }
    ]

    const nested = [
        {
            category: 'Guide',
            commands: [
                {
                    icon: <FiGitBranch />,
                    text: 'Source Code',
                    keywords: 'GitHub',
                    href: 'https://github.com/harshhhdev/kmenu',
                    newTab: true
                },
                {
                    icon: <FiZap />,
                    text: 'Quickstart',
                    href: 'https://github.com/harshhhdev/kmenu#-quickstart',
                    newTab: true
                },
                {
                    icon: <FiCommand />,
                    text: 'Using the Provider',
                    href: 'https://github.com/harshhhdev/kmenu/#using-the-provider',
                    newTab: true
                },
                {
                    icon: <FiPlus />,
                    text: 'Adding Commands',
                    href: 'https://github.com/harshhhdev/kmenu#adding-commands',
                    newTab: true
                },
                {
                    icon: <FiCode />,
                    text: 'useKmenu Hook',
                    href: 'https://github.com/harshhhdev/kmenu/#usekmenu-hook',
                    newTab: true
                },
                {
                    icon: <FiCode />,
                    text: 'useCommands Hook',
                    href: 'https://github.com/harshhhdev/kmenu/#usecommands-hook',
                    newTab: true
                },
                {
                    icon: <FiEdit2 />,
                    text: 'Customising the Menu',
                    href: 'https://github.com/harshhhdev/kmenu#customising-the-menu',
                    newTab: true
                },
                {
                    icon: <FiSettings />,
                    text: 'Setting up the Menu',
                    href: 'https://github.com/harshhhdev/kmenu#setting-up-the-menu',
                    newTab: true
                },
                {
                    icon: <FiCommand />,
                    text: 'Nested Menus',
                    href: 'https://github.com/harshhhdev/kmenu#nested-menus',
                    newTab: true
                },
                {
                    icon: <FiCode />,
                    text: 'useShortcut Hook',
                    href: 'https://github.com/harshhhdev/kmenu#useshortcut-hook',
                    newTab: true
                }
            ]
        }
    ]

    const [mainCommands] = useCommands(main)
    const [navigationCommands] = useCommands(nested)

    return (
        <>
            <CommandWrapper>
                <CommandMenu commands={mainCommands} crumbs={['Home']} index={1} />
                <CommandMenu
                    commands={navigationCommands}
                    crumbs={['Home', 'Search']}
                    index={2}
                />
            </CommandWrapper>

            {/* You can comment the below code and can use Intro.js. Remember to uncomment the intro component in index.js */}
            <button className={styles.btn} onClick={toggle}>
                <FiCommand />
            </button>
        </>
    )
}

export default Palette