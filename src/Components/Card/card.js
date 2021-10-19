import React from "react";
import {Link} from 'react-router-dom';
import {useTransition, animated} from 'react-spring';

export const Card = ({listOfTodos}) => {
    const transition = useTransition(listOfTodos, {
        from: {opacity: 0, marginLeft: -100, marginRight: 100},
        enter: {opacity: 1, marginLeft: 0, marginRight: 0}
    });
    const fragment = transition((style, item) => {
        return <animated.li style={style}>
            <Link to={`${item.id}`}>{item.content}</Link>
        </animated.li>;
    });

    return (
        <ul>{fragment}</ul>
    );
}