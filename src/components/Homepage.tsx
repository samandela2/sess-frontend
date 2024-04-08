import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";

const Homepage = () => {
  // Replace with actual logic for fetching and displaying user info and schedules
  const userInfo = { name: "John Doe", role: "Admin" };
  const schedules = [
    { date: "1/1", time: "2:00pm", clientName: "Jane Smith" },
    // ... more schedules
  ];

  return (
    <div>
      <section>
        <h2>Profile</h2>
        <p>{userInfo.name}</p>
        <p>{userInfo.role}</p>
      </section>

      <section>
        <h2>Schedule</h2>
        <ul>
          {schedules.map((schedule) => (
            <li key={schedule.date}>
              {schedule.date} at {schedule.time} with {schedule.clientName}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Actions</h2>
        {/* Replace with actual action buttons */}
        <LinkContainer to="/modify-appointment">
          <Button variant="primary">Modify Appointment</Button>
        </LinkContainer>
      </section>

      {userInfo.role === "Admin" && (
        <section>
          <h2>Client (admin only)</h2>
          {/* Replace with actual client search functionality */}
          <input type="search" placeholder="Search client" />
        </section>
      )}

      {/* ... other sections as per your design */}
    </div>
  );
};

export default Homepage;
