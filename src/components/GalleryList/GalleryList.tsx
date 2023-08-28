import React, { useLayoutEffect, useRef } from "react";
import { GalleryImage } from "./../../types/entities.types";
import GalleryItem from "./../GalleryItem/GalleryItem";
import st from "./styles.module.scss";
import { gsap } from "gsap";

interface Props {
    gallery: GalleryImage[];
}

const GalleryList = ({ gallery }: Props) => {
    const listRef = useRef<HTMLUListElement | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context((context) => {
            context.add(() => {
                gsap.fromTo(".item", {
                    scale: 0,
                },
                    {
                        scale: 1.2,
                        stagger: 0.1,
                        duration: 0.3
                    });
                gsap.to(".item", {
                    scale: 1,
                    stagger: 0.1,
                    duration: 1.2
                });
            });
        }, listRef)

        return () => ctx.revert();
    }, []);
    return (
        <>
            {gallery.length === 0 ? (
                <span className={st["gallery-info"]}>Gallery is empty</span>
            ) : (
                <>
                    <ul ref={listRef} className={st["gallery-list"]}>
                        {gallery.map((item) => (
                            <li key={item.id} className="item">
                                <GalleryItem item={item} />
                            </li>
                        ))}
                    </ul>
                    <button className={st.btn}>Load more</button>
                </>
            )}
        </>
    );
};

export default GalleryList;
