import { batch, Component, createSignal, For } from "solid-js";
import { Contact } from "../contact/Contact";
import { AddConversationButton } from "../add-conversation-button/AddConversationButton";
import { DeleteConversationButton } from "../delete-conversation-button.tsx/DeleteConversationButton";

export const Sidebar: Component = () => {
    const title: string = 'Contacts';
    const [contacts, setContacts] = createSignal<string[]>([
        'Contact 1',
        'Contact 2',
        'Contact 3'
    ]);
    const [newContactName, setNewContactName] = createSignal<string>('');

    const addConversation = () => {
        if (newContactName() === '') {
            return;
        }

        batch(() => {
            setContacts((contacts) => contacts = [...contacts, newContactName()]);
        })
        
        setNewContactName("");
    }

    const deleteConversation = (index: number) => {
        setContacts((contacts) => [...contacts.slice(0, index), ...contacts.slice(index + 1)]);
    }

    return (
        <div>
            <h2>{title}</h2>
            <form>
                <input
                    placeholder="Enter contact name"
                    required
                    value={newContactName()}
                    onInput={(e) => setNewContactName(e.currentTarget.value)}
                />
            <div>
                <AddConversationButton addConversation={addConversation} />
            </div>
            </form>
            <ul>
                <For each={contacts()}>{(contact, i) =>
                    <li>
                        <Contact title={contact} />
                        <DeleteConversationButton deleteConversation={deleteConversation} index={i()} />
                    </li>
                }</For>
            </ul>
        </div>
    );
};