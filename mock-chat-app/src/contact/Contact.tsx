import { Component } from "solid-js";

export const Contact: Component<{ title: string }> = (props) => {
    return (
        <div>
            {props.title}
        </div>
    );
};