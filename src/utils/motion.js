//This file provides some frameware motion animations which I will use throughout my project as well as add more motions as I progress in the future. This current code is starter code which I have taken from another github repositiory

export const textVariant = (delay) => {
    return {
        hidden: {
        y: -50,
        opacity: 0,
        },
        show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1.25,
            delay: delay,
            },
        },
    };
};

export const fadeIn = (direction, type, delay, duration) => {
    return {
        hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
        },
        show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type: type,
            delay: delay,
            duration: duration,
            ease: "easeOut",
            },
        },
    };
};

export const zoomIn = (delay, duration) => {
    return {
        hidden: {
        scale: 0,
        opacity: 0,
        },
        show: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "tween",
            delay: delay,
            duration: duration,
            ease: "easeOut",
            },
        },
    };
};

export const slideIn = (direction, type, delay, duration) => {
    return {
        hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
        },
        show: {
        x: 0,
        y: 0,
        transition: {
            type: type,
            delay: delay,
            duration: duration,
            ease: "easeOut",
        },
    },
    };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
    hidden: {},
    show: {
        transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
            },
        },
    };
};