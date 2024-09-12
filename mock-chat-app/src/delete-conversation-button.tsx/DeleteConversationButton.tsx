import { Component } from "solid-js";

export const DeleteConversationButton: Component<{ deleteConversation: (index: number) => void, index: number }> = (props) => {
    const title: string = 'Delete conversation';

    return (
        <button onClick={() => props.deleteConversation(props.index)}>{title}</button>
    );
}