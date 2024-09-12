import { batch, Component, createSignal, For } from "solid-js";
import { Contact } from "../contact/Contact";
import { AddConversationButton } from "../add-conversation-button/AddConversationButton";
import { DeleteConversationButton } from "../delete-conversation-button/DeleteConversationButton";
import { dndzone } from "solid-dnd-directive";
import styles from "./Sidebar.module.css"

type ContactItem = { id: number, name: string };

export const Sidebar: Component = () => {
    const title: string = 'Contacts';
    const [contacts, setContacts] = createSignal<ContactItem[]>([
        { id: 1, name: 'Contact 1' },
        { id: 2, name: 'Contact 2' },
        { id: 3, name: 'Contact 3' }
    ]);
    const [newContactName, setNewContactName] = createSignal<string>('');

    const addConversation = () => {
        if (newContactName() === '') {
            return;
        }

        batch(() => {
            setContacts((contacts) => contacts = [...contacts, { id: contacts.length + 1, name: newContactName() }]);
        })

        setNewContactName("");
    }

    const deleteConversation = (index: number) => {
        setContacts((contacts) => [...contacts.slice(0, index), ...contacts.slice(index + 1)]);
    }

    const handleDndEvent = (e: any) => {
        const { items: newContacts } = e.detail;
        setContacts(newContacts);
    }

    return (
        <div>
            <h2>{title}</h2>
            <div>
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
            </div>
            <br />
            <section
                use:dndzone={{ items: contacts }}
                on:consider={handleDndEvent}
                on:finalize={handleDndEvent}
            >
                <For each={contacts()}>{(contact, i) =>
                    <div class={styles.item}>
                        <Contact title={contact.name} />
                        <DeleteConversationButton deleteConversation={deleteConversation} index={i()} />
                    </div>
                }</For>
            </section>
        </div>
    );
};