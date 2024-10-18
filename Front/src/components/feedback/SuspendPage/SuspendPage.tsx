import { Suspense } from 'react'
import LottieHandler from '../lottieHandler/lottieHandler'
const SuspendPage = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense fallback={
            <LottieHandler style={{ borderRadius: '100px', width: '200px', height: '200px', margin: '100px auto', color: 'var( --main-bg-light-color)' }} type='Loading' loop={true} message='Please wait a minute...' />

        }>
            {children}
        </Suspense>
    )
}

export default SuspendPage
