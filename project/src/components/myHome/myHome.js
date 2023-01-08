import MeasurementList from "./measurement/measurementList";
/**
 *
 * @returns The home page for user experience that has been customized solely for the user
 */
function MyHome() {
  return (
    <>
      <section>
        <h1>Welcome David</h1>
      </section>
      <section>
        <p>Here are your favorite topics from the community</p>
      </section>
      <section>
        <MeasurementList />
      </section>
    </>
  );
}

export default MyHome;
