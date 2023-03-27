import { useParams, Link } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>The Event Detail Page!</h1>
      <p>Event ID: {params.eventId}</p>
      <p>
        <Link to={`/events/${params.eventId}/edit`}>EDIT EVENT</Link>
      </p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default EventDetailPage;
