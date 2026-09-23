/*
⭐ Props — YOU ARE HERE

Main idea: Props allow a parent component to pass data to a child component.

Example:

<Contact
    name="Felix"
    phone="(212) 555-4567"
    email="thecat@hotmail.com"
/>

The Contact component receives that information:

function Contact(props) {
    return <h3>{props.name}</h3>
}

Or using destructuring:

function Contact({ name, phone, email }) {
    return (
        <>
            <h3>{name}</h3>
            <p>{phone}</p>
            <p>{email}</p>
        </>
    )
}
🧠 Remember:

Props = data passed from a parent component to a child component.

Use props when you have:

Same structure + different data

Contact component
      ↓
 ┌─────────────┐
 │ Same design │
 └─────────────┘
      ↓
Different data
   ↓    ↓    ↓
Felix  Fluffy  Pumpkin

Instead of creating four different components, you create one reusable component and pass different data to it.

Things you learned in Props:
Passing props
Receiving props
props.name
Multiple props
Passing images/data
Destructuring props
Reusable components
Parent → child data flow
*/