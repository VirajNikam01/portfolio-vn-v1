import { useEffect, useState } from "react";

type useDomReturnType = {
    scrollPosition: number;
}

const useScrollPosition = (): useDomReturnType => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    const handelScroll = () => {
        setScrollPosition(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", handelScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handelScroll)
        }

    }, [])

    return { scrollPosition }

}
export default useScrollPosition;