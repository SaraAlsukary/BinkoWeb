import Lottie from "lottie-react";
import girl from '@assets/lottieFiles/girlWithBook.json'

const lottieFilesMap = {
    girl
};

type LottieHandlerProps = {
    type: keyof typeof lottieFilesMap;
    message?: string;
    className?: string;
    loop?: boolean;
};

const LottieHandler = ({ type, message, className, loop }: LottieHandlerProps) => {
    const lottie = lottieFilesMap[type];
    // const messageStyle =
    //     type === "error"
    //         ? { fontSize: "19px", color: "red" }
    //         : { fontSize: "19px", marginTop: "30px" };

    return (
        <div className={`d-flex flex-column align-items-center ${className}`}>
            <Lottie animationData={lottie} style={{ width: "400px" }} loop={loop} />
            {message && <h3
            // style={messageStyle}
            >{message}</h3>}
        </div>
    );
};

export default LottieHandler;
