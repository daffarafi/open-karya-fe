import React from 'react'
import { Hero } from './Hero'
import { KaryaList } from './KaryaList'
import { Support } from './Support'
// import { PopularTags } from './PopularTags'
// import { Quotes } from './Quote'
// import { Tags } from './Tags'

export const HomeModule: React.FC = () => {
    return (
        <>
            <Hero />
            <Support />
            <KaryaList />
            {/* <PopularTags />
            <Quotes />
            <Tags /> */}
        </>
    )
}
