
export default function Fallback() {

    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();

    console.log("hours:", hours, "minutes:", minutes)
    return (
      <div className="fallback">
        <p> Come back at pi time for a kitty </p>
      </div>
    );
}