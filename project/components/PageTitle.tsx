import Head from "next/head"

type Props = {
    title: string
}

function PageTitle({ title }: Props) {
    return (
        <Head>
            {/* We use this head tag to set the page title */}
            <title>{title}</title>
        </Head>
    )
}

export default PageTitle