import { Component } from "solid-js";

export const AddConversationButton: Component<{ addConversation: () => void }> = (props) => {
    const title: string = 'Add conversation';

    return (
        <button onClick={() => props.addConversation()}>{title}</button>
    );
}