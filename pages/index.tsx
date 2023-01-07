import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { getAllPhotos } from '@src/data/photos/get-all-photos';
import { PhotosData } from '@src/types/photos';

import HomePage from '@src/screens/HomePage';

export type HomeProps = {
    data: PhotosData[];
};

const Home = ({ data }: HomeProps) => {
    return (
        <>
            <Head>
                <title>Next Gallery</title>
            </Head>
            <HomePage photos={data} />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const url = 'https://localhost:3000/api/photos';
    const data = await getAllPhotos(url);

    return {
        props: { data },
    };
};

export default Home;
