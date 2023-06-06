import React, { useEffect } from 'react'


export default function SwapPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    return (
        // <PageWrapper>
        <iframe src="https://chloe-testappv2-wmn5n7rc5q-uc.a.run.app" width="100%" height="700" scrolling="no" frameBorder="0" allow="gyroscope"></iframe>


        // </PageWrapper>
    )
}