"use client";
import {useEffect} from "react";
import {motion, stagger, useAnimate} from "framer-motion";
import {cn} from "@/utils/cn";

export const TextGenerateEffect = ({
                                       words,
                                       indices,
                                       className,
                                   }: {
    words: string;
    indices?: number[];
    className?: string;
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 3,
                delay: stagger(0.15),
            }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope} className={className}>  {/* Apply className here */}
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className={cn('opacity-0', indices?.includes(idx) ? 'text-gradient' : '')}
                        >
                            {word}
                            {" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return <>{renderWords()}</>;
};