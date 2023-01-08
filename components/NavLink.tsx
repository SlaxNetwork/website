import { Title} from '@mantine/core';
import Link from 'next/link';
import { Url } from 'url';

type Props = {
    name: string
    link: string
    active: boolean
}

const NavLink: React.FC<Props> = ({name, link, active=false}) => {

    return (
        <Link style={{textDecoration: 'none'}} href={link}>
            <Title order={5} sx={theme => ({
                "cursor": "pointer",
                "color":active?"#ffffff":"#767D88",
                "&:hover": {
                    "color":active?"#ffffff":"#cd4909"
                }
            })}>

                {name.toUpperCase()}

            </Title>
        </Link>
    )
}

export default NavLink