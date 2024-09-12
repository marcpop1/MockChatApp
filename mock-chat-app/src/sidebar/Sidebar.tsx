import { Component, createSignal, For } from "solid-js";
import { Contact } from "../contact/Contact";

export const Sidebar: Component = () => {
    const title: string = 'Contacts';
    const [contacts, setContacts] = createSignal<string[]>([
        'Contact 1',
        'Contact 2',
        'Contact 3'
    ]);
    return (
        <div>
            <span>{title}</span>
            <ul>
                <For each={contacts()}>{(contact, i) => 
                    <li>
                        <Contact title={contact}/>
                    </li>
                }</For>
            </ul>
        </div>
    );
};