import Header from '@/app/Header/page';
import React from 'react'
import styles from './page.module.css'

const getResults = async (keyword: string) => {
    const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${keyword}&format=json`);
    return res.json();
};

type Props = {
    params: { searchTerm: string }
}

export default async function Results({ params }: Props) {
    const results = await getResults(params.searchTerm);

    return (
        <main className={styles.main}>
            <Header></Header>
            <ul>
                {
                    results.query.search
                        .map((item: any) => <>
                            <li className={styles.li} dangerouslySetInnerHTML={{ __html: item?.snippet }} />
                            <br />
                        </>)
                }
            </ul>
        </main>
    )
}
