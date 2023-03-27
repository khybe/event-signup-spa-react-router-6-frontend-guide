import { Link } from "react-router-dom";

const EVENTS = [
  { id: "e1", title: "First Event" },
  { id: "e2", title: "Second Event" },
  { id: "e3", title: "Third Event" },
];

function EventsPage() {
  return (
    <>
      <h1>The Events Page!</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
